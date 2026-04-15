import { 
  ChevronRight,
  LayoutDashboard,
  Settings,
  HelpCircle
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
  SidebarFooter
} from "@/components/ui/sidebar";
import { categories } from "@/src/data/products";
import { Language, translations } from "@/src/lib/i18n";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  language: Language;
}

export function AppSidebar({ activeCategory, onSelectCategory, language }: AppSidebarProps) {
  const t = translations[language];

  return (
    <Sidebar className="border-r border-[#2d3748] bg-[#001f3f]">
      <SidebarHeader className="p-6 pb-2">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onSelectCategory("home")}
        >
          <img 
            src="/input_file_0.png" 
            alt="Broadcast Logo" 
            className="h-8 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if the logo is not found
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="fallback-logo hidden flex items-center gap-2 group-hover:scale-105 transition-transform">
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
            {t.segments}
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-0">
            <SidebarMenu>
              {categories.filter(c => c.id !== "market-data-api").map((category) => {
                const isPolitical = category.id === "broadcast-politico";
                const activeColor = isPolitical ? "border-yellow-400" : "border-[#00c3ff]";
                const activeBg = isPolitical ? "bg-yellow-400/10" : "bg-[#00c3ff]/10";
                const activeIcon = isPolitical ? "text-yellow-400" : "text-[#00c3ff]";

                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      isActive={activeCategory === category.id}
                      onClick={() => onSelectCategory(category.id)}
                      className={`
                        flex items-center gap-3 px-6 py-3.5 rounded-none transition-all duration-300 border-l-[3px]
                        ${activeCategory === category.id 
                          ? `${activeBg} text-white ${activeColor} font-bold` 
                          : "text-[#a0aec0] border-transparent hover:bg-white/5 hover:text-white"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className={`h-4 w-4 transition-colors ${activeCategory === category.id ? activeIcon : "text-[#a0aec0]"}`} />
                        <span className="text-[13px] tracking-tight">{category.translations[language]}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {categories.find(c => c.id === "market-data-api") && (
          <SidebarGroup>
            <SidebarGroupLabel className="px-6 text-[10px] font-extrabold uppercase tracking-[1.5px] text-yellow-400/70 mb-4 mt-4">
              {categories.find(c => c.id === "market-data-api")?.translations[language]}
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-0">
              <SidebarMenu>
                {categories.filter(c => c.id === "market-data-api").map((category) => (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      isActive={activeCategory === category.id}
                      onClick={() => onSelectCategory(category.id)}
                      className={`
                        flex items-center gap-3 px-6 py-3.5 rounded-none transition-all duration-300 border-l-[3px]
                        ${activeCategory === category.id 
                          ? "bg-yellow-400/10 text-white border-yellow-400 font-bold" 
                          : "text-[#a0aec0] border-transparent hover:bg-white/5 hover:text-white"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className={`h-4 w-4 transition-colors ${activeCategory === category.id ? "text-yellow-400" : "text-[#a0aec0]"}`} />
                        <span className="text-[13px] tracking-tight">{category.translations[language]}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className="p-6 border-t border-white/5">
        <SidebarMenu>
          {[
            { icon: Settings, label: language === 'pt' ? "Configurações" : "Settings" },
            { icon: HelpCircle, label: language === 'pt' ? "Suporte" : "Support" }
          ].map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className="text-white/40 hover:text-white transition-colors h-10 px-6">
                <item.icon className="h-4 w-4 mr-3" />
                <span className="text-[12px] font-bold">{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
