export default function Privacidade() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Política de Privacidade</h1>
        <p style={styles.lastUpdate}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        
        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Informações que Coletamos</h2>
          <p style={styles.text}>
            O PABLIFE coleta informações que você nos fornece diretamente quando utiliza nosso aplicativo, 
            incluindo dados de cadastro, informações de saúde e metas pessoais que você escolhe compartilhar conosco.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>2. Como Usamos suas Informações</h2>
          <p style={styles.text}>
            Utilizamos as informações coletadas para:
          </p>
          <ul style={styles.list}>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Personalizar sua experiência no aplicativo</li>
            <li>Enviar notificações importantes sobre o serviço</li>
            <li>Responder às suas solicitações e fornecer suporte</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>3. Compartilhamento de Informações</h2>
          <p style={styles.text}>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
            exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Segurança dos Dados</h2>
          <p style={styles.text}>
            Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
            suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. Seus Direitos</h2>
          <p style={styles.text}>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. 
            Para exercer esses direitos, entre em contato conosco através do email: 
            <a href="mailto:Suporte@pablife.com.br" style={styles.link}> Suporte@pablife.com.br</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>6. Alterações nesta Política</h2>
          <p style={styles.text}>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
            quaisquer alterações publicando a nova política nesta página.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>7. Contato</h2>
          <p style={styles.text}>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <p style={styles.text}>
            Email: <a href="mailto:Suporte@pablife.com.br" style={styles.link}>Suporte@pablife.com.br</a>
          </p>
        </section>

        <div style={styles.backButton}>
          <a href="/" style={styles.backLink}>← Voltar para o site</a>
        </div>
      </div>
    </div>
  )
}

const styles: any = {
  container: {
    minHeight: '100vh',
    background: '#2e003e',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '40px',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 51, 149, 0.3)'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '900',
    color: '#FF3395',
    marginBottom: '10px',
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase'
  },
  lastUpdate: {
    color: '#00FFFF',
    fontSize: '0.9rem',
    marginBottom: '30px',
    fontFamily: 'sans-serif'
  },
  section: {
    marginBottom: '30px'
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#00FFFF',
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif"
  },
  text: {
    color: 'white',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '10px',
    fontFamily: 'sans-serif'
  },
  list: {
    color: 'white',
    fontSize: '1rem',
    lineHeight: '1.8',
    paddingLeft: '20px',
    fontFamily: 'sans-serif'
  },
  link: {
    color: '#00FFFF',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  backButton: {
    marginTop: '40px',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  backLink: {
    color: '#FF3395',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  }
}

