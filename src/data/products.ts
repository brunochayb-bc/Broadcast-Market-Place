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
    shortDescription: "Plataforma de negociação eletrônica para ativos de renda fixa na B3.",
    fullDescription: "O TradeMate B3 oferece acesso direto ao ambiente de negociação da B3 para títulos públicos e privados, com execução de alta performance.",
    usageExample: "Um operador institucional utiliza o TradeMate B3 para executar ordens de compra de NTN-Bs com liquidação em D+0.",
    advantages: ["Acesso direto à B3", "Execução de baixa latência", "Interface profissional", "Gestão de ordens em tempo real"],
    cost: "Sob consulta",
    features: ["DMA B3", "Book de Ofertas", "Gestão de Risco"],
    icon: Activity
  },
  {
    id: "bonds-cds",
    name: "Bonds & CDS",
    category: "renda-fixa",
    shortDescription: "Dados e análises de títulos internacionais e Credit Default Swaps.",
    fullDescription: "Acompanhe o mercado global de dívida soberana e corporativa, além de spreads de CDS para monitoramento de risco país e crédito.",
    usageExample: "Um gestor de fundos globais monitora o spread do CDS de 5 anos do Brasil para ajustar a exposição do portfólio.",
    advantages: ["Dados globais", "Histórico de spreads", "Análise de risco de crédito", "Curvas de juros internacionais"],
    cost: "R$ 450,00 / mês",
    features: ["Global Bonds", "CDS Spreads", "Credit Analysis"],
    icon: ShieldCheck
  },
  {
    id: "dados-credito-privado",
    name: "Dados Crédito Privado",
    category: "renda-fixa",
    shortDescription: "Informações detalhadas sobre Debêntures, CRIs, CRAs e FIDCs.",
    fullDescription: "A base mais completa de ativos de crédito privado no Brasil, com taxas, ratings, fluxos de caixa e documentos de emissão.",
    usageExample: "Um analista de crédito avalia as garantias de um novo CRA antes de recomendar a compra para o comitê.",
    advantages: ["Base CVM completa", "Histórico de taxas", "Monitoramento de ratings", "Documentação de emissão"],
    cost: "R$ 300,00 / mês",
    features: ["CRA/CRI Data", "Debentures", "FIDC Analysis"],
    icon: Database
  },
  {
    id: "calculadora-renda-fixa",
    name: "Calculadora de Renda Fixa",
    category: "renda-fixa",
    shortDescription: "Simulador profissional para precificação de ativos conservadores.",
    fullDescription: "Ferramenta essencial para calcular PU, taxa, duration e impostos de diversos títulos de renda fixa.",
    usageExample: "Um assessor calcula o PU de uma debênture IPCA+ para um cliente interessado em mercado secundário.",
    advantages: ["Cálculos precisos", "Múltiplos indexadores", "Simulação de cenários", "Exportação de dados"],
    cost: "R$ 85,00 / mês",
    features: ["Cálculo de PU", "Duration", "Simulador de IR"],
    icon: Calculator
  },
  {
    id: "fixedwise",
    name: "FixedWise",
    category: "renda-fixa",
    shortDescription: "Inteligência e analytics para o mercado de renda fixa.",
    fullDescription: "Plataforma de analytics que combina dados de mercado com modelos proprietários para identificação de oportunidades em renda fixa.",
    usageExample: "Um tesoureiro identifica uma distorção na curva de juros real utilizando os modelos do FixedWise.",
    advantages: ["Modelos proprietários", "Identificação de arbitragem", "Visualização de curvas", "Alertas de mercado"],
    cost: "R$ 550,00 / mês",
    features: ["Analytics", "Curve Fitting", "Opportunity Scanner"],
    icon: BarChart3
  },

  // Renda Variável
  {
    id: "bridgewise-equities",
    name: "Bridgewise (Equities)",
    category: "renda-variavel",
    shortDescription: "Análise fundamentalista baseada em IA para ações globais.",
    fullDescription: "O Bridgewise utiliza IA para analisar mais de 44.000 ações, fornecendo relatórios e scores de saúde financeira.",
    usageExample: "Um analista gera um relatório fundamentalista completo de uma Small Cap em segundos.",
    advantages: ["Cobertura global", "Análise imparcial", "Relatórios em tempo real", "Score proprietário"],
    cost: "R$ 250,00 / mês",
    features: ["AI Reports", "Global Coverage", "Financial Score"],
    icon: BrainCircuit
  },
  {
    id: "bridgewise-etfs",
    name: "Bridgewise (ETFs)",
    category: "renda-variavel",
    shortDescription: "Análise e comparação de ETFs globais utilizando IA.",
    fullDescription: "Ferramenta especializada em Exchange Traded Funds, analisando composição, taxas e performance relativa.",
    usageExample: "Um investidor compara ETFs de tecnologia globais para escolher o de menor custo e melhor exposição.",
    advantages: ["Análise de composição", "Comparativo de taxas", "Performance histórica", "Exposição setorial"],
    cost: "R$ 200,00 / mês",
    features: ["ETF Scanner", "Holdings Analysis", "Fee Comparison"],
    icon: PieChart
  },

  // Fundos de Investimento
  {
    id: "modulo-light",
    name: "Módulo Light",
    category: "fundos",
    shortDescription: "Visualização básica e acompanhamento de cotas de fundos.",
    fullDescription: "Acesso simplificado a dados de rentabilidade e patrimônio líquido de fundos de investimento.",
    usageExample: "Um investidor pessoa física acompanha a evolução da cota de seus fundos favoritos.",
    advantages: ["Custo acessível", "Dados oficiais CVM", "Interface simples", "Atualização diária"],
    cost: "R$ 50,00 / mês",
    features: ["Cotas Diárias", "Gráficos Simples", "Favoritos"],
    icon: LineChart
  },
  {
    id: "modulo-full",
    name: "Módulo Full",
    category: "fundos",
    shortDescription: "Análise profunda e ferramentas avançadas para seleção de fundos.",
    fullDescription: "Plataforma completa com lâminas, histórico longo, análise de risco (VaR, Sharpe) e correlação.",
    usageExample: "Um consultor de investimentos realiza uma análise de correlação entre fundos multimercado.",
    advantages: ["Analytics avançado", "Métricas de risco", "Comparador completo", "Ranking de performance"],
    cost: "R$ 150,00 / mês",
    features: ["Risk Metrics", "Correlation Matrix", "Full History"],
    icon: BarChart3
  },
  {
    id: "gestao-fundos",
    name: "Gestão de Fundos",
    category: "fundos",
    shortDescription: "Ferramentas para gestores e administradores de fundos.",
    fullDescription: "Módulo focado em compliance, enquadramento e monitoramento de carteira para profissionais da indústria.",
    usageExample: "Um gestor verifica o enquadramento da carteira em relação à política de investimento do fundo.",
    advantages: ["Compliance check", "Monitoramento de limites", "Relatórios gerenciais", "Integração de dados"],
    cost: "Sob consulta",
    features: ["Compliance", "Portfolio Monitoring", "Reporting"],
    icon: ShieldCheck
  },
  {
    id: "api-dados-fundos",
    name: "API Dados",
    category: "fundos",
    shortDescription: "Integração direta de dados de fundos via API REST.",
    fullDescription: "Consuma dados de cotas, patrimônio e cadastros diretamente em seus sistemas internos.",
    usageExample: "Uma fintech integra a API para exibir dados de fundos em seu aplicativo de investimentos.",
    advantages: ["Fácil integração", "Dados estruturados", "Alta disponibilidade", "Documentação completa"],
    cost: "R$ 800,00 / mês",
    features: ["REST API", "JSON Format", "High Throughput"],
    icon: Cpu
  },

  // Mercado de Balcão
  {
    id: "otc-spot",
    name: "OTC Spot",
    category: "mercado-balcao",
    shortDescription: "Negociação de ativos à vista no mercado de balcão.",
    fullDescription: "Ambiente para registro e negociação de ativos que não transitam em bolsa, com foco em liquidez e transparência.",
    usageExample: "Uma corretora registra uma operação de balcão de ações não listadas.",
    advantages: ["Registro oficial", "Transparência", "Liquidez", "Segurança jurídica"],
    cost: "Sob consulta",
    features: ["Trade Registration", "Settlement", "Compliance"],
    icon: ArrowLeftRight
  },
  {
    id: "otc-derivativos",
    name: "OTC Derivativos",
    category: "mercado-balcao",
    shortDescription: "Registro e precificação de derivativos customizados (OTC).",
    fullDescription: "Ferramentas para estruturação e registro de Swaps, Opções Flexíveis e Termos de balcão.",
    usageExample: "Uma empresa registra um Swap de taxas de juros para fazer hedge de sua dívida.",
    advantages: ["Customização", "Modelos de precificação", "Registro na B3/CVM", "Gestão de colateral"],
    cost: "Sob consulta",
    features: ["Swap Builder", "Option Pricing", "Collateral Management"],
    icon: Zap
  },
  {
    id: "otc-renda-fixa",
    name: "OTC Renda Fixa",
    category: "mercado-balcao",
    shortDescription: "Registro e negociação de títulos de renda fixa no mercado de balcão.",
    fullDescription: "Plataforma especializada para o mercado secundário de títulos privados e públicos fora do ambiente de bolsa.",
    usageExample: "Um investidor institucional negocia um lote de debêntures via balcão com liquidação financeira.",
    advantages: ["Ampla gama de ativos", "Flexibilidade de negociação", "Registro centralizado", "Eficiência operacional"],
    cost: "Sob consulta",
    features: ["Fixed Income OTC", "Secondary Market", "Trade Reporting"],
    icon: Coins
  },
  {
    id: "motor-backoffice",
    name: "Motor de Cálculo e Automatização de Back Office",
    category: "mercado-balcao",
    shortDescription: "Automatização completa do processamento pós-negociação.",
    fullDescription: "Solução robusta para cálculo de taxas, impostos, liquidação e conciliação de operações de balcão.",
    usageExample: "Uma corretora automatiza o cálculo de emolumentos e impostos de todas as suas operações de balcão diárias.",
    advantages: ["Redução de erros manuais", "Escalabilidade", "Compliance regulatório", "Visibilidade em tempo real"],
    cost: "Sob consulta",
    features: ["Calculation Engine", "Back Office Automation", "Settlement Engine"],
    icon: Cpu
  },

  // Negociação/Transacional
  {
    id: "oms-proprietario",
    name: "OMS Proprietário",
    category: "negociacao",
    shortDescription: "Sistema de Gerenciamento de Ordens customizado para sua instituição.",
    fullDescription: "Plataforma completa para roteamento, execução e controle de ordens em múltiplos mercados e classes de ativos.",
    usageExample: "Uma gestora utiliza o OMS Proprietário para centralizar o envio de ordens de diferentes mesas de operação.",
    advantages: ["Roteamento inteligente", "Controle de limites", "Multi-asset", "Integração total"],
    cost: "Sob consulta",
    features: ["Order Management", "Smart Routing", "Risk Controls"],
    icon: Activity
  },
  {
    id: "motor-calculo-precificacao",
    name: "Motor de Cálculo e Precificação",
    category: "negociacao",
    shortDescription: "Cálculos matemáticos financeiros de alta performance em tempo real.",
    fullDescription: "Motor especializado para precificação de ativos complexos, derivativos e estruturados durante a negociação.",
    usageExample: "Um trader utiliza o motor para obter o preço justo de uma opção exótica antes de enviar a oferta.",
    advantages: ["Alta performance", "Modelos matemáticos avançados", "Precisão absoluta", "Baixa latência"],
    cost: "Sob consulta",
    features: ["Pricing Engine", "Real-time Math", "Complex Assets"],
    icon: Calculator
  },

  // Agro
  {
    id: "conteudo-agro",
    name: "Conteúdo Agro",
    category: "agro",
    shortDescription: "Notícias, análises e relatórios exclusivos do setor agrícola.",
    fullDescription: "Fique por dentro de tudo o que acontece no agronegócio com notícias em tempo real e análises de especialistas.",
    usageExample: "Um produtor rural lê o relatório matinal para decidir o momento de vender sua safra de soja.",
    advantages: ["Informação em tempo real", "Análises setoriais", "Cobertura de safras", "Preços de praças"],
    cost: "R$ 120,00 / mês",
    features: ["News Feed", "Crop Reports", "Market Prices"],
    icon: FileText
  },
  {
    id: "meteoblue",
    name: "Meteoblue",
    category: "agro",
    shortDescription: "Previsões meteorológicas de alta precisão.",
    fullDescription: "Dados climáticos críticos para o planejamento agrícola e gestão de riscos climáticos.",
    usageExample: "Um gestor de usina utiliza o Meteoblue para planejar a colheita de cana-de-açúcar.",
    advantages: ["Alta precisão", "Modelos globais", "Dados históricos", "Alertas severos"],
    cost: "R$ 180,00 / mês",
    features: ["Weather Forecast", "Satellite Maps", "Historical Data"],
    icon: CloudSun
  },

  // IA
  {
    id: "broader-ai",
    name: "Broader AI",
    category: "ia",
    shortDescription: "Plataforma de IA generativa para o mercado financeiro.",
    fullDescription: "Assistente inteligente que processa vastas quantidades de dados financeiros para responder perguntas complexas.",
    usageExample: "Um analista pergunta ao Broader AI sobre os impactos históricos de altas de juros no setor de varejo.",
    advantages: ["Processamento de linguagem natural", "Insights rápidos", "Base de dados Broadcast", "Produtividade"],
    cost: "R$ 400,00 / mês",
    features: ["GenAI", "Financial Chat", "Data Synthesis"],
    icon: BrainCircuit
  },

  // Outros
  {
    id: "politico",
    name: "Político",
    category: "outros",
    shortDescription: "Análise de risco político e acompanhamento legislativo.",
    fullDescription: "Monitoramento em tempo real de Brasília, com análises sobre o impacto de decisões políticas nos mercados.",
    usageExample: "Um estrategista avalia o impacto de uma nova proposta de reforma tributária.",
    advantages: ["Inside Brasília", "Análise de impacto", "Alertas legislativos", "Cenários políticos"],
    cost: "R$ 600,00 / mês",
    features: ["Political Risk", "Legislative Tracker", "Expert Analysis"],
    icon: Scale
  },
  {
    id: "curadoria-noticias",
    name: "Curadoria de Notícias",
    category: "outros",
    shortDescription: "Feed personalizado com as notícias mais relevantes para seu perfil.",
    fullDescription: "Filtre o ruído e receba apenas o que importa para suas decisões de investimento.",
    usageExample: "Um investidor configura alertas para notícias sobre fusões e aquisições no setor de energia.",
    advantages: ["Filtro inteligente", "Alertas personalizados", "Fontes confiáveis", "Economia de tempo"],
    cost: "R$ 80,00 / mês",
    features: ["Custom Feed", "Smart Alerts", "Topic Filtering"],
    icon: Newspaper
  }
];
