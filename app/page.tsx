'use client'

import React, { useRef, useMemo, useState, Suspense, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll, Environment, Resize, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSound from 'use-sound'

// Import new components
import { Navbar } from './components/Navigation/Navbar'
import { Button } from './components/UI/Button'
import { Card } from './components/UI/Card'
import { Squares } from './components/Effects/Squares'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const colors = {
  pinkNeon: '#ff0055',
  cyanNeon: '#00ffff',
  purpleDeep: '#05000a',
}

function CustomLoader() {
  const { active, progress } = useProgress()
  const [text, setText] = useState('INITIALIZING CACHE...')

  // Cyber-text effect
  React.useEffect(() => {
    const texts = [
      'LOADING ASSETS...',
      'ESTABLISHING CONNECTION...',
      'DECRYPTING DATA...',
      'RENDERING 3D CONTEXT...',
      'SYSTEM OPTIMIZATION: 99%'
    ]
    let i = 0
    const interval = setInterval(() => {
      setText(texts[i % texts.length])
      i++
    }, 800)
    return () => clearInterval(interval)
  }, [])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#05000a] flex flex-col items-center justify-center font-mono">
      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none"></div>

      <div className="relative w-full max-w-md p-8 border border-pink-500/20 bg-black/40 backdrop-blur-sm">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pink-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pink-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pink-500"></div>

        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-pink-500/70">PABLIFE_OS_V2.0</span>
          <span className="text-2xl font-black text-white tracking-tighter">{progress.toFixed(0)}%</span>
        </div>

        {/* Cyber Progress Bar */}
        <div className="w-full h-1 bg-gray-900 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(255,0,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-cyan-400/80 animate-pulse">{text}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1 h-1 bg-pink-500 ${i < (progress / 20) ? 'opacity-100' : 'opacity-20'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FloatingParticles = () => {
  // Layer 1: Dust (Small, Cyan, Many)
  const dustPoints = useMemo(() => {
    const p = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 20
      p[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return p
  }, [])

  // Layer 2: Embers (Medium, Pink, float up)
  const emberPoints = useMemo(() => {
    const p = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15
      p[i * 3 + 1] = (Math.random() - 0.5) * 15
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [])

  // Layer 3: Orbs (Large, White, Few)
  const orbPoints = useMemo(() => {
    const p = new Float32Array(30 * 3)
    for (let i = 0; i < 30; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10
      p[i * 3 + 1] = (Math.random() - 0.5) * 10
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [])

  const dustRef = useRef<THREE.Points>(null!)
  const embersRef = useRef<THREE.Points>(null!)
  const orbsRef = useRef<THREE.Points>(null!)

  useFrame((state, delta) => {
    // Dust: Slow, random drift
    if (dustRef.current) {
      dustRef.current.rotation.y += delta * 0.05
      dustRef.current.rotation.x += delta * 0.02
    }

    // Embers: Float Up
    if (embersRef.current) {
      embersRef.current.position.y += delta * 0.2
      if (embersRef.current.position.y > 5) embersRef.current.position.y = -5
      embersRef.current.rotation.y -= delta * 0.1
    }

    // Orbs: Pulse breathing (scale)
    if (orbsRef.current) {
      orbsRef.current.rotation.z += delta * 0.05
      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1
      orbsRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group>
      {/* Dust Layer */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={500} args={[dustPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#00ffff" transparent opacity={0.4} sizeAttenuation={true} depthWrite={false} />
      </points>

      {/* Embers Layer */}
      <points ref={embersRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={100} args={[emberPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#ff0055" transparent opacity={0.6} sizeAttenuation={true} depthWrite={false} />
      </points>

      {/* Orbs Layer */}
      <points ref={orbsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={30} args={[orbPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.8} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}

function Model() {
  const scroll = useScroll()
  const groupRef = useRef<THREE.Group>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const { gl, size, viewport } = useThree()

  const statueData = useGLTF('/david_statues.glb')
  const glassesData = useGLTF('/oculos.glb')

  const POS_INICIAL = { x: 0.8, y: 0, z: 8.8, rotY: 0.2 }
  const POS_SECAO_2 = { x: -1, y: -0.5, z: 7, rotY: -0.5 }
  const POS_SECAO_3 = { x: 4, y: -0.5, z: 8, rotY: 0.5 }
  const POS_SECAO_4 = { x: 0, y: -1.5, z: 8.5, rotY: 0 }

  const combinedScene = useMemo(() => {
    const statueClone = statueData.scene.clone()
    const glassesClone = glassesData.scene.clone()

    statueClone.traverse((c: any) => {
      if (c.isMesh) {
        c.material = new THREE.MeshStandardMaterial({
          color: '#ffffff',
          roughness: 0.1,
          metalness: 0.1,
          envMapIntensity: 1.5,
        })
        c.castShadow = true
        c.receiveShadow = true
      }
    })

    glassesClone.traverse((c: any) => c.castShadow = true)

    const scale = 0.52
    glassesClone.scale.set(scale, scale, scale)
    glassesClone.position.set(140, 100, -630)
    glassesClone.rotation.set(0, 0.3, 0)

    statueClone.add(glassesClone)
    return statueClone
  }, [statueData.scene, glassesData.scene])

  useLayoutEffect(() => {
    if (!groupRef.current) return

    groupRef.current.position.set(POS_INICIAL.x, POS_INICIAL.y, POS_INICIAL.z)
    groupRef.current.rotation.y = POS_INICIAL.rotY

    tl.current = gsap.timeline({ paused: true })

    tl.current
      .to(groupRef.current.position, {
        x: POS_SECAO_2.x, y: POS_SECAO_2.y, z: POS_SECAO_2.z, duration: 1, ease: 'power2.inOut'
      }, 0)
      .to(groupRef.current.rotation, {
        y: POS_SECAO_2.rotY, duration: 1, ease: 'power2.inOut'
      }, 0)
      .to(groupRef.current.position, {
        x: POS_SECAO_3.x, y: POS_SECAO_3.y, z: POS_SECAO_3.z, duration: 1, ease: 'power2.inOut'
      }, 1)
      .to(groupRef.current.rotation, {
        y: POS_SECAO_3.rotY, duration: 1, ease: 'power2.inOut'
      }, 1)
      .to(groupRef.current.position, {
        x: POS_SECAO_4.x, y: POS_SECAO_4.y, z: POS_SECAO_4.z, duration: 1, ease: 'power2.inOut'
      }, 2)
      .to(groupRef.current.rotation, {
        y: POS_SECAO_4.rotY, duration: 1, ease: 'power2.inOut'
      }, 2)

  }, [])

  useFrame((state, delta) => {
    if (!tl.current || !groupRef.current) return
    const durationTotal = tl.current.duration()
    const currentProgress = scroll.offset * durationTotal
    tl.current.seek(currentProgress)

    // Breathing animation
    groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.8) * 0.001
    groupRef.current.rotation.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.0005
  })

  return (
    <group ref={groupRef}>
      <FloatingParticles />
      <Resize>
        <primitive object={combinedScene} />
      </Resize>
    </group>
  )
}

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`h-screen w-screen flex flex-col justify-center p-6 md:p-20 relative pointer-events-none ${className}`}>
    <div className="pointer-events-auto w-full">
      {children}
    </div>
  </section>
)

const ScrollAnimations = () => {
  const scroll = useScroll()

  useGSAP(() => {
    if (!scroll.el) return

    // Hero Animation (moved here to ensure elements exist)
    const tl = gsap.timeline({ delay: 0.5 })
    tl.from(".hero-line", { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" })

    // Duality Section - Left
    gsap.from(".duality-left", {
      scrollTrigger: {
        trigger: ".duality-left",
        scroller: scroll.el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Duality Section - Right
    gsap.from(".duality-right", {
      scrollTrigger: {
        trigger: ".duality-right",
        scroller: scroll.el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    // Features Cards
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-grid", // Use a parent wrapper for trigger reference if better, or the card itself
        scroller: scroll.el,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Stagger the cards
      ease: "back.out(1.7)"
    })

    // CTA Box
    gsap.from(".cta-box", {
      scrollTrigger: {
        trigger: ".cta-box",
        scroller: scroll.el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    })

  }, { dependencies: [scroll.el] })

  return null
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const [playBg, { stop: stopBg }] = useSound('/ambient.mp3', {
    loop: true,
    volume: 0.5,
  })

  const toggleSound = () => {
    if (isMuted) {
      playBg()
      setIsMuted(false)
    } else {
      stopBg()
      setIsMuted(true)
    }
  }



  return (
    <div ref={containerRef} className="w-full h-screen bg-[#05000a] text-white overflow-hidden selection:bg-pink-500 selection:text-white font-sans">

      <Navbar />

      {/* Floating Sound Toggle */}
      <button
        onClick={toggleSound}
        className="fixed bottom-8 right-8 z-50 text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 hover:border-pink-500 transition-all flex items-center gap-2 bg-black/50 backdrop-blur"
      >
        <span className={`w-2 h-2 rounded-full ${!isMuted ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
        {isMuted ? 'SOM OFF' : 'SOM ON'}
      </button>

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.2 }}>
        <color attach="background" args={['#1a0b2e']} />
        <fog attach="fog" args={['#1a0b2e', 5, 30]} />

        <Environment preset="city" background={false} blur={1} />
        <ambientLight intensity={0.4} />

        {/* Dramatic Lighting Key/Fill/Rim aligned with App Colors */}
        {/* Opposite Light (Left) - Light Blue */}
        <spotLight position={[-6, 4, 5]} angle={0.4} penumbra={1} intensity={100} color="#aaddff" castShadow shadow-bias={-0.0001} />

        {/* Main Light (Top Right) - Super Strong Neon Pink */}
        <spotLight position={[6, 6, 5]} angle={0.4} penumbra={1} intensity={300} color="#ff00ff" castShadow shadow-bias={-0.0001} />

        {/* Fill from bottom */}
        <spotLight position={[0, -5, 5]} angle={0.5} penumbra={1} intensity={80} color="#b026ff" />

        {/* Back Light for Rim */}
        <pointLight position={[0, 4, -4]} intensity={60} color="#ffffff" />

        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.8} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>

        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.3}>
            <Model />
            <Scroll html style={{ width: '100%' }}>

              {/* --- HERO SECTION --- */}
              <Section className="items-start pl-[5vw] md:pl-[10vw]">
                <div className="max-w-5xl z-10 mix-blend-normal relative">
                  {/* Decorative Elements */}
                  <div className="absolute -left-20 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-transparent opacity-50 hidden md:block"></div>

                  <div className="hero-line flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 border border-cyan-500/30 rounded-full text-cyan-400 font-mono text-[10px] tracking-widest uppercase bg-cyan-900/10 backdrop-blur">
                      System v2.0 Online
                    </span>
                  </div>

                  <h1 className="hero-line text-4xl md:text-[5rem] font-black mb-4 leading-20  tracking-tighter mix-blend-screen">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">CONSTRUA</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">SEU LEGADO</span>
                  </h1>

                  <p className="hero-line text-lg md:text-2xl text-gray-400 max-w-xl leading-relaxed mb-12 border-l-2 border-pink-500 pl-6 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-r-xl backdrop-blur-sm">
                    PABLife é um ecossistema de desenvolvimento humano que integra psicologia, nutrição e organização
                  </p>

                  <div className="hero-line flex gap-6">
                    <a href="https://apps.apple.com/br/app/pablife-app/id6756442379" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="lg" glow>
                        BAIXAR APP
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/pablife_app/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg">
                        INSTAGRAM
                      </Button>
                    </a>
                  </div>
                </div>
              </Section>

              {/* --- DUALITY SECTION --- */}
              <Section className="flex flex-col md:flex-row justify-between w-full items-center md:items-end px-[5vw] md:px-[10vw]">

                <div className="duality-left text-left mb-10 md:mb-0 opacity-60 hover:opacity-100 transition-opacity duration-500 backdrop-blur-md p-8 rounded-2xl border border-white/5 bg-black/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest text-cyan-400">
                    /// O Velho Você
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
                    REFÉM DA<br /><span className="text-pink-500 drop-shadow-lg">DOPAMINA</span>
                  </h2>
                  <ul className="text-white leading-relaxed font-mono text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="text-red-500">×</span> Procrastinação Crônica</li>
                    <li className="flex items-center gap-2"><span className="text-red-500">×</span> Físico Estagnado</li>
                    <li className="flex items-center gap-2"><span className="text-red-500">×</span> Piloto Automático</li>
                  </ul>
                </div>

                <div className="duality-right text-right z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest text-cyan-400">
                    /// O Novo Padrão
                  </h3>
                  <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    DOMINE <span className="text-pink-500">TUDO.</span>
                  </h2>
                  <p className="text-lg text-white/90 mb-6 font-medium max-w-md ml-auto">
                    Bem-estar. Produtividade com equlíbrio. Clareza mental absoluta. Bem-vindo à elite.
                  </p>
                  <div className="inline-flex gap-4 md:gap-8 font-mono text-[10px] md:text-xs tracking-widest text-pink-500 justify-end w-full">
                    <span className="border border-pink-500/30 px-2 py-1 bg-pink-500/10">BIOHACKING</span>
                    <span className="border border-pink-500/30 px-2 py-1 bg-pink-500/10">LIFESTYLE</span>
                    <span className="border border-pink-500/30 px-2 py-1 bg-pink-500/10">NETWORKING</span>
                  </div>
                </div>

              </Section>

              {/* --- FEATURES SECTION --- */}
              <Section className="relative">
                {/* Background Effect */}
                <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <Squares color="#ff0055" squareSize={40} speed={0.5} />
                </div>

                <div className="max-w-[1600px] mx-auto w-full relative z-10">
                  <div className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                      Pilares do<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Ecossistema</span>
                    </h2>
                  </div>
                  <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {[
                      { num: "01", title: "Psicologia", desc: "Suporte especializado para fortalecer sua inteligência emocional.", img: "/medusa.png" },
                      { num: "02", title: "Nutrição", desc: "Planos alimentares focados em performance e longevidade.", img: "/estatua.png" },
                      { num: "03", title: "ORGANIZAÇÃO ", desc: "O app que organiza sua rotina, metas e evolução.", img: "/woman.png" }
                    ].map((feature) => (
                      <Card key={feature.num} className="feature-card group hover:border-pink-500/50 hover:bg-white/5 transition-all duration-500">
                        <div className='w-full flex justify-end relative'>
                          <div className="absolute inset-0 bg-pink-500/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity" />
                          <img src={feature.img} className='w-48 h-48 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500' alt="" />
                        </div>
                        <span className="font-mono text-xs text-pink-500 mb-2 block tracking-widest">{feature.num} /// MODULE</span>
                        <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{feature.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </Section>

              {/* --- CTA FINAL --- */}
              <Section className="items-center text-center">
                <div className="cta-box relative z-10 bg-black/40 backdrop-blur-2xl p-16 border border-white/10 mx-auto max-w-3xl shadow-[0_0_100px_-20px_rgba(255,0,85,0.4)] rounded-3xl overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                  <p className="font-mono text-pink-500 mb-6 tracking-[0.5em] text-xs animate-pulse">SYSTEM_READY</p>
                  <h3 className="text-5xl md:text-8xl font-black mb-12 uppercase italic tracking-tighter leading-none">
                    "Não é sorte.<br />É <span className="text-cyan-400">método</span>."
                  </h3>
                  <a href="https://apps.apple.com/br/app/pablife-app/id6756442379" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" glow className="w-full md:w-auto min-w-[300px] text-lg py-6">BAIXAR PABLIFE</Button>
                  </a>
                </div>
              </Section>

            </Scroll>
            <ScrollAnimations />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <CustomLoader />
    </div>
  )
}

useGLTF.preload('/david_statues.glb')
useGLTF.preload('/oculos.glb')