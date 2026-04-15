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
  category: string;
  icon: any;
  translations: {
    pt: {
      name: string;
      shortDescription: string;
      fullDescription: string;
      usageExample: string;
      advantages: string[];
      cost: string;
      features: string[];
    };
    en: {
      name: string;
      shortDescription: string;
      fullDescription: string;
      usageExample: string;
      advantages: string[];
      cost: string;
      features: string[];
    };
  };
}

export const categories = [
  { id: "home", icon: Globe, translations: { pt: "Home", en: "Home" } },
  { id: "renda-fixa", icon: Coins, translations: { pt: "Renda Fixa", en: "Fixed Income" } },
  { id: "renda-variavel", icon: TrendingUp, translations: { pt: "Renda Variável", en: "Equities" } },
  { id: "fundos", icon: PieChart, translations: { pt: "Fundos de Investimento", en: "Investment Funds" } },
  { id: "mercado-balcao", icon: ArrowLeftRight, translations: { pt: "Mercado de Balcão", en: "OTC Market" } },
  { id: "negociacao", icon: Activity, translations: { pt: "Negociação/Transacional", en: "Trading/Transactional" } },
  { id: "agro", icon: Sprout, translations: { pt: "Agro", en: "Agribusiness" } },
  { id: "ia", icon: BrainCircuit, translations: { pt: "Inteligência Artificial", en: "Artificial Intelligence" } },
  { id: "broadcast-politico", icon: Scale, translations: { pt: "Broadcast Político", en: "Broadcast Political" } },
  { id: "outros", icon: Zap, translations: { pt: "Outros", en: "Others" } },
];

