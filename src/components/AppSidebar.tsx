import { 
  Home, 
  TrendingUp, 
  PieChart, 
  Coins, 
  Zap, 
  ChevronRight,
  LayoutDashboard,
  ArrowLeftRight,
  Activity,
  Sprout,
  BrainCircuit
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Início",
    url: "home",
    icon: Home,
  },
  {
    title: "Renda Fixa",
    url: "renda-fixa",
    icon: Coins,
  },
  {
    title: "Renda Variável",
    url: "renda-variavel",
    icon: TrendingUp,
  },
  {
    title: "Fundos de Investimento",
    url: "fundos",
    icon: PieChart,
  },
  {
    title: "Mercado de Balcão",
    url: "mercado-balcao",
    icon: ArrowLeftRight,
  },
  {
    title: "Negociação",
    url: "negociacao",
    icon: Activity,
  },
  {
    title: "Agro",
    url: "agro",
    icon: Sprout,
  },
  {
    title: "Inteligência Artificial",
    url: "ia",
    icon: BrainCircuit,
  },
  {
    title: "Outros",
    url: "outros",
    icon: Zap,
  },
];

interface AppSidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function AppSidebar({ activeCategory, onSelectCategory }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-[#2d3748] bg-[#001f3f]">
      <SidebarHeader className="p-6 pb-2">
        <div className="flex items-center gap-3">
          <img 
            src="/input_file_0.png" 
            alt="Broadcast Logo" 
            className="h-8 w-auto object-contain brightness-0 invert"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if the logo is not found
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="fallback-logo hidden flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#00c3ff] text-[#001f3f]">
              <LayoutDashboard className="h-4 w-4" />
            </div>
            <span className="text-lg font-black tracking-tighter text-white uppercase">Broadcast</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#001f3f]">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#00c3ff]/70 mb-4 mt-4">
            Segmentos
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-0">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={activeCategory === item.url}
                    onClick={() => onSelectCategory(item.url)}
                    className={`
                      flex items-center gap-3 px-6 py-3.5 rounded-none transition-all duration-300 border-l-[3px]
                      ${activeCategory === item.url 
                        ? "bg-[#00c3ff]/10 text-white border-[#00c3ff] font-bold" 
                        : "text-[#a0aec0] border-transparent hover:bg-white/5 hover:text-white"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-4 w-4 transition-colors ${activeCategory === item.url ? "text-[#00c3ff]" : "text-[#a0aec0]"}`} />
                      <span className="text-[13px] tracking-tight">{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
