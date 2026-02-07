import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Zap, Award } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalismo Corporativo com Acento Neon
 * - Dark theme (Navy #0F172A) with Neon Cyan accents (#22D3EE)
 * - Sidebar navigation, full-width sections
 * - Smooth animations, subtle hover effects
 * - Professional typography hierarchy
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    { category: "Backend", items: ["Laravel", "PHP", "Python", "C", "SQL Server", "MySQL"] },
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Figma"] },
    { category: "Integrações", items: ["Stripe", "PayPal", "Inter", "C6", "Sicoob", "NFS-e/NF-e"] },
    { category: "Ferramentas", items: ["Git/GitHub", "Docker", "ERP/CRM", "Metodologias Ágeis"] },
  ];

  const experiences = [
    {
      title: "Desenvolvedora Junior Full-Stack Laravel",
      company: "Escalar Comunicação Ltda",
      period: "2023 - Presente",
      highlights: [
        "Desenvolvimento e manutenção de sistemas críticos (ERP e CRM)",
        "Integrações complexas com APIs bancárias (Inter, C6, Sicoob)",
        "Conformidade fiscal (NFS-e/NF-e) e automação de processos",
        "Manutenção técnica do sistema AlphaSignage (mídia indoor)",
      ],
    },
    {
      title: "Estagiária em Desenvolvimento de Software",
      company: "Escalar Comunicação Ltda",
      period: "2022",
      highlights: [
        "Criação de soluções sob medida (Cardápio Web)",
        "Sistemas de Tabelas Dinâmicas com integração a balanças",
      ],
    },
    {
      title: "Impressor Digital",
      company: "Rona Editora e Embalagens",
      period: "2021",
      highlights: [
        "Operação de equipamentos de impressão digital de alta performance",
        "Controle de qualidade rigoroso e gestão de insumos",
        "Aprendizagem Industrial em Impressão Digital (SENAI)",
      ],
    },
  ];

  const projects = [
    {
      title: "Âbaque",
      description: "Projeto inovador que conquistou 1º lugar na Polivital (2014 e 2022)",
      tags: ["Inovação", "Educação", "Prêmio"],
      link: "https://amaple28.github.io/abaque/",
    },
    {
      title: "ITECSISTEM 2.0",
      description: "Projeto de Inovação em Impressão Digital com software de gestão",
      tags: ["Impressão Digital", "Automação"],
      link: "https://amaple28.github.io/ITECSISTEM2.0/",
    },
    {
      title: "Sistema Flow",
      description: "ERP/CRM para gestão interna de fluxos de trabalho",
      tags: ["Laravel", "ERP", "Produção"],
    },
    {
      title: "AlphaSignage",
      description: "Plataforma de mídia indoor com gestão centralizada",
      tags: ["Laravel", "Mídia", "Escalabilidade"],
    },
  ];

  const awards = [
    { title: "1º Lugar Polivital", year: "2014 e 2022", description: "Projeto Âbaque" },
    { title: "2º Lugar Festival de Comunicação", year: "2020", description: "Expressão Criativa" },
    { title: "Bolsa de Estudo por Mérito", year: "2011-2022", description: "Escola Politécnica de MG" },
  ];

  const education = [
    { degree: "Graduação em Sistemas de Informação", school: "Universidade Estácio de Sá (UNESA)", period: "2025 - Presente" },
    { degree: "Técnico em Informática", school: "Escola Politécnica de Minas Gerais", period: "2020 - 2022" },
    { degree: "Aprendizagem Industrial em Impressão Digital", school: "SENAI - CECOTEG", period: "2020 - 2021" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-8 hidden lg:flex flex-col z-50">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-accent mb-2">Maisa</h1>
          <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
        </div>

        <ul className="space-y-4 flex-1">
          {["about", "skills", "experience", "projects", "awards", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === section
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-card border border-transparent"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="border-t border-border pt-6 space-y-3">
          <a
            href="https://github.com/amaple28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maisa-rodrigues-674a2a218/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="mailto:maisagabirodrigues@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ZHklJxXKOkms9iAM3sumNH/sandbox/zGShw16t3WDKDVPkYO5F2M-img-1_1770422655000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWkhrbEp4WEtPa21zOWlBTTNzdW1OSC9zYW5kYm94L3pHU2h3MTZ0M1dES0RWUGtZTzVGMk0taW1nLTFfMTc3MDQyMjY1NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=t9-i~lxLN5T3XUW~FTPD6qi9jplbPauF~Vm3ysQ-PzhhIExhqdloC8YJyV2vDjdcGlBODyfj5~eTy4iz5rx19RiGBv0812akzf6tTsD97Lrfz8GM3lpS-YpC7VvA6fY0-6OO47IBbVvQnyfJxjv4RPsphKXQcLun1DHebJk08DL6fVdtJk7Dm1RKNN972uRQ--fQmT0lekt8lMgVhBm-SU1HDA-kXzMA9YBQQPkBP8rzwJehIxdcXFbPrZV4z2NAIh6P2VtPnBmb-OtlJG9pYpP6q3ge8avsymhyHUXQAwAGAN4d9zl0iE4r3SLLW~I4UGDks0tflJlZ8cs1i1fAVg__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Maisa <span className="text-accent">Rodrigues</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Desenvolvedora Full-Stack especializada em <span className="text-accent font-semibold">Laravel</span> e arquitetura de sistemas críticos
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  onClick={() => setActiveSection("projects")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Ver Projetos
                </Button>
                <a href="mailto:maisagabirodrigues@gmail.com">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Entrar em Contato
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        {activeSection === "about" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou uma <strong className="text-foreground">Desenvolvedora Full-Stack com mais de 4 anos de experiência</strong> no mercado de tecnologia. Minha especialidade é a arquitetura de sistemas em Laravel, com foco em soluções críticas que demandam performance, escalabilidade e conformidade técnica.
              </p>

              <p>
                Ao longo da minha carreira, desenvolvi expertise consolidada em <strong className="text-accent">integrações de gateways de pagamento</strong> (Inter, C6, Sicoob, PayPal, Mercado Pago), <strong className="text-accent">conformidade fiscal</strong> (NFS-e/NF-e) e <strong className="text-accent">automação de processos</strong>. Minha abordagem combina performance técnica com experiência de usuário intuitiva e eficiente.
              </p>

              <p>
                Formada como <strong className="text-foreground">Técnica em Informática</strong> pela Escola Politécnica de Minas Gerais e atualmente cursando <strong className="text-foreground">Graduação em Sistemas de Informação</strong> pela Universidade Estácio de Sá, trago uma base acadêmica sólida que complementa minha experiência prática.
              </p>

              <p>
                Sou apaixonada por <strong className="text-accent">inovação e aprendizado contínuo</strong>. Adoro participar de projetos desafiadores, contribuir para equipes multidisciplinares e explorar novas tecnologias que expandem meus horizontes profissionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <Code2 className="text-accent mb-3" size={32} />
                <h3 className="font-semibold mb-2">4+ Anos</h3>
                <p className="text-sm text-muted-foreground">de experiência em desenvolvimento full-stack</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <Zap className="text-accent mb-3" size={32} />
                <h3 className="font-semibold mb-2">Sistemas Críticos</h3>
                <p className="text-sm text-muted-foreground">especialista em arquitetura Laravel escalável</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors">
                <Database className="text-accent mb-3" size={32} />
                <h3 className="font-semibold mb-2">Integrações</h3>
                <p className="text-sm text-muted-foreground">pagamentos, fiscal e automação de processos</p>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-accent mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-background border border-accent text-accent rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Experiência Profissional</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-accent text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-12">
              <h3 className="text-2xl font-bold mb-6">Formação Acadêmica</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-0">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Projetos Destacados</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-background border border-border rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10 p-0">
                        Ver Projeto <ExternalLink size={14} className="ml-2" />
                      </Button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards Section */}
        {activeSection === "awards" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Prêmios e Realizações</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="space-y-6">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-accent/30 hover:border-accent transition-colors">
                  <div className="flex gap-4">
                    <Award className="text-accent flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                      <p className="text-accent text-sm mb-2">{award.year}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-lg border border-accent/30">
              <h3 className="text-xl font-semibold mb-3">Estatísticas Acadêmicas</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-accent">85%</p>
                  <p className="text-sm text-muted-foreground">Nota Média Acadêmica</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">4+</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:maisagabirodrigues@gmail.com" className="text-accent hover:underline">
                      maisagabirodrigues@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a href="https://wa.me/5531991805907" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      (31) 99180-5907
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Localização</p>
                    <p className="text-foreground">Belo Horizonte, MG - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-6">Redes Profissionais</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/amaple28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded hover:bg-background transition-colors group"
                  >
                    <Github size={20} className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-foreground group-hover:text-accent transition-colors">GitHub - amaple28</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maisa-rodrigues-674a2a218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded hover:bg-background transition-colors group"
                  >
                    <Linkedin size={20} className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-foreground group-hover:text-accent transition-colors">LinkedIn - Maisa Rodrigues</span>
                  </a>
                  <a
                    href="https://amaple28.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded hover:bg-background transition-colors group"
                  >
                    <ExternalLink size={20} className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-foreground group-hover:text-accent transition-colors">Portfólio Anterior</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-lg border border-accent/30 text-center">
              <p className="text-lg mb-6">Pronto para colaborar em projetos inovadores?</p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-2">
                <a href="mailto:maisagabirodrigues@gmail.com" className="flex items-center gap-2">
                  <Mail size={18} /> Enviar Email
                </a>
              </Button>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="border-t border-border mt-20 py-8 px-6 text-center text-muted-foreground">
          <p>© 2026 Maisa Rodrigues. Desenvolvido com React + Tailwind CSS.</p>
          <p className="text-xs mt-2">Portfólio profissional | Full-Stack Developer</p>
        </footer>
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 flex gap-2 overflow-x-auto">
        {["about", "skills", "experience", "projects", "awards", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-3 py-1 rounded text-xs whitespace-nowrap transition-all ${
              activeSection === section
                ? "bg-accent text-accent-foreground font-semibold"
                : "bg-background text-muted-foreground"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
