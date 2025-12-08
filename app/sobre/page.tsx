export default function Sobre() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.headerSection}>
          <h1 style={styles.title}>QUEM SOMOS</h1>
          <div style={styles.titleUnderline}></div>
        </div>
        
        <section style={styles.heroSection}>
          <div style={styles.heroContent}>
            <p style={styles.heroText}>
              A <strong style={styles.highlight}>PABLIFE</strong> é uma plataforma de alta performance que reúne 
              <span style={styles.gradientText}> psicologia, nutrição e organização</span> em um só lugar. 
              Nosso propósito é ajudar você a evoluir de forma consistente, prática e alinhada com suas metas pessoais.
            </p>
          </div>
        </section>

        <section style={styles.valuesSection}>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>🎯</div>
              <h3 style={styles.valueTitle}>Acompanhamento Profissional</h3>
              <p style={styles.valueText}>
                Conecte-se com especialistas qualificados em psicologia, nutrição e organização para 
                um suporte personalizado.
              </p>
            </div>
            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>⚡</div>
              <h3 style={styles.valueTitle}>Ferramentas Inteligentes</h3>
              <p style={styles.valueText}>
                Planejamento automatizado e recursos avançados que se adaptam às suas necessidades e 
                aceleram seus resultados.
              </p>
            </div>
            <div style={styles.valueCard}>
              <div style={styles.valueIcon}>📚</div>
              <h3 style={styles.valueTitle}>Conteúdos Exclusivos</h3>
              <p style={styles.valueText}>
                Acesso a materiais educativos e estratégias comprovadas que impulsionam seu bem-estar 
                e desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.missionSection}>
          <div style={styles.missionBox}>
            <h2 style={styles.missionTitle}>Nossa Missão</h2>
            <p style={styles.missionText}>
              Oferecemos acompanhamento profissional, ferramentas inteligentes de planejamento e conteúdos 
              exclusivos que impulsionam seu <strong>bem-estar</strong>, sua <strong>rotina</strong> e seus 
              <strong> resultados</strong>.
            </p>
          </div>
        </section>

        <section style={styles.beliefSection}>
          <div style={styles.beliefContent}>
            <h2 style={styles.beliefTitle}>O Que Acreditamos</h2>
            <p style={styles.beliefText}>
              Somos uma <strong style={styles.startupHighlight}>startup</strong> que acredita no poder da{' '}
              <span style={styles.pill}>disciplina</span>, da{' '}
              <span style={styles.pill}>clareza</span> e do{' '}
              <span style={styles.pill}>equilíbrio</span> para transformar vidas.
            </p>
            <p style={styles.beliefText}>
              Aqui, você encontra suporte real para construir sua melhor versão — <strong>todos os dias</strong>.
            </p>
          </div>
        </section>

        <section style={styles.taglineSection}>
          <div style={styles.taglineBox}>
            <p style={styles.tagline}>
              <span style={styles.taglineBrand}>PABLIFE</span> — Psicologia, nutrição e organização em um só lugar
            </p>
          </div>
        </section>

        <section style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Entre em Contato</h2>
          <p style={styles.contactSubtext}>
            Quer saber mais sobre o PABLIFE ou tem alguma dúvida?
          </p>
          <div style={styles.contactBox}>
            <p style={styles.contactItem}>
              <strong style={styles.contactLabel}>Email:</strong>{' '}
              <a href="mailto:Suporte@pablife.com.br" style={styles.link}>
                Suporte@pablife.com.br
              </a>
            </p>
            <p style={styles.contactItem}>
              <strong style={styles.contactLabel}>Instagram:</strong>{' '}
              <a href="https://instagram.com/pablife" target="_blank" rel="noopener noreferrer" style={styles.link}>
                @pablife
              </a>
            </p>
          </div>
        </section>

        <div style={styles.backButton}>
          <a href="/" style={styles.backLink}>← Voltar para o site</a>
        </div>
      </div>
    </div>
  )
}

const colors = {
  pink: '#FF3395',
  blue: '#00FFFF',
  bg: '#2e003e'
}

