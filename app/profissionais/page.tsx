export default function Profissionais() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>PROFISSIONAIS DE SUPORTE</h1>
        <p style={styles.subtitle}>
          Nossa equipe de profissionais qualificados está pronta para ajudá-lo em sua jornada
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Quem São Nossos Profissionais?</h2>
          <p style={styles.text}>
            Nossos profissionais são especialistas certificados em diversas áreas, cuidadosamente 
            selecionados para oferecer a melhor orientação e suporte aos nossos usuários.
          </p>
          <p style={styles.text}>
            Todos os profissionais passam por um rigoroso processo de seleção e são avaliados 
            continuamente para garantir a qualidade do serviço oferecido.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Perfis de Profissionais</h2>
          <div style={styles.professionalsGrid}>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>👨‍💼</div>
              <h3 style={styles.professionalTitle}>Coaches de Carreira</h3>
              <p style={styles.professionalText}>
                Especialistas em desenvolvimento profissional, transição de carreira e planejamento 
                estratégico para alcançar seus objetivos profissionais.
              </p>
            </div>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>🧠</div>
              <h3 style={styles.professionalTitle}>Psicólogos e Terapeutas</h3>
              <p style={styles.professionalText}>
                Profissionais licenciados em saúde mental, oferecendo suporte emocional, gestão de 
                ansiedade e desenvolvimento pessoal.
              </p>
            </div>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>💪</div>
              <h3 style={styles.professionalTitle}>Personal Trainers</h3>
              <p style={styles.professionalText}>
                Especialistas em fitness e nutrição, ajudando você a alcançar seus objetivos de 
                saúde e bem-estar físico.
              </p>
            </div>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>⚡</div>
              <h3 style={styles.professionalTitle}>Especialistas em Produtividade</h3>
              <p style={styles.professionalText}>
                Consultores especializados em organização, gestão de tempo e otimização de processos 
                para maximizar sua eficiência.
              </p>
            </div>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>📚</div>
              <h3 style={styles.professionalTitle}>Mentores Educacionais</h3>
              <p style={styles.professionalText}>
                Educadores e mentores que ajudam no desenvolvimento de habilidades, aprendizado 
                contínuo e crescimento intelectual.
              </p>
            </div>
            <div style={styles.professionalCard}>
              <div style={styles.professionalIcon}>🎯</div>
              <h3 style={styles.professionalTitle}>Especialistas em Metas</h3>
              <p style={styles.professionalText}>
                Profissionais que auxiliam na definição, planejamento e execução de objetivos 
                pessoais e profissionais de forma estruturada.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Como Funciona o Suporte Profissional</h2>
          <div style={styles.processList}>
            <div style={styles.processItem}>
              <div style={styles.processNumber}>1</div>
              <div style={styles.processContent}>
                <h3 style={styles.processTitle}>Selecione o Profissional</h3>
                <p style={styles.processText}>
                  Navegue pelos perfis dos profissionais, leia suas especialidades, avaliações e 
                  escolha aquele que melhor se adequa às suas necessidades.
                </p>
              </div>
            </div>
            <div style={styles.processItem}>
              <div style={styles.processNumber}>2</div>
              <div style={styles.processContent}>
                <h3 style={styles.processTitle}>Agende uma Sessão</h3>
                <p style={styles.processText}>
                  Use o sistema de agendamento integrado para escolher data e horário que funcionem 
                  para você. Receba lembretes automáticos antes da sessão.
                </p>
              </div>
            </div>
            <div style={styles.processItem}>
              <div style={styles.processNumber}>3</div>
              <div style={styles.processContent}>
                <h3 style={styles.processTitle}>Participe da Sessão</h3>
                <p style={styles.processText}>
                  Conecte-se via videochamada ou presencialmente e receba orientação personalizada. 
                  Todas as sessões são confidenciais e seguras.
                </p>
              </div>
            </div>
            <div style={styles.processItem}>
              <div style={styles.processNumber}>4</div>
              <div style={styles.processContent}>
                <h3 style={styles.processTitle}>Acompanhe seu Progresso</h3>
                <p style={styles.processText}>
                  Use o aplicativo para acompanhar seu desenvolvimento, revisar notas das sessões 
                  e agendar sessões de acompanhamento conforme necessário.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Comece Agora</h2>
          <p style={styles.ctaText}>
            Baixe o aplicativo PABLIFE e tenha acesso a todos os nossos profissionais de suporte
          </p>
          <div style={styles.ctaButtons}>
            <a href="/agendamento" style={styles.ctaButton}>Ver Agendamentos</a>
            <a href="/contato" style={styles.ctaButtonSecondary}>Falar com Suporte</a>
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
  professionalsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  professionalCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '35px',
    borderRadius: '20px',
    border: `2px solid ${colors.pink}`,
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  professionalIcon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  professionalTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  professionalText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontFamily: 'sans-serif'
  },
  processList: {
    marginTop: '40px'
  },
  processItem: {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px',
    alignItems: 'flex-start'
  },
  processNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colors.pink}, ${colors.blue})`,
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontFamily: "'Inter', sans-serif"
  },
  processContent: {
    flex: 1
  },
  processTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  processText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    fontFamily: 'sans-serif'
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

