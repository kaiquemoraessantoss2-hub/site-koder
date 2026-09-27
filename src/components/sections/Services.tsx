import { ArrowUpRight, Globe, Code2, Database, ChartNoAxesCombined } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Desenvolvimento de sites', description: 'Sua marca com uma presença à altura. Sites institucionais e landing pages com design, velocidade e foco em conversão.', tags: ['Design responsivo', 'SEO', 'Performance'] },
  { icon: Code2, title: 'Desenvolvimento de sistemas', description: 'Tecnologia que se adapta à sua rotina. Sistemas sob medida para organizar operações, integrar ferramentas e automatizar processos.', tags: ['Software sob medida', 'Integrações', 'Automação'] },
  { icon: Database, title: 'Análise de dados', description: 'Transforme dados espalhados em respostas claras. Organize informações, descubra padrões e encontre oportunidades de crescimento.', tags: ['Tratamento de dados', 'Indicadores', 'Estratégia'] },
  { icon: ChartNoAxesCombined, title: 'Dashboards inteligentes', description: 'Enxergue o que realmente importa. Painéis visuais e interativos para acompanhar indicadores e tomar decisões com confiança.', tags: ['Business intelligence', 'Visualização', 'Relatórios'] },
]

export function Services() {
  return <section id="servicos" className="k-services k-section"><div className="k-section-heading"><div><span className="k-eyebrow">01 / O QUE CRIAMOS</span><h2>Uma ideia. <span>Infinitas possibilidades.</span></h2></div><p>Da primeira impressão à próxima grande decisão: conectamos design e tecnologia ao seu negócio.</p></div><div className="k-services-grid">{services.map(({ icon: Icon, title, description, tags }, i) => <a href="#contato" className="k-service" key={title}><div className="k-service-top"><Icon size={26} strokeWidth={1.5} /><span>0{i + 1}</span><ArrowUpRight className="k-service-arrow" size={22} /></div><h3>{title}</h3><p>{description}</p><div className="k-service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></a>)}</div></section>
}
