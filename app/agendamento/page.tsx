export default function Agendamento() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>AGENDAMENTO</h1>
        <p style={styles.subtitle}>
          Agende suas sessões de mentoria e consultas com profissionais de forma rápida e fácil
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Como Agendar</h2>
          <p style={styles.text}>
            O sistema de agendamento do PABLIFE permite que você agende sessões com profissionais
            qualificados diretamente pelo aplicativo, de forma simples e intuitiva.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Passo a Passo</h2>
          <div style={styles.stepsContainer}>
            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>1️⃣</div>
                <h3 style={styles.stepTitle}>Acesse a Seção de Agendamento</h3>
              </div>
              <p style={styles.stepDescription}>
                No aplicativo, navegue até a seção "Agendamentos" no menu principal. Lá você verá
                todas as opções disponíveis.
              </p>
            </div>

            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>2️⃣</div>
                <h3 style={styles.stepTitle}>Escolha o Tipo de Serviço</h3>
              </div>
              <p style={styles.stepDescription}>
                Selecione entre mentorias, consultas, sessões de coaching ou outros serviços
                disponíveis, de acordo com suas necessidades.
              </p>
            </div>

            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>3️⃣</div>
                <h3 style={styles.stepTitle}>Selecione o Profissional</h3>
              </div>
              <p style={styles.stepDescription}>
                Escolha o profissional que deseja consultar. Você pode verificar especialidades,
                avaliações e disponibilidade de cada um.
              </p>
            </div>

            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>4️⃣</div>
                <h3 style={styles.stepTitle}>Escolha Data e Horário</h3>
              </div>
              <p style={styles.stepDescription}>
                Selecione uma data e horário disponível no calendário do profissional. Os horários
                são exibidos em tempo real, mostrando apenas os slots disponíveis.
              </p>
            </div>

            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>5️⃣</div>
                <h3 style={styles.stepTitle}>Confirme o Agendamento</h3>
              </div>
              <p style={styles.stepDescription}>
                Revise os detalhes do agendamento e confirme. Você receberá uma confirmação por email
                e notificações no aplicativo.
              </p>
            </div>

            <div style={styles.stepBox}>
              <div style={styles.stepHeader}>
                <div style={styles.stepIcon}>6️⃣</div>
                <h3 style={styles.stepTitle}>Receba Lembretes</h3>
              </div>
              <p style={styles.stepDescription}>
                O aplicativo enviará lembretes automáticos 24 horas e 1 hora antes do agendamento,
                garantindo que você não perca sua sessão.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Funcionalidades do Sistema</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📅</div>
              <h3 style={styles.featureTitle}>Calendário Integrado</h3>
              <p style={styles.featureText}>
                Visualize todos os seus agendamentos em um calendário intuitivo, sincronizado com
                seu dispositivo.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔄</div>
              <h3 style={styles.featureTitle}>Reagendamento Fácil</h3>
              <p style={styles.featureText}>
                Precisa mudar o horário? Reagende facilmente através do aplicativo, respeitando
                as políticas de cancelamento.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📝</div>
              <h3 style={styles.featureTitle}>Histórico Completo</h3>
              <p style={styles.featureText}>
                Acesse o histórico de todas as suas sessões, com notas e resumos quando disponíveis.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔔</div>
              <h3 style={styles.featureTitle}>Notificações Inteligentes</h3>
              <p style={styles.featureText}>
                Receba lembretes personalizados e notificações sobre mudanças nos seus agendamentos.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Informações Importantes</h2>
          <div style={styles.infoList}>
            <div style={styles.infoItem}>
              <strong style={styles.infoLabel}>Cancelamento:</strong>
              <span style={styles.infoText}>
                Cancelamentos podem ser feitos até 24 horas antes do agendamento sem custos adicionais.
              </span>
            </div>
            <div style={styles.infoItem}>
              <strong style={styles.infoLabel}>Reagendamento:</strong>
              <span style={styles.infoText}>
                Você pode reagendar sua sessão até 12 horas antes do horário agendado.
              </span>
            </div>
            <div style={styles.infoItem}>
              <strong style={styles.infoLabel}>Lembretes:</strong>
              <span style={styles.infoText}>
                Lembretes automáticos são enviados 24h e 1h antes de cada agendamento.
              </span>
            </div>
            <div style={styles.infoItem}>
              <strong style={styles.infoLabel}>Suporte:</strong>
              <span style={styles.infoText}>
                Em caso de dúvidas sobre agendamentos, entre em contato com nosso suporte através
                do email <a href="mailto:Suporte@pablife.com.br" style={styles.link}>Suporte@pablife.com.br</a>.
              </span>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Pronto para Agendar?</h2>
          <p style={styles.ctaText}>
            Baixe o aplicativo PABLIFE e comece a agendar suas sessões hoje mesmo!
          </p>
          <div style={styles.ctaButtons}>
            <a href="/profissionais" style={styles.ctaButton}>Ver Profissionais</a>
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
  stepsContainer: {
    marginTop: '40px'
  },
  stepBox: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '30px',
    borderRadius: '20px',
    border: `2px solid ${colors.pink}`,
    marginBottom: '25px',
    transition: 'all 0.3s ease'
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '15px'
  },
  stepIcon: {
    fontSize: '2.5rem'
  },
  stepTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: colors.blue,
    fontFamily: "'Inter', sans-serif"
  },
  stepDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    fontFamily: 'sans-serif',
    paddingLeft: '70px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '30px',
    borderRadius: '20px',
    border: `1px solid ${colors.blue}`,
    textAlign: 'center'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  featureTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  featureText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontFamily: 'sans-serif'
  },
  infoSection: {
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '40px',
    borderRadius: '20px',
    border: `2px solid ${colors.blue}`,
    marginTop: '50px'
  },
  infoTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.pink,
    marginBottom: '30px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase'
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  infoItem: {
    color: 'white',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    fontFamily: 'sans-serif'
  },
  infoLabel: {
    color: colors.blue,
    display: 'block',
    marginBottom: '5px'
  },
  infoText: {
    display: 'block',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  link: {
    color: colors.blue,
    textDecoration: 'none',
    transition: 'all 0.3s ease'
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


