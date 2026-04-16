import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle2,
  LayoutDashboard,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Language, translations } from "@/src/lib/i18n";
import { categories } from "@/src/data/products";
import { cn } from "@/lib/utils";

interface HomeViewProps {
  onExplore: (categoryId: string) => void;
  language: Language;
}

export function HomeView({ onExplore, language }: HomeViewProps) {
  const t = translations[language];
  const [showCategories, setShowCategories] = useState(false);

  const displayCategories = categories.filter(c => c.id !== "home");

  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden rounded-3xl bg-[#001f3f] text-white p-12 lg:p-20 border border-white/5 shadow-2xl shadow-black/50 min-h-[600px] flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#00c3ff]/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00c3ff]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait">
            {!showCategories ? (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <div className="relative mb-10">
                  <img 
                    src="/logo.svg" 
                    alt="Broadcast Logo" 
                    className="h-12 w-auto object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-logo hidden flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00c3ff] text-[#001f3f] shadow-lg shadow-[#00c3ff]/20">
                      <LayoutDashboard className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-white">broadcast</span>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
                  {(() => {
                    const wordToHighlight = language === 'en' ? 'moves' : language === 'es' ? 'mueve' : 'move';
                    return t.heroTitle.split(wordToHighlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-[#00c3ff] drop-shadow-[0_0_15px_rgba(0,195,255,0.3)]">
                            {wordToHighlight}
                          </span>
                        )}
                      </span>
                    ));
                  })()}
                </h1>
                <p className="text-xl text-[#a0aec0] leading-relaxed mb-12 max-w-2xl font-medium">
                  {t.heroSubtext}
                </p>
                <div className="flex flex-wrap gap-6">
                  <Button size="lg" onClick={() => setShowCategories(true)} className="h-14 px-10 bg-[#00c3ff] text-[#001f3f] font-black uppercase tracking-wider hover:bg-[#00c3ff]/90 hover:scale-105 transition-all shadow-xl shadow-[#00c3ff]/20 border-none">
                    {t.exploreMarketplace}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-10 font-black uppercase tracking-wider bg-transparent border-white/10 text-white hover:bg-white/5 transition-all">
                    {t.talkToExpert}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="categories"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">
                      {t.exploreMarketplace}
                    </h2>
                    <div className="h-1 w-20 bg-[#00c3ff] rounded-full" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowCategories(false)}
                    className="rounded-full hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                  {displayCategories.map((category, i) => {
                    const themeColor = "text-[#00c3ff]";
                    const themeBg = "bg-[#00c3ff]/10";
                    const themeBorder = "group-hover:border-[#00c3ff]/50";
                    const themeShadow = "group-hover:shadow-[#00c3ff]/10";

                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ 
                          y: -12, 
                          scale: 1.05,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        onClick={() => onExplore(category.id)}
                        className={cn(
                          "group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300",
                          "flex flex-col items-center text-center gap-4 min-h-[160px] justify-center",
                          "hover:bg-white/[0.1] hover:border-[#00c3ff]/40 hover:shadow-2xl hover:shadow-[#00c3ff]/20",
                          "relative overflow-hidden"
                        )}
                      >
                        {/* Subtle inner glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00c3ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg shrink-0",
                          themeBg,
                          themeColor,
                          "group-hover:shadow-[#00c3ff]/20"
                        )}>
                          <category.icon className="h-8 w-8" />
                        </div>
                        <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-wider text-white/80 group-hover:text-white transition-colors leading-tight break-words max-w-full">
                          {category.translations[language].split('/').map((part, index) => (
                            <span key={index} className="block">{part}</span>
                          ))}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Zap,
            title: t.features.latency.title,
            description: t.features.latency.description
          },
          {
            icon: Shield,
            title: t.features.security.title,
            description: t.features.security.description
          },
          {
            icon: BarChart3,
            title: t.features.intelligence.title,
            description: t.features.intelligence.description
          }
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="p-10 rounded-2xl border border-white/5 bg-[#141d2b] card-hover-effect"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#001f3f] text-[#00c3ff] flex items-center justify-center mb-8 border border-white/5 shadow-inner">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
            <p className="text-[15px] text-[#a0aec0] leading-relaxed font-medium">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-20 py-10">
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tighter text-white">{t.ecosystem.title}</h2>
            <p className="text-[#a0aec0] text-lg font-medium">{t.ecosystem.subtitle}</p>
          </div>
          <div className="space-y-6">
            {t.ecosystem.items.map((item) => (
              <div key={item} className="flex items-center gap-5 group">
                <div className="h-6 w-6 rounded-full bg-[#00c3ff]/10 text-[#00c3ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-[16px] font-bold text-[#a0aec0] group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="link" className="p-0 h-auto text-[#00c3ff] font-black text-sm uppercase tracking-widest group hover:no-underline">
            {t.ecosystem.viewAll}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
        <div className="flex-1 w-full aspect-[4/3] rounded-3xl bg-[#141d2b] border border-white/5 overflow-hidden relative group shadow-2xl">
          {/* Technical Candlestick Chart Image - Using a more reliable Unsplash source */}
          <img 
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop" 
            alt="Technical Candlestick Chart" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          
          {/* Gradient Overlay for depth and matching the dark technical vibe */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a111a] via-[#0a111a]/20 to-transparent pointer-events-none" />
          
          {/* Simulated interactive elements */}
          <div className="absolute top-10 right-10 flex flex-col gap-3 pointer-events-none">
            {[
              { label: "IBOV", value: "128.450", change: "+1.2%", color: "text-emerald-400" },
              { label: "PETR4", value: "38.12", change: "-0.5%", color: "text-rose-400" },
              { label: "VALE3", value: "65.40", change: "+0.8%", color: "text-emerald-400" }
            ].map((ticker, i) => (
              <motion.div
                key={ticker.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-4 min-w-[140px]"
              >
                <span className="text-[10px] font-black text-white/40">{ticker.label}</span>
                <div className="flex flex-col items-end ml-auto">
                  <span className="text-xs font-bold text-white">{ticker.value}</span>
                  <span className={`text-[9px] font-black ${ticker.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {ticker.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/20 to-transparent flex items-end p-12">
            <div className="glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl">
              <p className="text-[15px] font-bold text-[#a0aec0] leading-relaxed">
                {t.ecosystem.stats}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
