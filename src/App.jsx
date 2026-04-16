import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

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

function Header() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" aria-label="Página inicial Sentinel">
          SENTINEL
        </NavLink>

        <nav className="menu" aria-label="Navegação principal">
          <NavLink to="/">INÍCIO</NavLink>
          <NavLink to="/servicos">SERVIÇOS</NavLink>
          <NavLink to="/sobre">SOBRE</NavLink>
          <NavLink to="/contato">CONTATO</NavLink>
        </nav>

        <NavLink to="/contato" className="btn btn-dark header-cta">
          SOLICITAR ORÇAMENTO
        </NavLink>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container cta-row">
        <div>
          <h2>TEM UM EVENTO EM VISTA?</h2>
          <p>Fale com nossa equipe e receba um orçamento personalizado.</p>
        </div>
        <NavLink to="/contato" className="btn btn-light">
          SOLICITAR ORÇAMENTO <span aria-hidden="true">→</span>
        </NavLink>
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
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/servicos">Serviços</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
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
  );
}

function HomePage() {
  return (
    <>
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
            <NavLink to="/contato" className="btn btn-light">
              SOLICITAR ORÇAMENTO <span aria-hidden="true">→</span>
            </NavLink>
            <NavLink to="/servicos" className="btn btn-outline">
              VER SERVIÇOS
            </NavLink>
          </div>
        </div>
      </section>

      <section className="services">
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
            <NavLink to="/servicos" className="all-link">
              VER TODOS <span aria-hidden="true">→</span>
            </NavLink>
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
    </>
  );
}

function InternalPage({ title, subtitle }) {
  return (
    <section className="page-section">
      <div className="container page-inner">
        <p className="eyebrow eyebrow-dark">SENTINEL</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-text">{subtitle}</p>
        <NavLink className="btn btn-dark" to="/contato">
          FALAR COM A EQUIPE
        </NavLink>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/servicos"
            element={
              <InternalPage
                title="SERVIÇOS"
                subtitle="Equipe preparada para controle de acesso, portaria, ronda patrimonial e proteção de áreas críticas em eventos de todos os portes."
              />
            }
          />
          <Route
            path="/sobre"
            element={
              <InternalPage
                title="SOBRE NÓS"
                subtitle="Atuamos com foco em profissionalismo, discrição e planejamento operacional para entregar segurança confiável em cada operação."
              />
            }
          />
          <Route
            path="/contato"
            element={
              <InternalPage
                title="CONTATO"
                subtitle="Conte os detalhes do seu evento e receba uma proposta personalizada para o seu cenário."
              />
            }
          />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;
