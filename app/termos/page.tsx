export default function Termos() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Termos de Uso</h1>
        <p style={styles.lastUpdate}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        
        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Aceitação dos Termos</h2>
          <p style={styles.text}>
            Ao acessar e usar o aplicativo PABLIFE, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>2. Uso do Serviço</h2>
          <p style={styles.text}>
            O PABLIFE é um aplicativo destinado a ajudar você a organizar sua vida, incluindo saúde, metas e rotina. 
            Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos de Uso.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>3. Conta do Usuário</h2>
          <p style={styles.text}>
            Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades 
            que ocorrem sob sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Conteúdo do Usuário</h2>
          <p style={styles.text}>
            Você mantém todos os direitos sobre o conteúdo que você cria ou envia através do aplicativo. 
            Ao usar o serviço, você concede ao PABLIFE uma licença para usar, armazenar e processar esse conteúdo 
            conforme necessário para fornecer o serviço.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. Propriedade Intelectual</h2>
          <p style={styles.text}>
            Todo o conteúdo do aplicativo PABLIFE, incluindo design, logotipos, textos e software, é propriedade 
            do PABLIFE e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>6. Limitação de Responsabilidade</h2>
          <p style={styles.text}>
            O PABLIFE não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais 
            resultantes do uso ou incapacidade de usar nosso serviço.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>7. Modificações do Serviço</h2>
          <p style={styles.text}>
            Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio. 
            Não seremos responsáveis perante você ou terceiros por qualquer modificação ou descontinuação do serviço.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>8. Alterações nos Termos</h2>
          <p style={styles.text}>
            Podemos revisar estes Termos de Uso periodicamente. As alterações entrarão em vigor quando publicadas nesta página. 
            Seu uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>9. Lei Aplicável</h2>
          <p style={styles.text}>
            Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será 
            resolvida nos tribunais competentes do Brasil.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>10. Contato</h2>
          <p style={styles.text}>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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


