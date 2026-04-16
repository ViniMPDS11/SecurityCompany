import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const homeServices = [
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

const servicesDetailed = [
  {
    icon: 'bag',
    title: 'CONTROLE DE ACESSO',
    description:
      'Gerenciamento rigoroso de entradas e saídas com lista de convidados, scanner de credencial, pessoal treinado e catracas físicas quando necessário.',
    tags: ['SHOWS E FESTIVAIS', 'FEIRAS CORPORATIVAS', 'EVENTOS PRIVADOS'],
  },
  {
    icon: 'users',
    title: 'PORTARIA E CREDENCIAMENTO',
    description:
      'Recepção e credenciamento profissional com uniformes, tablets e controle em tempo real. A primeira impressão do seu evento.',
    tags: ['CONGRESSOS', 'EVENTOS CORPORATIVOS', 'PREMIAÇÕES'],
  },
  {
    icon: 'shield',
    title: 'SEGURANÇA PATRIMONIAL',
    description:
      'Ronda interna e externa do espaço, proteção de equipamentos, palco e áreas restritas durante a montagem, o evento e a desmontagem.',
    tags: ['FEIRAS', 'EXPOSIÇÕES', 'EVENTOS CULTURAIS'],
  },
  {
    icon: 'eye',
    title: 'MONITORAMENTO DE ÁREA',
    description:
      'Vigilância ativa por toda a área do evento com agentes posicionados estrategicamente para identificação e resposta rápida.',
    tags: ['SHOWS', 'EVENTOS ESPORTIVOS', 'FESTIVAIS'],
  },
  {
    icon: 'radio',
    title: 'ESCOLTA DE VIP E ATRAÇÕES',
    description:
      'Acompanhamento discreto de artistas, palestrantes, executivos e convidados especiais desde a chegada até a partida.',
    tags: ['SHOWS', 'EVENTOS CORPORATIVOS', 'PREMIAÇÕES'],
  },
  {
    icon: 'clipboard',
    title: 'PLANEJAMENTO DE SEGURANÇA',
    description:
      'Elaboração de plano operacional completo: mapeamento do espaço, dimensionamento da equipe, rotas de emergência e protocolo de crise.',
    tags: ['TODOS OS TIPOS DE EVENTO'],
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

function ServiceGlyph({ type }) {
  const icons = {
    bag: (
      <path d="M7 9V7a3 3 0 0 1 6 0v2M5 9h10v8H5z" />
    ),
    users: (
      <>
        <path d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        <path d="M4.5 17a3.5 3.5 0 0 1 7 0" />
        <path d="M13.5 11a2 2 0 1 0 0-4" />
        <path d="M12.5 17a3 3 0 0 1 5.5-1.5" />
      </>
    ),
    shield: <path d="M10 3l5 2v4.5c0 3.2-2.3 5.9-5 6.8-2.7-.9-5-3.6-5-6.8V5l5-2z" />,
    eye: (
      <>
        <path d="M1.5 9s2.5-4 8.5-4 8.5 4 8.5 4-2.5 4-8.5 4-8.5-4-8.5-4z" />
        <circle cx="10" cy="9" r="2" />
      </>
    ),
    radio: (
      <>
        <path d="M4 11a6 6 0 0 1 0-4" />
        <path d="M16 7a6 6 0 0 1 0 4" />
        <path d="M1.8 12.5a9 9 0 0 1 0-7" />
        <path d="M18.2 5.5a9 9 0 0 1 0 7" />
        <circle cx="10" cy="9" r="1.5" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="10" height="14" rx="1.5" />
        <path d="M8 4.5h4v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1z" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="service-icon">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
}

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
            {homeServices.map((service) => (
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

function ServicesPage() {
  return (
    <section className="services-page">
      <div className="container services-page-grid">
        {servicesDetailed.map((service) => (
          <article className="service-detail-card" key={service.title}>
            <ServiceGlyph type={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-tag-title">INDICADO PARA:</span>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
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
          <Route path="/servicos" element={<ServicesPage />} />
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
