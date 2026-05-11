import React from "react";
import ReactDOM from "react-dom/client";
import {
  CalendarDays,
  BadgeDollarSign,
  Wallet,
  Bot,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  Sparkles,
  PlayCircle,
  ArrowRight,
  Share2,
  Github,
  Instagram
} from "lucide-react";
import "./styles.css";

const features = [
  { icon: CalendarDays, title: "Agenda inteligente", text: "Agendamentos rápidos, organização por profissionais e controle de horários automaticamente." },
  { icon: BadgeDollarSign, title: "Comissão automática", text: "Cálculos precisos por profissional, serviço ou modelo de comissão em tempo real." },
  { icon: Wallet, title: "Controle financeiro", text: "Fluxo de caixa, lucros, despesas, metas e visão clara da saúde financeira do negócio." },
  { icon: Bot, title: "Criação de conteúdo IA", text: "Gere legendas, campanhas, posts e ideias para redes sociais usando inteligência artificial." },
  { icon: MessageCircle, title: "WhatsApp automatizado", text: "Lembretes, confirmações, campanhas e mensagens automáticas para seus clientes." },
  { icon: BarChart3, title: "Relatórios avançados", text: "Insights sobre faturamento, retenção, horários de pico, equipe e crescimento." }
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 97",
    features: ["Agenda completa", "Gestão de clientes", "5 profissional", "Checkout simples"],
    disabled: ["IA Marketing"],
    highlight: false
  },
  {
    name: "Business",
    price: "R$ 197",
    features: ["Controle financeiro completo", "Comissão automática", "Conteúdos ilimitados com IA", "Relatórios avançados", "Múltiplas unidades"],
    disabled: [],
    highlight: true
  },
  {
    name: "Pro",
    price: "R$ 147",
    features: ["Tudo do Essencial", "Gestão de equipe", "IA Marketing limitada", "15 conteúdos por mês", "Suporte prioritário"],
    disabled: [],
    highlight: false
  }
];

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <AISection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="nav">
      <a className="logo" href="#">Gerenc<span>IA</span></a>
      <nav>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#solucoes">Soluções</a>
        <a href="#planos">Planos</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="nav-actions">
        <a href="#" className="login">Entrar</a>
        <a href="#planos" className="nav-btn">Ver planos</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="pill"><Sparkles size={15} /> A nova era da gestão com agendamento</div>
      <h1>Transforme seu negócio em uma operação <span>inteligente.</span></h1>
      <p>
        Agendamentos, financeiro, comissão, automações e IA em uma única plataforma
        para empresas que vendem serviços com hora marcada.
      </p>
      <div className="hero-actions">
        <a href="#planos" className="primary-btn">Conhecer planos</a>
        <a href="#funcionalidades" className="secondary-btn"><PlayCircle size={18} /> Ver demonstração</a>
      </div>
      <DashboardMockup />
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="mockup">
      <aside>
        <div></div><span></span><span></span><span></span>
      </aside>
      <section>
        <div className="mockup-cards">
          <div><small>Faturamento mensal</small><strong>R$ 48.250,00</strong><em>+12% vs anterior</em></div>
          <div><small>Agendamentos hoje</small><strong>34</strong><em>8 confirmados</em></div>
          <div><small>Ticket médio</small><strong>R$ 142,50</strong><div className="progress"><span></span></div></div>
        </div>
        <div className="mockup-chart">
          {[45, 62, 80, 58, 72, 46, 83].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }}></i>
          ))}
        </div>
      </section>
    </div>
  );
}

function Benefits() {
  return (
    <section className="section" id="funcionalidades">
      <div className="section-head">
        <h2>Gestão sem esforço, lucro maximizado.</h2>
        <p>Tudo que você precisa para dominar sua operação em uma interface moderna, simples e inteligente.</p>
      </div>
      <div className="features-grid">
        {features.map((item) => (
          <article className="feature-card" key={item.title}>
            <div className="icon"><item.icon size={20} /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="ai-section" id="solucoes">
      <div>
        <div className="dark-pill"><Sparkles size={14} /> Marketing inteligente</div>
        <h2>Sua empresa no piloto automático com IA.</h2>
        <ul>
          <li><CheckCircle2 size={18} /><div><strong>Legendas geradas na hora</strong><p>Crie posts, campanhas e mensagens persuasivas em segundos.</p></div></li>
          <li><CheckCircle2 size={18} /><div><strong>Campanhas de reengajamento</strong><p>Identifique clientes sumidos e envie mensagens personalizadas.</p></div></li>
          <li><CheckCircle2 size={18} /><div><strong>Assistente de conteúdo</strong><p>Sugestões de temas, horários e campanhas que convertem mais.</p></div></li>
        </ul>
      </div>
      <div className="device">
        <div className="screen">
          <div className="screen-top"></div>
          <div className="screen-grid"><span></span><span></span><span></span><span></span></div>
          <div className="screen-glow"></div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing" id="planos">
      <div className="section-head">
        <h2>Escolha o plano para sua escala.</h2>
        <p>Preços transparentes que crescem junto com o seu negócio.</p>
      </div>
      <div className="plans">
        {plans.map((plan) => (
          <article className={`plan ${plan.highlight ? "highlight" : ""}`} key={plan.name}>
            {plan.highlight && <div className="recommended">Recomendado</div>}
            <small>{plan.name}</small>
            <h3>{plan.price}<span>/mês</span></h3>
            <ul>
              {plan.features.map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}
              {plan.disabled.map((feature) => <li className="disabled" key={feature}><CheckCircle2 size={16} />{feature}</li>)}
            </ul>
            <a href="#contato" className={plan.highlight ? "primary-btn" : "outline-btn"}>
              {plan.highlight ? "Assinar agora" : "Escolher plano"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta" id="contato">
      <h2>Pronto para elevar o nível da sua gestão?</h2>
      <p>Comece com uma plataforma profissional para organizar agenda, equipe, financeiro, marketing e automações em um só lugar.</p>
      <a href="#planos" className="cta-btn">Escolher meu plano <ArrowRight size={18} /></a>
      <small>Planos pagos. Sem versão gratuita.</small>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="logo" href="#">Gerenc<span>IA</span></a>
        <p>Elevando o padrão da gestão para negócios que trabalham com agendamentos, inteligência e simplicidade.</p>
        <div className="social"><a href="#"><Share2 size={17} /></a><a href="#"><Github size={17} /></a><a href="#"><Instagram size={17} /></a></div>
      </div>
      <div><h4>Produto</h4><a href="#funcionalidades">Funcionalidades</a><a href="#solucoes">IA Engine</a><a href="#planos">Planos</a></div>
      <div><h4>Recursos</h4><a href="#">Documentação</a><a href="#">Blog</a><a href="#">Comunidade</a></div>
      <div><h4>Legal</h4><a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Segurança</a></div>
      <div className="copy">© 2026 GerencIA. Desenvolvido por LealSoft Labs.</div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