const styles: any = {
  container: {
    minHeight: '100vh',
    background: colors.bg,
    padding: '100px 20px 60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    maxWidth: '1200px',
    width: '100%'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '80px'
  },
  title: {
    fontSize: '5rem',
    fontWeight: '900',
    color: 'white',
    margin: 0,
    marginBottom: '20px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '-2px',
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  titleUnderline: {
    width: '100px',
    height: '4px',
    background: `linear-gradient(90deg, ${colors.pink}, ${colors.blue})`,
    margin: '0 auto',
    borderRadius: '2px'
  },
  heroSection: {
    marginBottom: '80px'
  },
  heroContent: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '60px',
    borderRadius: '30px',
    backdropFilter: 'blur(20px)',
    border: `2px solid ${colors.pink}`,
    boxShadow: `0 20px 60px rgba(255, 51, 149, 0.2)`
  },
  heroText: {
    color: 'white',
    fontSize: '1.8rem',
    lineHeight: '1.8',
    margin: 0,
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: '400',
    textAlign: 'center'
  },
  highlight: {
    color: colors.pink,
    fontWeight: '700'
  },
  gradientText: {
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600'
  },
  valuesSection: {
    marginBottom: '80px'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px'
  },
  valueCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '40px',
    borderRadius: '25px',
    border: `2px solid ${colors.blue}`,
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  valueIcon: {
    fontSize: '4rem',
    marginBottom: '25px',
    filter: 'drop-shadow(0 4px 10px rgba(0, 255, 255, 0.3))'
  },
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: colors.blue,
    marginBottom: '20px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  valueText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    fontFamily: 'sans-serif'
  },
  missionSection: {
    marginBottom: '80px'
  },
  missionBox: {
    background: `linear-gradient(135deg, rgba(255, 51, 149, 0.15), rgba(0, 255, 255, 0.15))`,
    padding: '60px',
    borderRadius: '30px',
    border: `2px solid ${colors.blue}`,
    backdropFilter: 'blur(20px)',
    textAlign: 'center'
  },
  missionTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    color: colors.blue,
    marginBottom: '30px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '-1px'
  },
  missionText: {
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '1.8',
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: '400'
  },
  beliefSection: {
    marginBottom: '80px'
  },
  beliefContent: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '60px',
    borderRadius: '30px',
    border: `2px solid ${colors.pink}`,
    backdropFilter: 'blur(20px)',
    textAlign: 'center'
  },
  beliefTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: colors.pink,
    marginBottom: '40px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase'
  },
  beliefText: {
    color: 'white',
    fontSize: '1.4rem',
    lineHeight: '1.8',
    marginBottom: '25px',
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: '400'
  },
  startupHighlight: {
    color: colors.pink,
    fontWeight: '700',
    fontSize: '1.5rem'
  },
  pill: {
    display: 'inline-block',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    padding: '8px 20px',
    borderRadius: '25px',
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0 5px',
    fontFamily: "'Instrument Sans', sans-serif"
  },
  taglineSection: {
    marginBottom: '60px'
  },
  taglineBox: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '50px',
    borderRadius: '25px',
    border: `2px solid ${colors.blue}`,
    textAlign: 'center',
    backdropFilter: 'blur(20px)'
  },
  tagline: {
    color: 'white',
    fontSize: '2rem',
    lineHeight: '1.6',
    margin: 0,
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: '400'
  },
  taglineBrand: {
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '900',
    fontSize: '2.2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  contactSection: {
    marginBottom: '60px',
    textAlign: 'center'
  },
  contactTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: colors.blue,
    marginBottom: '20px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase'
  },
  contactSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    marginBottom: '40px',
    fontFamily: 'sans-serif'
  },
  contactBox: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '40px',
    borderRadius: '25px',
    border: `2px solid ${colors.blue}`,
    backdropFilter: 'blur(10px)',
    display: 'inline-block',
    minWidth: '400px'
  },
  contactItem: {
    color: 'white',
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
    lineHeight: '1.8'
  },
  contactLabel: {
    color: colors.blue,
    fontWeight: '600'
  },
  link: {
    color: colors.pink,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontWeight: '500'
  },
  section: {
    marginBottom: '50px'
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '25px',
    fontFamily: "'Instrument Sans', sans-serif",
    textTransform: 'uppercase'
  },
  text: {
    color: 'white',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    fontFamily: 'sans-serif'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  },
  featureBox: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '30px',
    borderRadius: '20px',
    border: `1px solid ${colors.pink}`,
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Instrument Sans', sans-serif"
  },
  featureText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    fontFamily: 'sans-serif'
  },
  backButton: {
    marginTop: '50px',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center'
  },
  backLink: {
    color: colors.pink,
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  }
}

