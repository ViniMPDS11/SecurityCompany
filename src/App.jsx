const services = [
  {
    title: 'CONTROLE DE ACESSO',
    description:
      'Gerenciamento de entradas e saídas com pessoal treinado e equipamentos.',
    featured: true,
  },
  {
    title: 'SEGURANÇA PATRIMONIAL',
    description: 'Ronda e proteção do espaço do evento durante toda a operação.',
  },
  {
    title: 'PORTARIA E RECEPÇÃO',
    description:
      'Profissionais uniformizados para credenciamento e triagem de público.',
  },
  {
    title: 'ESCOLTA E PROTEÇÃO',
    description:
      'Acompanhamento de atrações, palestrantes e VIPs com discrição total.',
  },
];

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="shield-icon">
    <path
      d="M12 2l7 3v6c0 5.2-3.3 9.8-7 11-3.7-1.2-7-5.8-7-11V5l7-3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand">SENTINEL</div>
          <nav className="menu">
            <a href="#" className="active">
              INÍCIO
            </a>
            <a href="#servicos">SERVIÇOS</a>
            <a href="#">SOBRE</a>
            <a href="#">CONTATO</a>
          </nav>
          <a href="#" className="btn btn-dark small">
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">SEGURANÇA PARA EVENTOS — TERCEIRIZADA</p>
          <h1>
            SEU EVENTO.
            <br />
            NOSSA
            <br />
            PROTEÇÃO.
          </h1>
          <p className="lead">
            A Sentinel fornece equipes de segurança especializadas para eventos
            corporativos, culturais, esportivos e privados em todo o Brasil.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-light">
              SOLICITAR ORÇAMENTO <span aria-hidden="true">→</span>
            </a>
            <a href="#servicos" className="btn btn-outline">
              VER SERVIÇOS
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="container">
          <div className="services-head">
            <div>
              <p className="eyebrow eyebrow-dark">O QUE FAZEMOS</p>
              <h2>
                SERVIÇOS
                <br />
                ESPECIALIZADOS
              </h2>
            </div>
            <a href="#" className="all-link">
              VER TODOS <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${service.featured ? 'featured' : ''}`}
              >
                <ShieldIcon />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container cta-row">
          <div>
            <h2>TEM UM EVENTO EM VISTA?</h2>
            <p>Fale com nossa equipe e receba um orçamento personalizado.</p>
          </div>
          <a href="#" className="btn btn-light">
            SOLICITAR ORÇAMENTO <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="container footer-grid">
          <div>
            <h3>SENTINEL</h3>
            <p>
              Segurança terceirizada especializada em eventos.
              <br />
              Profissionalismo e discrição em cada operação.
            </p>
          </div>
          <div>
            <h4>PÁGINAS</h4>
            <ul>
              <li>Início</li>
              <li>Serviços</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4>CONTATO</h4>
            <p>
              contato@sentinelseg.com.br
              <br />
              (11) 99999-0000
            </p>
          </div>
        </div>

        <div className="container copyright">
          © 2026 SENTINEL SEGURANÇA. TODOS OS DIREITOS RESERVADOS.
        </div>
      </footer>
    </div>
  );
}

export default App;
