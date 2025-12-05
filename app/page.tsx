'use client'

import React, { useRef, useLayoutEffect, useMemo, useState, useEffect } from 'react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-screen h-screen bg-[#2e003e] relative">
      {/* Header fixo melhorado */}
      <header style={{ ...styles.header, ...(scrolled ? styles.headerScrolled : {}) }}>
        <div style={styles.headerContent}>
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            style={styles.logoLink}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div style={styles.logo}>
              <span style={{ background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '1.8rem', fontWeight: '900', fontFamily: "'Inter', sans-serif", letterSpacing: '2px' }}>PABLIFE</span>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <nav style={styles.nav} className="desktop-nav">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} style={styles.navLink}>
              <span>Funcionalidades</span>
            </a>
            <a href="mailto:Suporte@pablife.com.br" style={styles.navLink}>
              <span>Contato</span>
            </a>
            <a href="/privacidade" style={styles.navLink}>
              <span>Privacidade</span>
            </a>
            <button style={styles.navButton} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              <span>Baixar App</span>
            </button>
          </nav>

          {/* Menu Hambúrguer Mobile */}
          <button 
            style={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ ...styles.menuLine, transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
            <span style={{ ...styles.menuLine, opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ ...styles.menuLine, transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
          </button>
        </div>

        {/* Overlay para menu mobile */}
        {isMenuOpen && (
          <div 
            style={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Menu Mobile */}
        <nav style={{ ...styles.mobileNav, ...(isMenuOpen ? styles.mobileNavOpen : {}) }}>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} style={styles.mobileNavLink}>
            <span style={styles.mobileNavIcon}>✨</span>
            Funcionalidades
          </a>
          <a href="mailto:Suporte@pablife.com.br" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>
            <span style={styles.mobileNavIcon}>📧</span>
            Contato
          </a>
          <a href="/privacidade" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>
            <span style={styles.mobileNavIcon}>🔒</span>
            Privacidade
          </a>
          <button style={styles.mobileNavButton} onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }}>
            <span>📱</span> Baixar App
          </button>
        </nav>
      </header>
      
      <Canvas shadows camera={{ position: [5, -4, 8], fov: 30 }}>
        {/* Luzes: Reduzi um pouco a luz rosa para não tingir o óculos */}
        <ambientLight intensity={0.4} color={colors.pink} />
        <directionalLight position={[3, 6, 4]} intensity={1.5} color="white" />
        <spotLight position={[-5, 0, 2]} intensity={5} color={colors.blue} angle={0.5} />

        <ScrollControls pages={5} damping={0.3}>
          <Model />
          <Scroll html style={{ width: '100%' }}>
            {/* HERO SECTION - Simétrica e Centralizada */}
            <section style={styles.heroSection}>
              <div style={styles.heroContent}>
                <div style={styles.heroText}>
                  <h1 style={styles.heroTitle}>
                    MENTE<br />
                    <span style={{ color: colors.blue }}>TRAVADA?</span>
                  </h1>
                  <p style={styles.heroSubtext}>500 abas abertas.</p>
                  <p style={styles.heroDescription}>
                    Organize o caos da sua mente.<br />
                    <span style={{ color: colors.blue }}>Saúde. Metas. Rotina.</span>
                  </p>
                </div>
                <div style={styles.heroVisual}>
                  {/* Espaço para a estátua 3D */}
                </div>
              </div>
            </section>
            
            {/* BRAND SECTION - Centralizada */}
            <section style={styles.brandSection}>
              <h1 style={styles.brandTitle}>
                PABLIFE
              </h1>
              <p style={styles.brandSubtitle}>
                O aplicativo que transforma o caos da sua mente em uma vida organizada e produtiva
              </p>
              <button style={styles.ctaButton}>BAIXAR APP</button>
            </section>
            
            {/* FEATURES SECTION */}
            <section id="features" style={styles.featuresSection}>
              <div style={styles.featuresContainer}>
                <h2 style={styles.featuresTitle}>FUNCIONALIDADES</h2>
                <p style={styles.featuresSubtitle}>Tudo que você precisa para transformar sua vida em um só lugar</p>
                <div style={styles.featuresGrid}>
                  <div style={styles.featureCard}>
                    <div style={styles.featureIconWrapper}>
                      <div style={styles.featureIcon}>💪</div>
                    </div>
                    <h3 style={styles.featureTitle}>Saúde</h3>
                    <p style={styles.featureText}>Acompanhe sua rotina de exercícios, alimentação e bem-estar em um só lugar</p>
                  </div>
                  <div style={styles.featureCard}>
                    <div style={styles.featureIconWrapper}>
                      <div style={styles.featureIcon}>🎯</div>
                    </div>
                    <h3 style={styles.featureTitle}>Metas</h3>
                    <p style={styles.featureText}>Defina e alcance seus objetivos com ferramentas inteligentes de planejamento</p>
                  </div>
                  <div style={styles.featureCard}>
                    <div style={styles.featureIconWrapper}>
                      <div style={styles.featureIcon}>📅</div>
                    </div>
                    <h3 style={styles.featureTitle}>Rotina</h3>
                    <p style={styles.featureText}>Organize seu dia a dia com lembretes inteligentes e planejamento automático</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA SECTION */}
            <section style={{ ...styles.section, justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(180deg, rgba(46,0,62,0.8) 0%, rgba(46,0,62,1) 100%)' }}>
              <h2 style={{ ...styles.sectionTitle, fontSize: '3.5rem', marginBottom: '30px' }}>PRONTO PARA<br />ORGANIZAR SUA VIDA?</h2>
              <p style={{ ...styles.text, fontSize: '1.3rem', marginBottom: '40px', textAlign: 'center', maxWidth: '700px' }}>
                Junte-se a milhares de pessoas que já transformaram suas vidas com o PABLIFE
              </p>
              <button style={{ ...styles.button, fontSize: '1.3rem', padding: '20px 50px' }}>COMEÇAR AGORA</button>
            </section>
          </Scroll>
        </ScrollControls>
        <mesh position={[0, 0, -3]}>
          <circleGeometry args={[3.5, 64]} />
          <meshBasicMaterial color={colors.pink} />
        </mesh>
      </Canvas>
      
      {/* Rodapé fixo com informações de contato */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.contactInfo}>
            <a href="mailto:Suporte@pablife.com.br" style={styles.footerLink}>
              📧 Suporte@pablife.com.br
            </a>
            <a href="https://instagram.com/pablife" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
              📷 @pablife
            </a>
          </div>
          <div style={styles.footerLinks}>
            <a href="/privacidade" style={styles.footerLinkSmall}>Política de Privacidade</a>
            <span style={styles.separator}>|</span>
            <a href="/termos" style={styles.footerLinkSmall}>Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles: any = {
  section: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', paddingTop: '80px' },
  title: { fontSize: '5rem', fontWeight: '900', lineHeight: '0.9', color: 'white', margin: 0, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' },
  subtitle: { color: 'white', fontSize: '1.5rem', fontFamily: 'sans-serif', lineHeight: '1.6' },
  text: { color: 'white', fontSize: '1.5rem', fontFamily: 'sans-serif', marginTop: '10px' },
  button: { marginTop: '20px', padding: '15px 40px', borderRadius: '50px', border: 'none', background: '#FF3395', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0px 10px 20px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 5vw 80px',
    position: 'relative'
  },
  heroContent: {
    maxWidth: '1400px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 10
  },
  heroTitle: {
    fontSize: '6rem',
    fontWeight: '900',
    lineHeight: '0.95',
    color: 'white',
    margin: 0,
    marginBottom: '20px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '-2px'
  },
  heroSubtext: {
    color: 'white',
    fontSize: '1.8rem',
    fontFamily: 'sans-serif',
    marginBottom: '30px',
    opacity: 0.9
  },
  heroDescription: {
    color: 'white',
    fontSize: '1.5rem',
    fontFamily: 'sans-serif',
    lineHeight: '1.6',
    marginTop: '20px'
  },
  heroVisual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    minHeight: '500px',
    width: '100%',
    pointerEvents: 'none'
  },
  brandSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 5vw',
    textAlign: 'center',
    position: 'relative'
  },
  brandTitle: {
    fontSize: '8rem',
    fontWeight: '900',
    lineHeight: '0.9',
    margin: 0,
    marginBottom: '30px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-3px',
    textShadow: '0 0 60px rgba(255, 51, 149, 0.5)'
  },
  brandSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.5rem',
    fontFamily: 'sans-serif',
    lineHeight: '1.8',
    maxWidth: '700px',
    marginBottom: '40px',
    fontWeight: '300',
    letterSpacing: '0.5px'
  },
  ctaButton: {
    padding: '20px 60px',
    borderRadius: '50px',
    border: 'none',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0px 15px 40px rgba(255, 51, 149, 0.4)',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  sectionTitle: { fontSize: '3rem', fontWeight: '900', color: 'white', margin: 0, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', textAlign: 'center' },
  featuresSection: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '120px 5vw 80px',
    position: 'relative',
    background: 'linear-gradient(180deg, rgba(46, 0, 62, 0.3) 0%, rgba(46, 0, 62, 0.95) 50%, rgba(46, 0, 62, 0.3) 100%)'
  },
  featuresContainer: {
    maxWidth: '1400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  featuresTitle: {
    fontSize: '4rem',
    fontWeight: '900',
    color: 'white',
    margin: 0,
    marginBottom: '20px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    textAlign: 'center',
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 30px rgba(255, 51, 149, 0.5)'
  },
  featuresSubtitle: {
    color: colors.blue,
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    marginBottom: '60px',
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: '1px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    width: '100%'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.12)',
    padding: '50px 40px',
    borderRadius: '25px',
    backdropFilter: 'blur(20px)',
    border: `2px solid ${colors.pink}`,
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: `0 10px 40px rgba(255, 51, 149, 0.2), inset 0 0 60px rgba(0, 255, 255, 0.05)`
  },
  featureIconWrapper: {
    width: '100px',
    height: '100px',
    margin: '0 auto 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    borderRadius: '50%',
    boxShadow: `0 10px 30px rgba(255, 51, 149, 0.4)`,
    transition: 'all 0.3s ease'
  },
  featureIcon: {
    fontSize: '3.5rem',
    filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3))'
  },
  featureTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: colors.blue,
    marginBottom: '20px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: `0 0 20px rgba(0, 255, 255, 0.5)`
  },
  featureText: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400'
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(46, 0, 62, 0.85)',
    backdropFilter: 'blur(20px)',
    padding: '15px 20px',
    borderBottom: `2px solid transparent`,
    zIndex: 1001,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
  },
  headerScrolled: {
    background: 'rgba(46, 0, 62, 0.98)',
    borderBottom: `2px solid ${colors.pink}`,
    padding: '12px 20px',
    boxShadow: '0 4px 30px rgba(255, 51, 149, 0.2)'
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  logoLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    userSelect: 'none'
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '900',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  nav: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  },
  navButton: {
    padding: '12px 28px',
    borderRadius: '30px',
    border: 'none',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 15px rgba(255, 51, 149, 0.4)`,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  menuToggle: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 1002
  },
  menuLine: {
    width: '28px',
    height: '3px',
    background: colors.pink,
    borderRadius: '3px',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  mobileNav: {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    background: 'rgba(46, 0, 62, 0.98)',
    backdropFilter: 'blur(20px)',
    padding: '30px 20px',
    borderBottom: `2px solid ${colors.pink}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    transform: 'translateY(-100%)',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto'
  },
  mobileNavOpen: {
    transform: 'translateY(0)',
    opacity: 1,
    visibility: 'visible'
  },
  mobileNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    padding: '15px 20px',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    border: `1px solid transparent`,
    textAlign: 'center'
  },
  mobileNavButton: {
    padding: '15px 30px',
    borderRadius: '30px',
    border: 'none',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 15px rgba(255, 51, 149, 0.4)`,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  mobileNavIcon: {
    fontSize: '1.3rem',
    marginRight: '10px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(5px)',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(46, 0, 62, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    borderTop: `2px solid ${colors.pink}`,
    zIndex: 1000
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center'
  },
  contactInfo: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  footerLinks: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  footerLinkSmall: {
    color: colors.blue,
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease'
  },
  separator: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '0.9rem'
  }
}