'use client'

import React, { useRef, useLayoutEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ScrollControls, Scroll, useScroll, Outlines, useTexture } from '@react-three/drei'
import * as THREE from 'three'

// --- CONFIGURAÇÕES VISUAIS ---
const colors = {
  pink: '#FF3395',
  blue: '#00FFFF',
  bg: '#C1CDFF',
  outline: '#000000'
}

// --- COMPONENTE PRINCIPAL ---
function Model() {
  const scroll = useScroll()
  
  // Ref para controlar a animação do conjunto completo
  const groupRef = useRef<THREE.Group>(null)

  // 1. CARREGAR OS ARQUIVOS
  const statueData = useGLTF('/marcus_aurelius.glb')
  const glassesData = useGLTF('/oculos.glb')
  
  // Textura para o efeito de desenho (Toon)
  const toneMap = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/gradientMaps/threeTone.jpg')
  toneMap.minFilter = THREE.NearestFilter
  toneMap.magFilter = THREE.NearestFilter

  // --- FUSÃO DOS MODELOS (O SEGREDO ESTÁ AQUI) ---
  // Usamos useMemo para criar a cena combinada apenas uma vez.
  const combinedScene = useMemo(() => {
    // A. Clonamos para garantir que os materiais não se misturem
    const statueClone = statueData.scene.clone()
    const glassesClone = glassesData.scene.clone()

    // B. Pintamos APENAS a Estátua de Rosa
    statueClone.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshToonMaterial({
          color: new THREE.Color(colors.pink),
          gradientMap: toneMap,
        })
        child.castShadow = true; child.receiveShadow = true
      }
    })

    // C. Preparamos o Óculos (NÃO PINTAMOS, mantemos o original)
    // Apenas ativamos sombras
    glassesClone.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true; child.receiveShadow = true
      }
    })

    // --- GUIA DE POSICIONAMENTO DO ÓCULOS ---
    // Como ele vai entrar na estátua gigante, os valores são pequenos.
    
    // ESCALA: Aumente ou diminua se estiver grande/pequeno demais
    const s = 0.0004
    glassesClone.scale.set(s, s, s)

    // POSIÇÃO: (X, Y, Z) em relação à cabeça da estátua
    // X = 0 (Centro)
    // Y = 0.45 (Altura dos olhos. Aumente para subir, diminua para descer)
    // Z = 0.55 (Profundidade. Aumente para ir pra frente, diminua para entrar no nariz)
    glassesClone.position.set(-0.049, 0.21, 0.12)

    // ROTAÇÃO: Gira um pouco para a esquerda como você pediu
    glassesClone.rotation.set(0, -0.12, 0)

    // D. Grudamos o óculos na estátua
    statueClone.add(glassesClone)

    return statueClone
  }, [statueData.scene, glassesData.scene, toneMap])


  // --- ANIMAÇÃO DE SCROLL (Move tudo junto) ---
  useFrame(() => {
    if (!groupRef.current) return

    const r1 = scroll.range(0, 0.5); const r2 = scroll.range(0.5, 0.5)
    
    // Roteiro de movimento
    const targetX = 2.5 - (r1 * 5) + (r2 * 2.5) 
    const targetRotY = 0.2 - (scroll.offset * Math.PI)
    const targetZ = 2 - (r1 * 2) + (r2 * 1.5)

    // Aplica movimento suave
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08)
    groupRef.current.position.y = -2
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.08)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08)
  })

  return (
    // Renderizamos a cena combinada. A escala 6 aumenta tudo junto.
    <primitive object={combinedScene} ref={groupRef} scale={6} position={[1, 1, 0]}>
      {/* Contorno preto apenas na estátua (o óculos fica sem, mais estiloso) */}
      <Outlines thickness={2} color="black" />
    </primitive>
  )
}

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#2e003e]">
      <Canvas shadows camera={{ position: [5, -4, 8], fov: 30 }}>
        {/* Luzes: Reduzi um pouco a luz rosa para não tingir o óculos */}
        <ambientLight intensity={0.4} color={colors.pink} />
        <directionalLight position={[3, 6, 4]} intensity={1.5} color="white" />
        <spotLight position={[-5, 0, 2]} intensity={5} color={colors.blue} angle={0.5} />

        <ScrollControls pages={3} damping={0.3}>
          <Model />
          <Scroll html style={{ width: '100%' }}>
            {/* SEÇÕES DE TEXTO (IGUAIS AO ANTERIOR) */}
            <section style={{ ...styles.section, alignItems: 'flex-start', paddingLeft: '10vw' }}>
              <h1 style={styles.title}>MENTE<br /><span style={{ color: colors.blue }}>TRAVADA?</span></h1>
              <p style={styles.text}>500 abas abertas.</p>
            </section>
            <section style={{ ...styles.section, alignItems: 'flex-end', paddingRight: '10vw', textAlign: 'right' }}>
              <h1 style={{ ...styles.title, fontSize: '4rem' }}>ORGANIZE<br />O CAOS.</h1>
              <p style={{ ...styles.text, color: colors.blue }}>Saúde. Metas. Rotina.</p>
            </section>
            <section style={{ ...styles.section, justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ ...styles.title, fontSize: '6rem', background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PABLIFE</h1>
              <button style={styles.button}>BAIXAR APP</button>
            </section>
          </Scroll>
        </ScrollControls>
        <mesh position={[0, 0, -3]}>
          <circleGeometry args={[3.5, 64]} />
          <meshBasicMaterial color={colors.pink} />
        </mesh>
      </Canvas>
    </div>
  )
}

const styles: any = {
  section: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' },
  title: { fontSize: '5rem', fontWeight: '900', lineHeight: '0.9', color: 'white', margin: 0, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' },
  text: { color: 'white', fontSize: '1.5rem', fontFamily: 'sans-serif', marginTop: '10px' },
  button: { marginTop: '20px', padding: '15px 40px', borderRadius: '50px', border: 'none', background: '#FF3395', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0px 10px 20px rgba(0,0,0,0.3)' }
}