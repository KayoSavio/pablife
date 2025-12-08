export default function Contato() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>CONTATO E SUPORTE</h1>
        <p style={styles.subtitle}>
          Estamos aqui para ajudar você. Entre em contato conosco através dos canais abaixo.
        </p>

        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <div style={styles.iconWrapper}>
              <div style={styles.icon}>📧</div>
            </div>
            <h3 style={styles.cardTitle}>Email</h3>
            <p style={styles.cardText}>
              Envie suas dúvidas, sugestões ou relatos de problemas
            </p>
            <a href="mailto:Suporte@pablife.com.br" style={styles.contactLink}>
              Suporte@pablife.com.br
            </a>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.iconWrapper}>
              <div style={styles.icon}>📱</div>
            </div>
            <h3 style={styles.cardTitle}>Instagram</h3>
            <p style={styles.cardText}>
              Siga-nos e fique por dentro de novidades e dicas
            </p>
            <a href="https://instagram.com/pablife" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              @pablife
            </a>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.iconWrapper}>
              <div style={styles.icon}>⏰</div>
            </div>
            <h3 style={styles.cardTitle}>Horário de Atendimento</h3>
            <p style={styles.cardText}>
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 13h
            </p>
          </div>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Perguntas Frequentes</h2>
          
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Como posso baixar o aplicativo?</h3>
            <p style={styles.faqAnswer}>
              O aplicativo PABLIFE está disponível na Apple App Store e Google Play Store. 
              Procure por "PABLIFE" nas lojas oficiais.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>O aplicativo é gratuito?</h3>
            <p style={styles.faqAnswer}>
              Oferecemos uma versão gratuita com funcionalidades básicas. Para acesso completo 
              a todas as funcionalidades, incluindo mentorias e suporte profissional, temos planos 
              premium disponíveis.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Como funcionam as mentorias?</h3>
            <p style={styles.faqAnswer}>
              Você pode agendar sessões de mentoria com profissionais qualificados diretamente 
              pelo aplicativo. Acesse a seção "Mentorias" para conhecer nossos profissionais e 
              agendar sua sessão.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Meus dados estão seguros?</h3>
            <p style={styles.faqAnswer}>
              Sim, levamos a segurança dos seus dados muito a sério. Utilizamos criptografia de 
              ponta e seguimos todas as normas de proteção de dados. Consulte nossa{' '}
              <a href="/privacidade" style={styles.link}>Política de Privacidade</a> para mais detalhes.
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
    padding: '100px 20px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    maxWidth: '1000px',
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
    fontFamily: 'sans-serif'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  },
  contactCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '40px',
    borderRadius: '20px',
    border: `2px solid ${colors.pink}`,
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  iconWrapper: {
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    borderRadius: '50%',
    boxShadow: `0 10px 30px rgba(255, 51, 149, 0.4)`
  },
  icon: {
    fontSize: '2.5rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  cardText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontFamily: 'sans-serif'
  },
  contactLink: {
    color: colors.pink,
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  },
  section: {
    marginTop: '50px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '30px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase'
  },
  faqItem: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '25px',
    borderRadius: '15px',
    marginBottom: '20px',
    border: `1px solid ${colors.pink}`
  },
  faqQuestion: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  faqAnswer: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: '1.7',
    fontFamily: 'sans-serif'
  },
  link: {
    color: colors.blue,
    textDecoration: 'none',
    transition: 'all 0.3s ease'
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


