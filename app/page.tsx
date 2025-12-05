'use client'

import React, { useRef, useMemo, useState, Suspense, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll, Environment, Loader, Center, Resize, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSound from 'use-sound'

gsap.registerPlugin(ScrollTrigger)

const colors = {
  pinkNeon: '#ff0055',
  cyanNeon: '#00ffff',
  purpleDeep: '#05000a',
}

function CustomLoader() {
  const { active, progress } = useProgress()
  
  // Se não estiver carregando (active = false), não mostra nada
  if (!active) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#05000a] flex flex-col items-center justify-center">
      {/* SEU LOGO AQUI */}
      <img 
        src="/logo.png" 
        alt="Pablife Logo" 
        className="w-32 md:w-48 mb-8 animate-pulse object-contain" 
      />
      
      {/* BARRA DE PROGRESSO */}
      <div className="w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-200 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      
      {/* PORCENTAGEM */}
      <span className="mt-4 font-mono text-[10px] text-pink-500 tracking-[0.3em] animate-pulse">
        SYSTEM_LOADING... {progress.toFixed(0)}%
      </span>
    </div>
  )
}

function Model() {
  const scroll = useScroll()
  const groupRef = useRef<THREE.Group>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const { gl } = useThree() // Necessário para dependências do GSAP se usar scrollTrigger direto, mas aqui usamos seek
  
  const statueData = useGLTF('/david_statues.glb') 
  const glassesData = useGLTF('/oculos.glb')

  // =========================================================
  // POSIÇÕES AJUSTADAS PARA A NARRATIVA DO INSTAGRAM
  // =========================================================
  
  // 1. INÍCIO: Estátua na direita, olhando para a esquerda (Hero)
  const POS_INICIAL = { x: 0.8, y: 0, z: 8, rotY: 0.3 }

  // 2. MEIO: Estátua vai para a esquerda (Dando espaço para o texto da Direita "O NOVO VOCÊ")
  const POS_SECAO_2 = { x: -0.15, y: 0, z: 8, rotY: -0.8 } 

  // 3. FIM: Estátua centraliza ou sai (Para a Tríade)
  const POS_SECAO_3 = { x: 5, y: 0, z: 9, rotY: 0 }
  // =========================================================
  
  const combinedScene = useMemo(() => {
    const statueClone = statueData.scene.clone()
    const glassesClone = glassesData.scene.clone()
    
    statueClone.traverse((c: any) => {
      if (c.isMesh) {
        c.material = new THREE.MeshStandardMaterial({
          color: '#eeeeee',   
          roughness: 0.2,     
          metalness: 0.05,
          envMapIntensity: 0.8
        })
        c.castShadow = true
        c.receiveShadow = true
      }
    })

    glassesClone.traverse((c: any) => c.castShadow = true)
    
    const scale = 0.5 
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
        x: POS_SECAO_2.x,
        y: POS_SECAO_2.y,
        z: POS_SECAO_2.z,
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      .to(groupRef.current.rotation, {
        y: POS_SECAO_2.rotY,
        duration: 1,
        ease: 'power2.inOut'
      }, 0)

      .to(groupRef.current.position, {
        x: POS_SECAO_3.x,
        y: POS_SECAO_3.y,
        z: POS_SECAO_3.z,
        duration: 1,
        ease: 'power2.inOut'
      }, 1)
      .to(groupRef.current.rotation, {
        y: POS_SECAO_3.rotY,
        duration: 1,
        ease: 'power2.inOut'
      }, 1)

  }, [])

  useFrame((state, delta) => {
    if (!tl.current || !groupRef.current) return
    const durationTotal = tl.current.duration()
    const currentProgress = scroll.offset * durationTotal
    tl.current.seek(currentProgress)
    
    // Leve flutuação vertical constante
    groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002
  })

  return (
    <group ref={groupRef}>
      <Center>
        <Resize height={5.5}>
          <primitive object={combinedScene} />
        </Resize>
      </Center>
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

const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <button onClick={onClick} className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/20 hover:border-pink-500 transition-all duration-300 pointer-events-auto">
    <div className="absolute inset-0 w-0 bg-pink-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20" />
    <span className="relative z-10 font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-pink-400 transition-colors">
      [{children}]
    </span>
  </button>
)

const FeatureCard = ({ number, title, desc, imgSrc }: { number: string, title: string, desc: string, imgSrc: string }) => (
  <div className="border-t bg-black/60 p-6 pb-12 border-white/10 hover:border-pink-500 transition-colors duration-500 group cursor-default pointer-events-auto">
    <div className='w-full flex justify-end'>
      <img src={imgSrc} className='w-36 h-36' alt="" />
    </div>
    <span className="font-mono text-xs text-pink-500 mb-2 block">{number}</span>
    <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{title}</h3>
    <p className="text-gray-100 text-sm md:text-base leading-relaxed max-w-xs">{desc}</p>
  </div>
)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.from(".hero-line", { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" })
      .from(".nav-item", { y: -20, opacity: 0, duration: 0.8, stagger: 0.05, ease: "power2.out" }, "-=0.5")
  })

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#05000a] text-white overflow-hidden selection:bg-pink-500 selection:text-white font-sans">
      
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference pointer-events-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center pointer-events-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 animate-pulse">
              <img src="/logo.png" alt="" />
            </div>
            <span className="font-black text-lg tracking-[0.2em]">PABLIFE</span>
          </div>
          
          <nav className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            {['Protocolo', 'Comunidade', 'Login'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-item hover:text-white transition-colors relative group">
                <span className="text-pink-500 mr-1">0{i+1}.</span> {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSound}
              className="text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 hover:border-pink-500 transition-all flex items-center gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${!isMuted ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
              {isMuted ? 'SOM OFF' : 'SOM ON'}
            </button>

            <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '+'}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <nav className="flex flex-col gap-8 text-center">
             {['Protocolo', 'Comunidade', 'Login'].map(item => (
              <a key={item} onClick={() => setIsMenuOpen(false)} href="#" className="text-4xl font-black uppercase tracking-tighter hover:text-pink-500 transition-colors">{item}</a>
            ))}
          </nav>
        </div>
      )}

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
        <color attach="background" args={[colors.purpleDeep]} />
        <fog attach="fog" args={[colors.purpleDeep, 8, 25]} />
        
        <Environment preset="city" background={false} blur={1} />
        <ambientLight intensity={0.1} />
        
        <spotLight position={[-6, 4, 4]} angle={0.4} penumbra={0.5} intensity={120} color="#ff00ff" castShadow />
        <spotLight position={[6, 2, 3]} angle={0.5} penumbra={0.5} intensity={120} color="#00ffff" />
        <spotLight position={[0, 5, -5]} angle={0.5} penumbra={1} intensity={50} color="#ffffff" />
        <pointLight position={[0, -2, -2]} intensity={10} color="#4a00e0" />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={0.7} />
        </EffectComposer>

        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.3}>
            <Model />
            <Scroll html style={{ width: '100%' }}>
              
              {/* --- HERO SECTION --- */}
              <Section className="items-start pl-[5vw] md:pl-[10vw]">
                <div className="max-w-4xl z-10 mix-blend-normal">
                  <div className="hero-line flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-pink-500"></div>
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        Lifestyle Ecosystem
                    </span>
                  </div>
                  <h1 className="hero-line text-6xl md:text-9xl font-black leading-[0.85] mb-8 tracking-tighter">
                    CONSTRUA<br />
                    SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500">LEGADO</span>.
                  </h1>
                  <p className="hero-line text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
                    Treino, dieta e mentalidade alinhados. O app definitivo para quem não aceita a mediocridade.
                  </p>
                  <div className="hero-line">
                    <Button onClick={toggleSound}>ACESSAR SISTEMA</Button>
                  </div>
                </div>
              </Section>

              {/* --- DUALITY SECTION (Justify-Between) --- */}
              <Section className="flex flex-col md:flex-row justify-between w-full items-center md:items-end px-[5vw] md:px-[10vw]">
                
                {/* LADO ESQUERDO: A DOR (O estado atual) */}
                <div className="text-left mb-10 md:mb-0 opacity-60 hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest text-cyan-400">
                    /// O Velho Você
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
                    ESCRAVO DA<br/><span className="text-pink-500">DOPAMINA.</span>
                  </h2>
                  <p className="text-white leading-relaxed font-mono text-sm border-l border-gray-700 pl-4">
                    Procrastinação.<br/>
                    Falta de energia.<br/>
                    Shape estagnado.<br/>
                    Vivendo no piloto automático.
                  </p>
                </div>

                {/* LADO DIREITO: A SOLUÇÃO (A promessa Pablife) */}
                <div className="text-right z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-widest text-cyan-400">
                    /// O Novo Padrão
                  </h3>
                  <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none text-white">
                    DOMINE <span className="text-pink-500">TUDO.</span>
                  </h2>
                  <p className="text-lg text-white/90 mb-6 font-medium">
                    Disciplina inabalável. Físico estético. Clareza mental absoluta. Bem-vindo à elite.
                  </p>
                  <div className="inline-flex gap-4 md:gap-8 font-mono text-[10px] md:text-xs tracking-widest text-pink-500 justify-end w-full">
                    <span className="border border-pink-500/30 px-2 py-1">BIOHACKING</span>
                    <span className="border border-pink-500/30 px-2 py-1">LIFESTYLE</span>
                    <span className="border border-pink-500/30 px-2 py-1">NETWORKING</span>
                  </div>
                </div>

              </Section>

              {/* --- FEATURES SECTION --- */}
              <Section>
                <div className="max-w-[1400px] mx-auto w-full">
                  <div className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
                    <h2 className="text-5xl font-black uppercase tracking-tighter">
                        Pilares do<br/><span className="text-pink-500">Ecossistema</span>
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
                    <FeatureCard 
                        number="01" 
                        title="Mentalidade" 
                        desc="Reprogramação cognitiva para foco e resiliência."
                        imgSrc="/medusa.png"
                    />
                    <FeatureCard 
                        number="02" 
                        title="Físico" 
                        desc="Periodização de treinos e nutrição calculada." 
                        imgSrc="/estatua.png"
                    />
                    <FeatureCard 
                        number="03" 
                        title="Ambiente" 
                        desc="Conexão com pessoas que elevam sua frequência." 
                        imgSrc="/woman.png"
                    />
                  </div>
                </div>
              </Section>

              {/* --- CTA FINAL --- */}
              <Section className="items-center text-center">
                <div className="relative z-10 bg-black/60 backdrop-blur-xl p-12 border border-white/10 mx-auto max-w-2xl shadow-[0_0_60px_-15px_rgba(255,0,85,0.3)]">
                  <p className="font-mono text-pink-500 mb-4 tracking-widest text-xs">JOIN THE CLUB</p>
                  <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase italic">
                    "Não é sorte.<br/>É método."
                  </h3>
                  <Button>BAIXAR PABLIFE</Button>
                </div>
              </Section>

            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <CustomLoader />
    </div>
  )
}