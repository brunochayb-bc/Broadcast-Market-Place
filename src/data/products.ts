import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Calculator, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Coins,
  ArrowLeftRight,
  Sprout,
  BrainCircuit,
  FileText,
  Database,
  LineChart,
  Activity,
  Cpu,
  CloudSun,
  Scale,
  Lightbulb,
  Newspaper
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  usageExample: string;
  advantages: string[];
  cost: string;
  features: string[];
  icon: any;
}

export const categories = [
  { id: "home", name: "Home", icon: Globe },
  { id: "renda-fixa", name: "Renda Fixa", icon: Coins },
  { id: "renda-variavel", name: "Renda Variável", icon: TrendingUp },
  { id: "fundos", name: "Fundos de Investimento", icon: PieChart },
  { id: "mercado-balcao", name: "Mercado de Balcão", icon: ArrowLeftRight },
  { id: "negociacao", name: "Negociação/Transacional", icon: Activity },
  { id: "agro", name: "Agro", icon: Sprout },
  { id: "ia", name: "Inteligência Artificial", icon: BrainCircuit },
  { id: "outros", name: "Outros", icon: Zap },
];

export const products: Product[] = [
  // Renda Fixa
  {
    id: "trademate-b3",
    name: "TradeMate B3",
    category: "renda-fixa",
    shortDescription: "Terminal de negociação eletrônica para ativos de renda fixa na B3.",
    fullDescription: "O TradeMate B3 oferece acesso direto ao PUMA Trading System da B3 para negociação de títulos públicos e privados, com execução de alta performance e baixa latência.",
    usageExample: "Um operador institucional utiliza o TradeMate B3 para executar ordens de compra de NTN-Bs no mercado secundário com liquidação em D+0.",
    advantages: ["Acesso direto ao PUMA B3", "Execução de baixa latência", "Interface profissional customizável", "Gestão de ordens em tempo real"],
    cost: "Sob consulta",
    features: ["DMA B3", "Book de Ofertas Profundo", "Gestão de Risco Integrada"],
    icon: Activity
  },
  {
    id: "bonds-cds",
    name: "Bonds & CDS",
    category: "renda-fixa",
    shortDescription: "Monitoramento de títulos da dívida externa e spreads de CDS.",
    fullDescription: "Acompanhe em tempo real o mercado global de dívida soberana e corporativa brasileira, além de spreads de Credit Default Swaps (CDS) para monitoramento de risco país.",
    usageExample: "Um gestor de fundos globais monitora o spread do CDS de 5 anos do Brasil para ajustar o hedge de sua carteira internacional.",
    advantages: ["Dados globais em tempo real", "Histórico exaustivo de spreads", "Análise de risco de crédito soberano", "Curvas de juros internacionais"],
    cost: "R$ 450,00 / mês",
    features: ["Global Bonds Data", "CDS Spreads Monitor", "Credit Risk Analytics"],
    icon: ShieldCheck
  },
  {
    id: "dados-credito-privado",
    name: "Dados Crédito Privado",
    category: "renda-fixa",
    shortDescription: "Base completa de Debêntures, CRIs, CRAs e FIDCs.",
    fullDescription: "A base mais completa de ativos de crédito privado no Brasil, com taxas indicativas, ratings, fluxos de caixa detalhados e acesso a documentos de emissão.",
    usageExample: "Um analista de crédito avalia as garantias e o covenant de uma nova emissão de CRA antes de recomendar a alocação.",
    advantages: ["Base CVM/ANBIMA completa", "Histórico de taxas secundárias", "Monitoramento de ratings multi-agência", "Documentação técnica de emissão"],
    cost: "R$ 300,00 / mês",
    features: ["CRA/CRI Analytics", "Debentures Database", "FIDC Cash Flow Models"],
    icon: Database
  },
  {
    id: "calculadora-renda-fixa",
    name: "Calculadora de Renda Fixa",
    category: "renda-fixa",
    shortDescription: "Simulador profissional para precificação e análise de sensibilidade.",
    fullDescription: "Ferramenta analítica essencial para calcular PU, taxa, duration, convexidade e impostos de diversos títulos públicos e privados.",
    usageExample: "Um tesoureiro calcula o PU de uma debênture IPCA+ para precificar uma operação no mercado secundário.",
    advantages: ["Cálculos matemáticos precisos", "Múltiplos indexadores (DI, IPCA, IGPM)", "Simulação de cenários de estresse", "Exportação para Excel/API"],
    cost: "R$ 85,00 / mês",
    features: ["Cálculo de PU e Taxa", "Duration e Convexidade", "Simulador de Tributação"],
    icon: Calculator
  },
  {
    id: "fixedwise",
    name: "FixedWise",
    category: "renda-fixa",
    shortDescription: "Analytics avançado para identificação de arbitragens em juros.",
    fullDescription: "Plataforma de analytics que combina dados de mercado com modelos proprietários para identificação de distorções em curvas de juros reais e nominais.",
    usageExample: "Um trader de juros identifica uma oportunidade de arbitragem entre o DI futuro e as NTN-Bs utilizando o FixedWise.",
    advantages: ["Modelos de curva proprietários", "Identificação de arbitragem em tempo real", "Visualização avançada de curvas", "Alertas de distorção de mercado"],
    cost: "R$ 550,00 / mês",
    features: ["Advanced Analytics", "Curve Fitting Models", "Arbitrage Scanner"],
    icon: BarChart3
  },

  // Renda Variável
  {
    id: "bridgewise-equities",
    name: "Bridgewise (Equities)",
    category: "renda-variavel",
    shortDescription: "Análise fundamentalista baseada em IA para 50.000+ ações.",
    fullDescription: "O Bridgewise utiliza IA generativa para analisar balanços e indicadores de mais de 50.000 ações globais, fornecendo relatórios e scores de saúde financeira.",
    usageExample: "Um analista gera um relatório fundamentalista comparativo de Small Caps brasileiras vs pares globais em segundos.",
    advantages: ["Cobertura global massiva", "Análise fundamentalista imparcial", "Relatórios gerados em tempo real", "Score de performance proprietário"],
    cost: "R$ 250,00 / mês",
    features: ["AI Fundamental Reports", "Global Equity Coverage", "Financial Health Score"],
    icon: BrainCircuit
  },
  {
    id: "bridgewise-etfs",
    name: "Bridgewise (ETFs)",
    category: "renda-variavel",
    shortDescription: "Análise e comparação de ETFs globais utilizando IA.",
    fullDescription: "Ferramenta especializada em Exchange Traded Funds, analisando composição de carteira, taxas de administração e performance relativa.",
    usageExample: "Um gestor de patrimônio compara ETFs de tecnologia globais para otimizar a exposição internacional de seus clientes.",
    advantages: ["Análise profunda de composição", "Comparativo de taxas (TER)", "Performance histórica ajustada", "Exposição setorial e geográfica"],
    cost: "R$ 200,00 / mês",
    features: ["ETF Composition Scanner", "Holdings Deep Dive", "Fee & Performance Comparison"],
    icon: PieChart
  },

  // Fundos de Investimento
  {
    id: "modulo-light",
    name: "Módulo Light",
    category: "fundos",
    shortDescription: "Acompanhamento básico de cotas e PL da indústria de fundos.",
    fullDescription: "Acesso simplificado a dados de rentabilidade, patrimônio líquido e captação de fundos de investimento brasileiros.",
    usageExample: "Um investidor acompanha a evolução diária da cota de seus fundos multimercado favoritos.",
    advantages: ["Custo-benefício excelente", "Dados oficiais CVM/ANBIMA", "Interface intuitiva", "Atualização diária garantida"],
    cost: "R$ 50,00 / mês",
    features: ["Cotas Diárias", "Gráficos de Rentabilidade", "Lista de Favoritos"],
    icon: LineChart
  },
  {
    id: "modulo-full",
    name: "Módulo Full",
    category: "fundos",
    shortDescription: "Análise profunda e ferramentas de seleção (Screening).",
    fullDescription: "Plataforma completa com lâminas detalhadas, histórico longo, análise de risco (VaR, Sharpe, Tracking Error) e matriz de correlação.",
    usageExample: "Um consultor de investimentos realiza um screening para encontrar fundos de ações com alpha consistente acima do IBovespa.",
    advantages: ["Analytics de risco avançado", "Matriz de correlação dinâmica", "Comparador de fundos completo", "Ranking de performance setorial"],
    cost: "R$ 150,00 / mês",
    features: ["Advanced Risk Metrics", "Correlation Matrix", "Full Historical Data"],
    icon: BarChart3
  },
  {
    id: "gestao-fundos",
    name: "Gestão de Fundos",
    category: "fundos",
    shortDescription: "Solução para compliance e monitoramento de limites.",
    fullDescription: "Módulo focado em compliance regulatório, enquadramento de carteira e monitoramento de limites para gestores e administradores.",
    usageExample: "Um gestor de compliance verifica automaticamente se o fundo está respeitando os limites da Resolução CMN 4.963.",
    advantages: ["Compliance check automatizado", "Monitoramento de limites em tempo real", "Relatórios gerenciais prontos", "Integração nativa de dados"],
    cost: "Sob consulta",
    features: ["Regulatory Compliance", "Portfolio Limit Monitoring", "Audit Reporting"],
    icon: ShieldCheck
  },
  {
    id: "api-dados-fundos",
    name: "API Dados",
    category: "fundos",
    shortDescription: "Integração programática de dados de fundos via API REST.",
    fullDescription: "Consuma dados estruturados de cotas, patrimônio, captação e cadastros diretamente em seus sistemas internos ou portais.",
    usageExample: "Uma corretora integra a API do Broadcast para exibir lâminas de fundos em seu Home Broker.",
    advantages: ["Integração simples e rápida", "Dados altamente estruturados", "Alta disponibilidade e escalabilidade", "Documentação técnica completa"],
    cost: "R$ 800,00 / mês",
    features: ["RESTful API", "JSON/XML Formats", "High Throughput Access"],
    icon: Cpu
  },

  // Mercado de Balcão
  {
    id: "otc-spot",
    name: "OTC Spot",
    category: "mercado-balcao",
    shortDescription: "Registro e negociação de ativos à vista no balcão organizado.",
    fullDescription: "Ambiente para registro e negociação de ativos que não transitam em bolsa, com foco em liquidez, transparência e segurança jurídica.",
    usageExample: "Uma corretora registra uma operação de balcão de ações de uma empresa de capital fechado.",
    advantages: ["Registro oficial centralizado", "Transparência de preços", "Liquidez no mercado secundário", "Segurança jurídica nas operações"],
    cost: "Sob consulta",
    features: ["Trade Registration", "Settlement Integration", "Compliance Logging"],
    icon: ArrowLeftRight
  },
  {
    id: "otc-derivativos",
    name: "OTC Derivativos",
    category: "mercado-balcao",
    shortDescription: "Estruturação e registro de derivativos customizados.",
    fullDescription: "Ferramentas para estruturação, precificação e registro de Swaps, Opções Flexíveis e Termos de balcão.",
    usageExample: "Uma empresa exportadora registra um Swap de moedas para fazer hedge de seu fluxo de caixa em dólar.",
    advantages: ["Customização total de contratos", "Modelos de precificação avançados", "Registro na B3/CVM integrado", "Gestão eficiente de colateral"],
    cost: "Sob consulta",
    features: ["Custom Swap Builder", "Advanced Option Pricing", "Collateral Management"],
    icon: Zap
  },
  {
    id: "otc-renda-fixa",
    name: "OTC Renda Fixa",
    category: "mercado-balcao",
    shortDescription: "Negociação de títulos privados em ambiente de balcão.",
    fullDescription: "Plataforma especializada para o mercado secundário de títulos privados (Debêntures, Notas Comerciais) fora do ambiente de bolsa.",
    usageExample: "Um investidor institucional negocia um lote relevante de debêntures via balcão com liquidação financeira.",
    advantages: ["Acesso a ampla gama de ativos", "Flexibilidade na negociação", "Registro centralizado obrigatório", "Eficiência no processamento"],
    cost: "Sob consulta",
    features: ["Private Fixed Income OTC", "Secondary Market Access", "Trade Reporting"],
    icon: Coins
  },
  {
    id: "motor-backoffice",
    name: "Motor de Cálculo e Automatização de Back Office",
    category: "mercado-balcao",
    shortDescription: "Automação completa do processamento pós-negociação.",
    fullDescription: "Solução robusta para cálculo de taxas, impostos, liquidação financeira e conciliação de operações de balcão.",
    usageExample: "Uma corretora automatiza o cálculo de emolumentos e impostos de todas as suas operações de balcão diárias.",
    advantages: ["Eliminação de erros manuais", "Escalabilidade operacional", "Compliance regulatório total", "Visibilidade de liquidação em tempo real"],
    cost: "Sob consulta",
    features: ["Advanced Calculation Engine", "Back Office Workflow Automation", "Automated Settlement"],
    icon: Cpu
  },

  // Negociação/Transacional
  {
    id: "oms-proprietario",
    name: "OMS Proprietário",
    category: "negociacao",
    shortDescription: "Sistema de Gerenciamento de Ordens multi-mercado.",
    fullDescription: "Plataforma completa para roteamento, execução e controle de ordens em múltiplos mercados (B3, Global) e classes de ativos.",
    usageExample: "Uma gestora utiliza o OMS para centralizar o envio de ordens de diferentes mesas de operação para a B3.",
    advantages: ["Roteamento inteligente de ordens", "Controle rigoroso de limites", "Multi-asset e Multi-broker", "Integração total com o ecossistema"],
    cost: "Sob consulta",
    features: ["Order Lifecycle Management", "Smart Order Routing (SOR)", "Pre-trade Risk Controls"],
    icon: Activity
  },
  {
    id: "motor-calculo-precificacao",
    name: "Motor de Cálculo e Precificação",
    category: "negociacao",
    shortDescription: "Engine de baixa latência para cálculos matemáticos financeiros.",
    fullDescription: "Motor especializado para precificação de ativos complexos, derivativos e produtos estruturados em tempo real durante a negociação.",
    usageExample: "Um trader de opções utiliza o motor para obter o preço justo (Greas) instantaneamente antes de uma oferta.",
    advantages: ["Alta performance e baixa latência", "Modelos matemáticos de ponta", "Precisão absoluta nos cálculos", "Suporte a ativos complexos"],
    cost: "Sob consulta",
    features: ["Real-time Pricing Engine", "High-performance Math Engine", "Complex Asset Support"],
    icon: Calculator
  },

  // Agro
  {
    id: "conteudo-agro",
    name: "Conteúdo Agro",
    category: "agro",
    shortDescription: "Notícias, cotações e análises exclusivas do agronegócio.",
    fullDescription: "Fique por dentro de tudo o que acontece no agronegócio com notícias em tempo real, cotações de praças físicas e análises de especialistas.",
    usageExample: "Um produtor rural monitora as cotações da soja em diferentes praças para decidir o momento da venda.",
    advantages: ["Informação em tempo real", "Análises setoriais profundas", "Cobertura completa de safras", "Preços de praças físicas"],
    cost: "R$ 120,00 / mês",
    features: ["Real-time News Feed", "Crop Progress Reports", "Physical Market Prices"],
    icon: FileText
  },
  {
    id: "meteoblue",
    name: "Meteoblue",
    category: "agro",
    shortDescription: "Previsões meteorológicas de alta precisão para o campo.",
    fullDescription: "Dados climáticos críticos para o planejamento agrícola, gestão de riscos e otimização da produtividade no campo.",
    usageExample: "Um gestor de usina utiliza o Meteoblue para planejar a janela ideal de colheita e plantio.",
    advantages: ["Alta precisão meteorológica", "Modelos climáticos globais", "Dados históricos para análise", "Alertas de eventos severos"],
    cost: "R$ 180,00 / mês",
    features: ["Hyper-local Forecast", "Satellite & Radar Maps", "Historical Climate Data"],
    icon: CloudSun
  },
  {
    id: "dados-preditivos-agro",
    name: "Dados Preditivos",
    category: "agro",
    shortDescription: "Modelos estatísticos para estimativa de safra e produtividade.",
    fullDescription: "Utilize modelos preditivos avançados para estimar o volume de safra e produtividade por região, antecipando movimentos de mercado.",
    usageExample: "Um trader de commodities utiliza os dados preditivos para antecipar a quebra de safra de milho.",
    advantages: ["Antecipação de mercado", "Modelos estatísticos robustos", "Dados regionais detalhados", "Suporte à tomada de decisão"],
    cost: "Sob consulta",
    features: ["Yield Prediction Models", "Regional Crop Estimates", "Market Impact Analytics"],
    icon: LineChart
  },
  {
    id: "api-dados-agro",
    name: "API de Dados Agro",
    category: "agro",
    shortDescription: "Acesso direto a cotações e dados históricos via API.",
    fullDescription: "Integre cotações de commodities, preços físicos e dados históricos do agronegócio diretamente em seus sistemas.",
    usageExample: "Uma cooperativa integra a API para exibir cotações em tempo real em seu portal do cooperado.",
    advantages: ["Fácil integração técnica", "Dados estruturados e limpos", "Histórico longo disponível", "Atualização em tempo real"],
    cost: "R$ 500,00 / mês",
    features: ["Commodity Price API", "Historical Data Access", "Physical Market Data"],
    icon: Cpu
  },

  // IA
  {
    id: "broader-ai",
    name: "Broader AI",
    category: "ia",
    shortDescription: "IA generativa treinada em décadas de dados financeiros.",
    fullDescription: "Assistente inteligente que processa vastas quantidades de dados financeiros do Broadcast para responder perguntas complexas e gerar insights.",
    usageExample: "Um analista pergunta ao Broader AI sobre os impactos históricos de altas de juros no setor de varejo brasileiro.",
    advantages: ["Processamento de linguagem natural", "Insights rápidos e precisos", "Base de dados Broadcast exclusiva", "Aumento drástico de produtividade"],
    cost: "R$ 400,00 / mês",
    features: ["Financial GenAI", "Contextual Financial Chat", "Data Synthesis & Insights"],
    icon: BrainCircuit
  },

  // Outros
  {
    id: "politico",
    name: "Político",
    category: "outros",
    shortDescription: "Análise de risco político e acompanhamento legislativo.",
    fullDescription: "Monitoramento em tempo real de Brasília, com análises profundas sobre o impacto de decisões políticas e legislativas nos mercados.",
    usageExample: "Um estrategista avalia o impacto de uma nova proposta de reforma tributária no valuation de empresas.",
    advantages: ["Inside Brasília em tempo real", "Análise de impacto econômico", "Alertas legislativos imediatos", "Cenários políticos prospectivos"],
    cost: "R$ 600,00 / mês",
    features: ["Political Risk Analysis", "Legislative Tracker", "Expert Political Insights"],
    icon: Scale
  },
  {
    id: "energia",
    name: "Energia",
    category: "outros",
    shortDescription: "Dados de geração, consumo e PLD em tempo real.",
    fullDescription: "Acompanhe o mercado livre de energia com dados de geração, consumo, níveis de reservatórios e Preço de Liquidação de Diferenças (PLD).",
    usageExample: "Um comercializador de energia monitora o PLD horário para otimizar suas estratégias de compra e venda.",
    advantages: ["Dados críticos em tempo real", "Cobertura completa do mercado livre", "Análises de especialistas do setor", "Histórico de preços e consumo"],
    cost: "Sob consulta",
    features: ["PLD Real-time Monitor", "Generation & Consumption Data", "Energy Market Analytics"],
    icon: Zap
  },
  {
    id: "consultorias",
    name: "Consultorias",
    category: "outros",
    shortDescription: "Acesso a relatórios exclusivos e calls com especialistas.",
    fullDescription: "Serviço premium de consultoria com acesso a relatórios macroeconômicos exclusivos e calls diretas com o time de especialistas do Broadcast.",
    usageExample: "Um gestor participa de um call exclusivo sobre as perspectivas para a política monetária no próximo trimestre.",
    advantages: ["Acesso direto a especialistas", "Relatórios macro exclusivos", "Visão estratégica de mercado", "Suporte personalizado"],
    cost: "Sob consulta",
    features: ["Expert Calls", "Macro Reports", "Strategic Consulting"],
    icon: Lightbulb
  },
  {
    id: "curadoria-noticias",
    name: "Curadoria de Notícias",
    category: "outros",
    shortDescription: "Feed personalizado com as notícias mais relevantes para seu perfil.",
    fullDescription: "Filtre o ruído do mercado e receba apenas as notícias e alertas que impactam diretamente suas decisões de investimento.",
    usageExample: "Um investidor configura alertas para notícias sobre M&A no setor de energia e saneamento.",
    advantages: ["Filtro inteligente de notícias", "Alertas personalizados via Push/Email", "Fontes de informação confiáveis", "Economia de tempo na análise"],
    cost: "R$ 80,00 / mês",
    features: ["Smart News Filtering", "Custom Alert Engine", "Topic-based Curation"],
    icon: Newspaper
  }
];