export const products: Product[] = [
  // Renda Fixa
  {
    id: "trademate-b3",
    category: "renda-fixa",
    icon: Activity,
    translations: {
      pt: {
        name: "TradeMate B3",
        shortDescription: "Terminal de negociação eletrônica para ativos de renda fixa na B3.",
        fullDescription: "O TradeMate B3 oferece acesso direto ao PUMA Trading System da B3 para negociação de títulos públicos e privados, com execução de alta performance e baixa latência.",
        usageExample: "Um operador institucional utiliza o TradeMate B3 para executar ordens de compra de títulos públicos federais e crédito privado nos mercados primário e secundário com liquidação em D+0.",
        advantages: ["Integração Total com o Broadcast", "Acesso direto ao PUMA B3", "Execução de baixa latência", "Interface profissional customizável", "Gestão de ordens em tempo real"],
        cost: "Sob consulta",
        features: ["DMA B3", "Book de Ofertas Profundo", "Gestão de Risco Integrada"],
      },
      en: {
        name: "TradeMate B3",
        shortDescription: "Electronic trading terminal for fixed income assets on B3.",
        fullDescription: "TradeMate B3 offers direct access to B3's PUMA Trading System for trading public and private bonds, with high performance and low latency execution.",
        usageExample: "An institutional operator uses TradeMate B3 to execute buy orders for federal public bonds and private credit in the primary and secondary markets with T+0 settlement.",
        advantages: ["Full Integration with Broadcast", "Direct access to PUMA B3", "Low latency execution", "Customizable professional interface", "Real-time order management"],
        cost: "Upon request",
        features: ["DMA B3", "Deep Order Book", "Integrated Risk Management"],
      }
    }
  },
  {
    id: "bonds-cds",
    category: "renda-fixa",
    icon: ShieldCheck,
    translations: {
      pt: {
        name: "Bonds & CDS",
        shortDescription: "Monitoramento de títulos da dívida externa e spreads de CDS.",
        fullDescription: "Acompanhe em tempo real o mercado global de dívida soberana e corporativa brasileira, além de spreads de Credit Default Swaps (CDS) para monitoramento de risco país.",
        usageExample: "Um gestor de fundos globais monitora o spread do CDS de 5 anos do Brasil para ajustar o hedge de sua carteira internacional.",
        advantages: ["Dados globais em tempo real", "Histórico exaustivo de spreads", "Análise de risco de crédito soberano", "Curvas de juros internacionais"],
        cost: "R$ 450,00 / mês",
        features: ["Global Bonds Data", "CDS Spreads Monitor", "Credit Risk Analytics"],
      },
      en: {
        name: "Bonds & CDS",
        shortDescription: "Monitoring of external debt bonds and CDS spreads.",
        fullDescription: "Follow in real-time the global market for Brazilian sovereign and corporate debt, as well as Credit Default Swaps (CDS) spreads for country risk monitoring.",
        usageExample: "A global fund manager monitors Brazil's 5-year CDS spread to adjust the hedge of their international portfolio.",
        advantages: ["Real-time global data", "Exhaustive spread history", "Sovereign credit risk analysis", "International interest rate curves"],
        cost: "R$ 450.00 / month",
        features: ["Global Bonds Data", "CDS Spreads Monitor", "Credit Risk Analytics"],
      }
    }
  },
  {
    id: "dados-credito-privado",
    category: "renda-fixa",
    icon: Database,
    translations: {
      pt: {
        name: "Dados Crédito Privado",
        shortDescription: "Base completa de Debêntures, CRIs, CRAs e FIDCs.",
        fullDescription: "A base mais completa de ativos de crédito privado no Brasil, com taxas indicativas, ratings, fluxos de caixa detalhados e acesso a documentos de emissão.",
        usageExample: "Um analista de crédito avalia as garantias e o covenant de uma nova emissão de CRA antes de recomendar a alocação.",
        advantages: ["Base CVM/ANBIMA completa", "Histórico de taxas secundárias", "Monitoramento de ratings multi-agência", "Documentação técnica de emissão"],
        cost: "R$ 300,00 / mês",
        features: ["CRA/CRI Analytics", "Debentures Database", "FIDC Cash Flow Models"],
      },
      en: {
        name: "Private Credit Data",
        shortDescription: "Complete database of Debentures, CRIs, CRAs, and FIDCs.",
        fullDescription: "The most complete database of private credit assets in Brazil, with indicative rates, ratings, detailed cash flows, and access to issuance documents.",
        usageExample: "A credit analyst evaluates the guarantees and covenants of a new CRA issuance before recommending allocation.",
        advantages: ["Complete CVM/ANBIMA database", "Secondary rate history", "Multi-agency rating monitoring", "Technical issuance documentation"],
        cost: "R$ 300.00 / month",
        features: ["CRA/CRI Analytics", "Debentures Database", "FIDC Cash Flow Models"],
      }
    }
  },
  {
    id: "calculadora-renda-fixa",
    category: "renda-fixa",
    icon: Calculator,
    translations: {
      pt: {
        name: "Calculadora de Renda Fixa",
        shortDescription: "Simulador profissional para precificação e análise de sensibilidade.",
        fullDescription: "Ferramenta analítica essencial para calcular PU, taxa, duration, convexidade e impostos de diversos títulos públicos e privados.",
        usageExample: "Um tesoureiro calcula o PU de uma debênture IPCA+ para precificar uma operação no mercado secundário.",
        advantages: ["Cálculos matemáticos precisos", "Múltiplos indexadores (DI, IPCA, IGPM)", "Simulação de cenários de estresse", "Exportação para Excel/API"],
        cost: "R$ 85,00 / mês",
        features: ["Cálculo de PU e Taxa", "Duration e Convexidade", "Simulador de Tributação"],
      },
      en: {
        name: "Fixed Income Calculator",
        shortDescription: "Professional simulator for pricing and sensitivity analysis.",
        fullDescription: "Essential analytical tool for calculating price, rate, duration, convexity, and taxes for various public and private bonds.",
        usageExample: "A treasurer calculates the price of an IPCA+ debenture to price a trade in the secondary market.",
        advantages: ["Precise mathematical calculations", "Multiple indexers (DI, IPCA, IGPM)", "Stress scenario simulation", "Export to Excel/API"],
        cost: "R$ 85.00 / month",
        features: ["Price and Rate Calculation", "Duration and Convexity", "Tax Simulator"],
      }
    }
  },
  {
    id: "fixedwise",
    category: "renda-fixa",
    icon: BarChart3,
    translations: {
      pt: {
        name: "FixedWise",
        shortDescription: "Analytics avançado para identificação de arbitragens em juros.",
        fullDescription: "Plataforma de analytics que combina dados de mercado com modelos proprietários para identificação de distorções em curvas de juros reais e nominais.",
        usageExample: "Um trader de juros identifica uma oportunidade de arbitragem entre o DI futuro e as NTN-Bs utilizando o FixedWise.",
        advantages: ["Modelos de curva proprietários", "Identificação de arbitragem em tempo real", "Visualização avançada de curvas", "Alertas de distorção de mercado"],
        cost: "R$ 550,00 / mês",
        features: ["Advanced Analytics", "Curve Fitting Models", "Arbitrage Scanner"],
      },
      en: {
        name: "FixedWise",
        shortDescription: "Advanced analytics for identifying interest rate arbitrage.",
        fullDescription: "Analytics platform that combines market data with proprietary models to identify distortions in real and nominal interest rate curves.",
        usageExample: "An interest rate trader identifies an arbitrage opportunity between DI futures and NTN-Bs using FixedWise.",
        advantages: ["Proprietary curve models", "Real-time arbitrage identification", "Advanced curve visualization", "Market distortion alerts"],
        cost: "R$ 550.00 / month",
        features: ["Advanced Analytics", "Curve Fitting Models", "Arbitrage Scanner"],
      }
    }
  },

  // Renda Variável
  {
    id: "bridgewise-equities",
    category: "renda-variavel",
    icon: BrainCircuit,
    translations: {
      pt: {
        name: "Bridgewise (Equities)",
        shortDescription: "Análise fundamentalista baseada em IA para 50.000+ ações.",
        fullDescription: "O Bridgewise utiliza IA generativa para analisar balanços e indicadores de mais de 50.000 ações globais, fornecendo relatórios e scores de saúde financeira.",
        usageExample: "Um analista gera um relatório fundamentalista comparativo de Small Caps brasileiras vs pares globais em segundos.",
        advantages: ["Cobertura global massiva", "Análise fundamentalista imparcial", "Relatórios gerados em tempo real", "Score de performance proprietário"],
        cost: "R$ 250,00 / mês",
        features: ["AI Fundamental Reports", "Global Equity Coverage", "Financial Health Score"],
      },
      en: {
        name: "Bridgewise (Equities)",
        shortDescription: "AI-based fundamental analysis for 50,000+ stocks.",
        fullDescription: "Bridgewise uses generative AI to analyze balance sheets and indicators for over 50,000 global stocks, providing reports and financial health scores.",
        usageExample: "An analyst generates a comparative fundamental report of Brazilian Small Caps vs global peers in seconds.",
        advantages: ["Massive global coverage", "Impartial fundamental analysis", "Real-time generated reports", "Proprietary performance score"],
        cost: "R$ 250.00 / month",
        features: ["AI Fundamental Reports", "Global Equity Coverage", "Financial Health Score"],
      }
    }
  },
  {
    id: "bridgewise-etfs",
    category: "renda-variavel",
    icon: PieChart,
    translations: {
      pt: {
        name: "Bridgewise (ETFs)",
        shortDescription: "Análise e comparação de ETFs globais utilizando IA.",
        fullDescription: "Ferramenta especializada em Exchange Traded Funds, analisando composição de carteira, taxas de administração e performance relativa.",
        usageExample: "Um gestor de patrimônio compara ETFs de tecnologia globais para otimizar a exposição internacional de seus clientes.",
        advantages: ["Análise profunda de composição", "Comparativo de taxas (TER)", "Performance histórica ajustada", "Exposição setorial e geográfica"],
        cost: "R$ 200,00 / mês",
        features: ["ETF Composition Scanner", "Holdings Deep Dive", "Fee & Performance Comparison"],
      },
      en: {
        name: "Bridgewise (ETFs)",
        shortDescription: "AI-based analysis and comparison of global ETFs.",
        fullDescription: "Specialized tool for Exchange Traded Funds, analyzing portfolio composition, management fees, and relative performance.",
        usageExample: "A wealth manager compares global technology ETFs to optimize their clients' international exposure.",
        advantages: ["Deep composition analysis", "Fee comparison (TER)", "Adjusted historical performance", "Sectoral and geographical exposure"],
        cost: "R$ 200.00 / month",
        features: ["ETF Composition Scanner", "Holdings Deep Dive", "Fee & Performance Comparison"],
      }
    }
  },

  // Fundos de Investimento
  {
    id: "modulo-light",
    category: "fundos",
    icon: LineChart,
    translations: {
      pt: {
        name: "Módulo Light",
        shortDescription: "Acompanhamento básico de cotas e PL da indústria de fundos.",
        fullDescription: "Acesso simplificado a dados de rentabilidade, patrimônio líquido e captação de fundos de investimento brasileiros.",
        usageExample: "Um investidor acompanha a evolução diária da cota de seus fundos multimercado favoritos.",
        advantages: ["Custo-benefício excelente", "Dados oficiais CVM/ANBIMA", "Interface intuitiva", "Atualização diária garantida"],
        cost: "R$ 50,00 / mês",
        features: ["Cotas Diárias", "Gráficos de Rentabilidade", "Lista de Favoritos"],
      },
      en: {
        name: "Light Module",
        shortDescription: "Basic tracking of quotes and NAV for the fund industry.",
        fullDescription: "Simplified access to profitability, net asset value, and fundraising data for Brazilian investment funds.",
        usageExample: "An investor tracks the daily quote evolution of their favorite multi-market funds.",
        advantages: ["Excellent cost-benefit", "Official CVM/ANBIMA data", "Intuitive interface", "Guaranteed daily update"],
        cost: "R$ 50.00 / month",
        features: ["Daily Quotes", "Profitability Charts", "Favorites List"],
      }
    }
  },
  {
    id: "modulo-full",
    category: "fundos",
    icon: BarChart3,
    translations: {
      pt: {
        name: "Módulo Full",
        shortDescription: "Análise profunda e ferramentas de seleção (Screening).",
        fullDescription: "Plataforma completa com lâminas detalhadas, histórico longo, análise de risco (VaR, Sharpe, Tracking Error) e matriz de correlação.",
        usageExample: "Um consultor de investimentos realiza um screening para encontrar fundos de ações com alpha consistente acima do IBovespa.",
        advantages: ["Analytics de risco avançado", "Matriz de correlação dinâmica", "Comparador de fundos completo", "Ranking de performance setorial"],
        cost: "R$ 150,00 / mês",
        features: ["Advanced Risk Metrics", "Correlation Matrix", "Full Historical Data"],
      },
      en: {
        name: "Full Module",
        shortDescription: "Deep analysis and selection tools (Screening).",
        fullDescription: "Complete platform with detailed fact sheets, long history, risk analysis (VaR, Sharpe, Tracking Error), and correlation matrix.",
        usageExample: "An investment consultant performs a screening to find equity funds with consistent alpha above IBovespa.",
        advantages: ["Advanced risk analytics", "Dynamic correlation matrix", "Complete fund comparator", "Sectoral performance ranking"],
        cost: "R$ 150.00 / month",
        features: ["Advanced Risk Metrics", "Correlation Matrix", "Full Historical Data"],
      }
    }
  },
  {
    id: "gestao-fundos",
    category: "fundos",
    icon: ShieldCheck,
    translations: {
      pt: {
        name: "Gestão de Fundos",
        shortDescription: "Solução para compliance e monitoramento de limites.",
        fullDescription: "Módulo focado em compliance regulatório, enquadramento de carteira e monitoramento de limites para gestores e administradores.",
        usageExample: "Um gestor de compliance verifica automaticamente se o fundo está respeitando os limites da Resolução CMN 4.963.",
        advantages: ["Compliance check automatizado", "Monitoramento de limites em tempo real", "Relatórios gerenciais prontos", "Integração nativa de dados"],
        cost: "Sob consulta",
        features: ["Regulatory Compliance", "Portfolio Limit Monitoring", "Audit Reporting"],
      },
      en: {
        name: "Fund Management",
        shortDescription: "Solution for compliance and limit monitoring.",
        fullDescription: "Module focused on regulatory compliance, portfolio framing, and limit monitoring for managers and administrators.",
        usageExample: "A compliance manager automatically checks if the fund is respecting the limits of CMN Resolution 4,963.",
        advantages: ["Automated compliance check", "Real-time limit monitoring", "Ready-made management reports", "Native data integration"],
        cost: "Upon request",
        features: ["Regulatory Compliance", "Portfolio Limit Monitoring", "Audit Reporting"],
      }
    }
  },
  {
    id: "api-dados-fundos",
    category: "fundos",
    icon: Cpu,
    translations: {
      pt: {
        name: "API Dados",
        shortDescription: "Integração programática de dados de fundos via API REST.",
        fullDescription: "Consuma dados estruturados de cotas, patrimônio, captação e cadastros diretamente em seus sistemas internos ou portais.",
        usageExample: "Uma corretora integra a API do Broadcast para exibir lâminas de fundos em seu Home Broker.",
        advantages: ["Integração simples e rápida", "Dados altamente estruturados", "Alta disponibilidade e escalabilidade", "Documentação técnica completa"],
        cost: "R$ 800,00 / mês",
        features: ["RESTful API", "JSON/XML Formats", "High Throughput Access"],
      },
      en: {
        name: "Data API",
        shortDescription: "Programmatic integration of fund data via REST API.",
        fullDescription: "Consume structured data on quotes, equity, fundraising, and registrations directly in your internal systems or portals.",
        usageExample: "A brokerage integrates the Broadcast API to display fund fact sheets in its Home Broker.",
        advantages: ["Simple and fast integration", "Highly structured data", "High availability and scalability", "Complete technical documentation"],
        cost: "R$ 800.00 / month",
        features: ["RESTful API", "JSON/XML Formats", "High Throughput Access"],
      }
    }
  },

  // Mercado de Balcão
  {
    id: "otc-spot",
    category: "mercado-balcao",
    icon: ArrowLeftRight,
    translations: {
      pt: {
        name: "OTC Spot",
        shortDescription: "Registro e negociação de ativos à vista no balcão organizado.",
        fullDescription: "Ambiente para registro e negociação de ativos que não transitam em bolsa, com foco em liquidez, transparência e segurança jurídica.",
        usageExample: "Uma corretora registra uma operação de balcão de ações de uma empresa de capital fechado.",
        advantages: ["Registro oficial centralizado", "Transparência de preços", "Liquidez no mercado secundário", "Segurança jurídica nas operações"],
        cost: "Sob consulta",
        features: ["Trade Registration", "Settlement Integration", "Compliance Logging"],
      },
      en: {
        name: "OTC Spot",
        shortDescription: "Registration and trading of spot assets in the organized OTC market.",
        fullDescription: "Environment for registration and trading of assets that do not pass through the exchange, focusing on liquidity, transparency, and legal certainty.",
        usageExample: "A brokerage registers an OTC share trade for a privately held company.",
        advantages: ["Centralized official registration", "Price transparency", "Secondary market liquidity", "Legal certainty in operations"],
        cost: "Upon request",
        features: ["Trade Registration", "Settlement Integration", "Compliance Logging"],
      }
    }
  },
  {
    id: "otc-derivativos",
    category: "mercado-balcao",
    icon: Zap,
    translations: {
      pt: {
        name: "OTC Derivativos",
        shortDescription: "Estruturação e registro de derivativos customizados.",
        fullDescription: "Ferramentas para estruturação, precificação e registro de Swaps, Opções Flexíveis e Termos de balcão.",
        usageExample: "Uma empresa exportadora registra um Swap de moedas para fazer hedge de seu fluxo de caixa em dólar.",
        advantages: ["Customização total de contratos", "Modelos de precificação avançados", "Registro na B3/CVM integrado", "Gestão eficiente de colateral"],
        cost: "Sob consulta",
        features: ["Custom Swap Builder", "Advanced Option Pricing", "Collateral Management"],
      },
      en: {
        name: "OTC Derivatives",
        shortDescription: "Structuring and registration of customized derivatives.",
        fullDescription: "Tools for structuring, pricing, and registering Swaps, Flexible Options, and OTC Forwards.",
        usageExample: "An exporting company registers a currency Swap to hedge its dollar cash flow.",
        advantages: ["Total contract customization", "Advanced pricing models", "Integrated B3/CVM registration", "Efficient collateral management"],
        cost: "Upon request",
        features: ["Custom Swap Builder", "Advanced Option Pricing", "Collateral Management"],
      }
    }
  },
  {
    id: "otc-renda-fixa",
    category: "mercado-balcao",
    icon: Coins,
    translations: {
      pt: {
        name: "OTC Renda Fixa",
        shortDescription: "Negociação de títulos privados em ambiente de balcão.",
        fullDescription: "Plataforma especializada para o mercado secundário de títulos privados (Debêntures, Notas Comerciais) fora do ambiente de bolsa.",
        usageExample: "Um investidor institucional negocia um lote relevante de debêntures via balcão com liquidação financeira.",
        advantages: ["Acesso a ampla gama de ativos", "Flexibilidade na negociação", "Registro centralizado obrigatório", "Eficiência no processamento"],
        cost: "Sob consulta",
        features: ["Private Fixed Income OTC", "Secondary Market Access", "Trade Reporting"],
      },
      en: {
        name: "OTC Fixed Income",
        shortDescription: "Trading of private bonds in an OTC environment.",
        fullDescription: "Specialized platform for the secondary market of private bonds (Debentures, Commercial Notes) outside the exchange environment.",
        usageExample: "An institutional investor trades a significant lot of debentures via OTC with financial settlement.",
        advantages: ["Access to a wide range of assets", "Flexibility in negotiation", "Mandatory centralized registration", "Processing efficiency"],
        cost: "Upon request",
        features: ["Private Fixed Income OTC", "Secondary Market Access", "Trade Reporting"],
      }
    }
  },
  {
    id: "motor-backoffice",
    category: "mercado-balcao",
    icon: Cpu,
    translations: {
      pt: {
        name: "Motor de Cálculo e Automatização de Back Office",
        shortDescription: "Automação completa do processamento pós-negociação.",
        fullDescription: "Solução robusta para cálculo de taxas, impostos, liquidação financeira e conciliação de operações de balcão.",
        usageExample: "Uma corretora automatiza o cálculo de emolumentos e impostos de todas as suas operações de balcão diárias.",
        advantages: ["Eliminação de erros manuais", "Escalabilidade operacional", "Compliance regulatório total", "Visibilidade de liquidação em tempo real"],
        cost: "Sob consulta",
        features: ["Advanced Calculation Engine", "Back Office Workflow Automation", "Automated Settlement"],
      },
      en: {
        name: "Calculation Engine and Back Office Automation",
        shortDescription: "Complete automation of post-trade processing.",
        fullDescription: "Robust solution for calculating fees, taxes, financial settlement, and reconciliation of OTC operations.",
        usageExample: "A brokerage automates the calculation of fees and taxes for all its daily OTC operations.",
        advantages: ["Elimination of manual errors", "Operational scalability", "Total regulatory compliance", "Real-time settlement visibility"],
        cost: "Upon request",
        features: ["Advanced Calculation Engine", "Back Office Workflow Automation", "Automated Settlement"],
      }
    }
  },

  // Negociação/Transacional
  {
    id: "oms-proprietario",
    category: "negociacao",
    icon: Activity,
    translations: {
      pt: {
        name: "OMS Proprietário",
        shortDescription: "Sistema de Gerenciamento de Ordens multi-mercado.",
        fullDescription: "Plataforma completa para roteamento, execução e controle de ordens em múltiplos mercados (B3, Global) e classes de ativos.",
        usageExample: "Uma gestora utiliza o OMS para centralizar o envio de ordens de diferentes mesas de operação para a B3.",
        advantages: ["Roteamento inteligente de ordens", "Controle rigoroso de limites", "Multi-asset e Multi-broker", "Integração total com o ecossistema"],
        cost: "Sob consulta",
        features: ["Order Lifecycle Management", "Smart Order Routing (SOR)", "Pre-trade Risk Controls"],
      },
      en: {
        name: "Proprietary OMS",
        shortDescription: "Multi-market Order Management System.",
        fullDescription: "Complete platform for routing, execution, and control of orders in multiple markets (B3, Global) and asset classes.",
        usageExample: "A manager uses the OMS to centralize the sending of orders from different trading desks to B3.",
        advantages: ["Smart order routing", "Strict limit control", "Multi-asset and Multi-broker", "Total integration with the ecosystem"],
        cost: "Upon request",
        features: ["Order Lifecycle Management", "Smart Order Routing (SOR)", "Pre-trade Risk Controls"],
      }
    }
  },
  {
    id: "motor-calculo-precificacao",
    category: "negociacao",
    icon: Calculator,
    translations: {
      pt: {
        name: "Motor de Cálculo e Precificação",
        shortDescription: "Engine de baixa latência para cálculos matemáticos financeiros.",
        fullDescription: "Motor especializado para precificação de ativos complexos, derivativos e produtos estruturados em tempo real durante a negociação.",
        usageExample: "Um trader de opções utiliza o motor para obter o preço justo (Greas) instantaneamente antes de uma oferta.",
        advantages: ["Alta performance e baixa latência", "Modelos matemáticos de ponta", "Precisão absoluta nos cálculos", "Suporte a ativos complexos"],
        cost: "Sob consulta",
        features: ["Real-time Pricing Engine", "High-performance Math Engine", "Complex Asset Support"],
      },
      en: {
        name: "Calculation and Pricing Engine",
        shortDescription: "Low-latency engine for financial mathematical calculations.",
        fullDescription: "Specialized engine for pricing complex assets, derivatives, and structured products in real-time during trading.",
        usageExample: "An options trader uses the engine to get the fair price (Greeks) instantly before an offer.",
        advantages: ["High performance and low latency", "Cutting-edge mathematical models", "Absolute precision in calculations", "Support for complex assets"],
        cost: "Upon request",
        features: ["Real-time Pricing Engine", "High-performance Math Engine", "Complex Asset Support"],
      }
    }
  },

  // Agro
  {
    id: "conteudo-agro",
    category: "agro",
    icon: FileText,
    translations: {
      pt: {
        name: "Conteúdo Agro",
        shortDescription: "Notícias, cotações e análises exclusivas do agronegócio.",
        fullDescription: "Fique por dentro de tudo o que acontece no agronegócio com notícias em tempo real, cotações de praças físicas e análises de especialistas.",
        usageExample: "Um produtor rural monitora as cotações da soja em diferentes praças para decidir o momento da venda.",
        advantages: ["Informação em tempo real", "Análises setoriais profundas", "Cobertura completa de safras", "Preços de praças físicas"],
        cost: "R$ 120,00 / mês",
        features: ["Real-time News Feed", "Crop Progress Reports", "Physical Market Prices"],
      },
      en: {
        name: "Agro Content",
        shortDescription: "Exclusive news, quotes, and analysis of agribusiness.",
        fullDescription: "Stay on top of everything that happens in agribusiness with real-time news, physical market quotes, and expert analysis.",
        usageExample: "A rural producer monitors soybean quotes in different markets to decide the timing of the sale.",
        advantages: ["Real-time information", "Deep sectoral analysis", "Complete crop coverage", "Physical market prices"],
        cost: "R$ 120.00 / month",
        features: ["Real-time News Feed", "Crop Progress Reports", "Physical Market Prices"],
      }
    }
  },
  {
    id: "meteoblue",
    category: "agro",
    icon: CloudSun,
    translations: {
      pt: {
        name: "Meteoblue",
        shortDescription: "Previsões meteorológicas de alta precisão para o campo.",
        fullDescription: "Dados climáticos críticos para o planejamento agrícola, gestão de riscos e otimização da produtividade no campo.",
        usageExample: "Um gestor de usina utiliza o Meteoblue para planejar a janela ideal de colheita e plantio.",
        advantages: ["Alta precisão meteorológica", "Modelos climáticos globais", "Dados históricos para análise", "Alertas de eventos severos"],
        cost: "R$ 180,00 / mês",
        features: ["Hyper-local Forecast", "Satellite & Radar Maps", "Historical Climate Data"],
      },
      en: {
        name: "Meteoblue",
        shortDescription: "High-precision weather forecasts for the field.",
        fullDescription: "Critical climate data for agricultural planning, risk management, and field productivity optimization.",
        usageExample: "A plant manager uses Meteoblue to plan the ideal harvest and planting window.",
        advantages: ["High meteorological precision", "Global climate models", "Historical data for analysis", "Severe event alerts"],
        cost: "R$ 180.00 / month",
        features: ["Hyper-local Forecast", "Satellite & Radar Maps", "Historical Climate Data"],
      }
    }
  },
  {
    id: "dados-preditivos-agro",
    category: "agro",
    icon: LineChart,
    translations: {
      pt: {
        name: "Dados Preditivos",
        shortDescription: "Modelos estatísticos para estimativa de safra e produtividade.",
        fullDescription: "Utilize modelos preditivos avançados para estimar o volume de safra e produtividade por região, antecipando movimentos de mercado.",
        usageExample: "Um trader de commodities utiliza os dados preditivos para antecipar a quebra de safra de milho.",
        advantages: ["Antecipação de mercado", "Modelos estatísticos robustos", "Dados regionais detalhados", "Suporte à tomada de decisão"],
        cost: "Sob consulta",
        features: ["Yield Prediction Models", "Regional Crop Estimates", "Market Impact Analytics"],
      },
      en: {
        name: "Predictive Data",
        shortDescription: "Statistical models for crop and productivity estimation.",
        fullDescription: "Use advanced predictive models to estimate crop volume and productivity by region, anticipating market movements.",
        usageExample: "A commodities trader uses predictive data to anticipate a corn crop failure.",
        advantages: ["Market anticipation", "Robust statistical models", "Detailed regional data", "Support for decision making"],
        cost: "Upon request",
        features: ["Yield Prediction Models", "Regional Crop Estimates", "Market Impact Analytics"],
      }
    }
  },
  {
    id: "api-dados-agro",
    category: "agro",
    icon: Cpu,
    translations: {
      pt: {
        name: "API de Dados Agro",
        shortDescription: "Acesso direto a cotações e dados históricos via API.",
        fullDescription: "Integre cotações de commodities, preços físicos e dados históricos do agronegócio diretamente em seus sistemas.",
        usageExample: "Uma cooperativa integra a API para exibir cotações em tempo real em seu portal do cooperado.",
        advantages: ["Fácil integração técnica", "Dados estruturados e limpos", "Histórico longo disponível", "Atualização em tempo real"],
        cost: "R$ 500,00 / mês",
        features: ["Commodity Price API", "Historical Data Access", "Physical Market Data"],
      },
      en: {
        name: "Agro Data API",
        shortDescription: "Direct access to quotes and historical data via API.",
        fullDescription: "Integrate commodity quotes, physical prices, and historical agribusiness data directly into your systems.",
        usageExample: "A cooperative integrates the API to display real-time quotes in its member portal.",
        advantages: ["Easy technical integration", "Structured and clean data", "Long history available", "Real-time update"],
        cost: "R$ 500.00 / month",
        features: ["Commodity Price API", "Historical Data Access", "Physical Market Data"],
      }
    }
  },

  // IA
  {
    id: "broader-ai",
    category: "ia",
    icon: BrainCircuit,
    translations: {
      pt: {
        name: "Broader AI",
        shortDescription: "IA generativa treinada em décadas de dados financeiros.",
        fullDescription: "Assistente inteligente que processa vastas quantidades de dados financeiros do Broadcast para responder perguntas complexas e gerar insights.",
        usageExample: "Um analista pergunta ao Broader AI sobre os impactos históricos de altas de juros no setor de varejo brasileiro.",
        advantages: ["Processamento de linguagem natural", "Insights rápidos e precisos", "Base de dados Broadcast exclusiva", "Aumento drástico de produtividade"],
        cost: "R$ 400,00 / mês",
        features: ["Financial GenAI", "Contextual Financial Chat", "Data Synthesis & Insights"],
      },
      en: {
        name: "Broader AI",
        shortDescription: "Generative AI trained on decades of financial data.",
        fullDescription: "Intelligent assistant that processes vast amounts of Broadcast financial data to answer complex questions and generate insights.",
        usageExample: "An analyst asks Broader AI about the historical impacts of interest rate hikes on the Brazilian retail sector.",
        advantages: ["Natural language processing", "Fast and precise insights", "Exclusive Broadcast database", "Drastic increase in productivity"],
        cost: "R$ 400.00 / month",
        features: ["Financial GenAI", "Contextual Financial Chat", "Data Synthesis & Insights"],
      }
    }
  },

  // Broadcast Político
  {
    id: "broadcast-politico-app",
    category: "broadcast-politico",
    icon: Scale,
    translations: {
      pt: {
        name: "Broadcast Político App",
        shortDescription: "Acompanhamento em tempo real do cenário político e legislativo.",
        fullDescription: "O Broadcast Político App oferece monitoramento exclusivo de Brasília, com notícias, análises e alertas sobre decisões que impactam o mercado financeiro. Acesse o conteúdo completo do Broadcast Político diretamente no seu dispositivo móvel.",
        usageExample: "Um investidor utiliza o Broadcast Político App para receber alertas em tempo real sobre a votação de uma reforma importante no Congresso.",
        advantages: ["Monitoramento 24/7 de Brasília", "Análises exclusivas de especialistas", "Alertas personalizados via Push", "Contratação simplificada via Cartão"],
        cost: "R$ 299,00 / mês",
        features: ["Legislative Tracker", "Political Risk Alerts", "Expert Commentary"],
      },
      en: {
        name: "Broadcast Political App",
        shortDescription: "Real-time monitoring of the political and legislative scenario.",
        fullDescription: "The Broadcast Political App offers exclusive monitoring of Brasília, with news, analysis, and alerts on decisions that impact the financial market. Access the full Broadcast Political content directly on your mobile device.",
        usageExample: "An investor uses the Broadcast Political App to receive real-time alerts about an important reform vote in Congress.",
        advantages: ["24/7 monitoring of Brasília", "Exclusive expert analysis", "Personalized Push alerts", "Simplified hiring via Credit Card"],
        cost: "R$ 299.00 / month",
        features: ["Legislative Tracker", "Political Risk Alerts", "Expert Commentary"],
      }
    }
  },

  // Outros
  {
    id: "politico",
    category: "outros",
    icon: Scale,
    translations: {
      pt: {
        name: "Político",
        shortDescription: "Análise de risco político e acompanhamento legislativo.",
        fullDescription: "Monitoramento em tempo real de Brasília, com análises profundas sobre o impacto de decisões políticas e legislativas nos mercados.",
        usageExample: "Um estrategista avalia o impacto de uma nova proposta de reforma tributária no valuation de empresas.",
        advantages: ["Inside Brasília em tempo real", "Análise de impacto econômico", "Alertas legislativos imediatos", "Cenários políticos prospectivos"],
        cost: "R$ 600,00 / mês",
        features: ["Political Risk Analysis", "Legislative Tracker", "Expert Political Insights"],
      },
      en: {
        name: "Political",
        shortDescription: "Political risk analysis and legislative tracking.",
        fullDescription: "Real-time monitoring of Brasília, with deep analysis of the impact of political and legislative decisions on markets.",
        usageExample: "A strategist evaluates the impact of a new tax reform proposal on company valuations.",
        advantages: ["Inside Brasília in real-time", "Economic impact analysis", "Immediate legislative alerts", "Prospective political scenarios"],
        cost: "R$ 600.00 / month",
        features: ["Political Risk Analysis", "Legislative Tracker", "Expert Political Insights"],
      }
    }
  },
  {
    id: "energia",
    category: "outros",
    icon: Zap,
    translations: {
      pt: {
        name: "Energia",
        shortDescription: "Dados de geração, consumo e PLD em tempo real.",
        fullDescription: "Acompanhe o mercado livre de energia com dados de geração, consumo, níveis de reservatórios e Preço de Liquidação de Diferenças (PLD).",
        usageExample: "Um comercializador de energia monitora o PLD horário para otimizar suas estratégias de compra e venda.",
        advantages: ["Dados críticos em tempo real", "Cobertura completa do mercado livre", "Análises de especialistas do setor", "Histórico de preços e consumo"],
        cost: "Sob consulta",
        features: ["PLD Real-time Monitor", "Generation & Consumption Data", "Energy Market Analytics"],
      },
      en: {
        name: "Energy",
        shortDescription: "Generation, consumption, and PLD data in real-time.",
        fullDescription: "Follow the free energy market with generation, consumption, reservoir levels, and Settlement Price for Differences (PLD) data.",
        usageExample: "An energy trader monitors the hourly PLD to optimize their buy and sell strategies.",
        advantages: ["Critical real-time data", "Complete free market coverage", "Sector expert analysis", "Price and consumption history"],
        cost: "Upon request",
        features: ["PLD Real-time Monitor", "Generation & Consumption Data", "Energy Market Analytics"],
      }
    }
  },
  {
    id: "consultorias",
    category: "outros",
    icon: Lightbulb,
    translations: {
      pt: {
        name: "Consultorias",
        shortDescription: "Acesso a relatórios exclusivos e calls com especialistas.",
        fullDescription: "Serviço premium de consultoria com acesso a relatórios macroeconômicos exclusivos e calls diretas com o time de especialistas do Broadcast.",
        usageExample: "Um gestor participa de um call exclusivo sobre as perspectivas para a política monetária no próximo trimestre.",
        advantages: ["Acesso direto a especialistas", "Relatórios macro exclusivos", "Visão estratégica de mercado", "Suporte personalizado"],
        cost: "Sob consulta",
        features: ["Expert Calls", "Macro Reports", "Strategic Consulting"],
      },
      en: {
        name: "Consultancies",
        shortDescription: "Access to exclusive reports and calls with specialists.",
        fullDescription: "Premium consultancy service with access to exclusive macroeconomic reports and direct calls with the Broadcast team of specialists.",
        usageExample: "A manager participates in an exclusive call about the prospects for monetary policy in the next quarter.",
        advantages: ["Direct access to specialists", "Exclusive macro reports", "Strategic market view", "Personalized support"],
        cost: "Upon request",
        features: ["Expert Calls", "Macro Reports", "Strategic Consulting"],
      }
    }
  },
  {
    id: "curadoria-noticias",
    category: "outros",
    icon: Newspaper,
    translations: {
      pt: {
        name: "Curadoria de Notícias",
        shortDescription: "Feed personalizado com as notícias mais relevantes para seu perfil.",
        fullDescription: "Filtre o ruído do mercado e receba apenas as notícias e alertas que impactam diretamente suas decisões de investimento.",
        usageExample: "Um investidor configura alertas para notícias sobre M&A no setor de energia e saneamento.",
        advantages: ["Filtro inteligente de notícias", "Alertas personalizados via Push/Email", "Fontes de informação confiáveis", "Economia de tempo na análise"],
        cost: "R$ 80,00 / mês",
        features: ["Smart News Filtering", "Custom Alert Engine", "Topic-based Curation"],
      },
      en: {
        name: "News Curation",
        shortDescription: "Personalized feed with the most relevant news for your profile.",
        fullDescription: "Filter out market noise and receive only the news and alerts that directly impact your investment decisions.",
        usageExample: "An investor sets alerts for news about M&A in the energy and sanitation sector.",
        advantages: ["Smart news filtering", "Personalized alerts via Push/Email", "Reliable information sources", "Time saving in analysis"],
        cost: "R$ 80.00 / month",
        features: ["Smart News Filtering", "Custom Alert Engine", "Topic-based Curation"],
      }
    }
  }
];
