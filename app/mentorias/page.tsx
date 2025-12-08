export default function Mentorias() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>MENTORIAS</h1>
        <p style={styles.subtitle}>
          Conecte-se com profissionais qualificados e acelere seu desenvolvimento pessoal e profissional
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>O Que São Nossas Mentorias?</h2>
          <p style={styles.text}>
            Nossas mentorias são sessões personalizadas com profissionais especializados em diversas áreas, 
            incluindo desenvolvimento pessoal, produtividade, saúde mental, carreira e muito mais.
          </p>
          <p style={styles.text}>
            Cada sessão é adaptada às suas necessidades específicas, oferecendo orientação prática e 
            estratégias comprovadas para ajudá-lo a alcançar seus objetivos.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Como Funciona</h2>
          <div style={styles.stepsGrid}>
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Escolha o Profissional</h3>
              <p style={styles.stepText}>
                Navegue pelo nosso catálogo de profissionais e escolha aquele que melhor se alinha 
                com suas necessidades e objetivos.
              </p>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>Agende sua Sessão</h3>
              <p style={styles.stepText}>
                Selecione um horário que funcione para você. Nossos profissionais têm disponibilidade 
                em diversos horários, incluindo finais de semana.
              </p>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Participe da Mentoria</h3>
              <p style={styles.stepText}>
                Conecte-se via videochamada ou presencialmente (quando disponível) e receba orientação 
                personalizada do seu mentor.
              </p>
            </div>
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>4</div>
              <h3 style={styles.stepTitle}>Acompanhe seu Progresso</h3>
              <p style={styles.stepText}>
                Use o aplicativo para acompanhar seu desenvolvimento, definir metas baseadas nas 
                orientações recebidas e agendar sessões de acompanhamento.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Áreas de Atuação</h2>
          <div style={styles.areasGrid}>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>💼</div>
              <h3 style={styles.areaTitle}>Desenvolvimento de Carreira</h3>
            </div>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>🧠</div>
              <h3 style={styles.areaTitle}>Saúde Mental</h3>
            </div>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>⚡</div>
              <h3 style={styles.areaTitle}>Produtividade</h3>
            </div>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>💪</div>
              <h3 style={styles.areaTitle}>Fitness e Saúde</h3>
            </div>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>📚</div>
              <h3 style={styles.areaTitle}>Educação e Aprendizado</h3>
            </div>
            <div style={styles.areaCard}>
              <div style={styles.areaIcon}>🎯</div>
              <h3 style={styles.areaTitle}>Definição de Metas</h3>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Pronto para Começar?</h2>
          <p style={styles.ctaText}>
            Baixe o aplicativo PABLIFE e comece a agendar suas mentorias hoje mesmo!
          </p>
          <div style={styles.ctaButtons}>
            <a href="/contato" style={styles.ctaButton}>Falar com Suporte</a>
            <a href="/" style={styles.ctaButtonSecondary}>Voltar ao Início</a>
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
    padding: '100px 20px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    maxWidth: '1200px',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '50px',
    borderRadius: '25px',
    backdropFilter: 'blur(20px)',
    border: `2px solid ${colors.pink}`
  },
  title: {
    fontSize: '4rem',
    fontWeight: '900',
    color: colors.pink,
    marginBottom: '20px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    textAlign: 'center',
    background: `-webkit-linear-gradient(0deg, ${colors.pink}, ${colors.blue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    color: colors.blue,
    fontSize: '1.3rem',
    textAlign: 'center',
    marginBottom: '50px',
    fontFamily: 'sans-serif',
    lineHeight: '1.6'
  },
  section: {
    marginBottom: '60px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '30px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase'
  },
  text: {
    color: 'white',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    fontFamily: 'sans-serif'
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  stepCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '35px',
    borderRadius: '20px',
    border: `2px solid ${colors.pink}`,
    textAlign: 'center',
    position: 'relative'
  },
  stepNumber: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontFamily: "'Inter', sans-serif"
  },
  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  stepText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontFamily: 'sans-serif'
  },
  areasGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '25px',
    marginTop: '30px'
  },
  areaCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '30px',
    borderRadius: '15px',
    border: `1px solid ${colors.blue}`,
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  areaIcon: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  areaTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: colors.blue,
    fontFamily: "'Inter', sans-serif"
  },
  ctaSection: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '50px',
    borderRadius: '25px',
    border: `2px solid ${colors.blue}`,
    textAlign: 'center',
    marginTop: '50px'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: colors.pink,
    marginBottom: '20px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase'
  },
  ctaText: {
    color: 'white',
    fontSize: '1.2rem',
    marginBottom: '30px',
    fontFamily: 'sans-serif'
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  ctaButton: {
    padding: '15px 40px',
    borderRadius: '30px',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    fontFamily: 'sans-serif'
  },
  ctaButtonSecondary: {
    padding: '15px 40px',
    borderRadius: '30px',
    background: 'transparent',
    color: colors.blue,
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    border: `2px solid ${colors.blue}`,
    transition: 'all 0.3s ease',
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


