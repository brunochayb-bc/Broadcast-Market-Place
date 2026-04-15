import { Product } from "@/src/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  ShieldCheck,
  Star
} from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Language, translations } from "@/src/lib/i18n";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  language: Language;
}

export function ProductDetail({ product, onBack, language }: ProductDetailProps) {
  const Icon = product.icon;
  const t = translations[language];
  const p = product.translations[language];
  const isPolitical = product.id === "broadcast-politico-app";
  const themeColor = isPolitical ? "#facc15" : "#00c3ff";
  const themeText = isPolitical ? "text-yellow-400" : "text-[#00c3ff]";
  const themeBorder = isPolitical ? "border-yellow-400/30" : "border-[#00c3ff]/30";
  const themeBg = isPolitical ? "bg-yellow-400" : "bg-[#00c3ff]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className={`mb-8 -ml-2 text-[#a0aec0] transition-all ${isPolitical ? 'hover:text-yellow-400' : 'hover:text-[#00c3ff]'} hover:bg-white/5`}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t.backToList}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#141d2b] border border-[#2d3748] rounded-2xl p-10 shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
              <div className={`p-5 rounded-2xl bg-[#001f3f] border border-[#2d3748] ${themeText} shadow-inner`}>
                <Icon className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="outline" className={`${themeText} ${themeBorder} uppercase tracking-[2px] text-[10px] font-black px-3 py-1`}>
                    {product.category.replace("-", " ")}
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
                <h1 className="text-4xl font-black text-white tracking-tighter">
                  {p.name}
                </h1>
              </div>
            </div>

            <Separator className="bg-white/5 mb-10" />

            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${themeBg}`} />
                {t.overview}
              </h2>
              <p className="text-[15px] text-[#a0aec0] leading-relaxed font-medium">
                {p.fullDescription}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${themeBg}`} />
                {t.competitiveAdvantages}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {p.advantages.map((adv) => (
                  <div key={adv} className={`flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-colors ${isPolitical ? 'hover:border-yellow-400/30' : 'hover:border-[#00c3ff]/30'}`}>
                    <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPolitical ? 'bg-yellow-400/10' : 'bg-[#00c3ff]/10'}`}>
                      <CheckCircle2 className={`h-3.5 w-3.5 ${themeText}`} />
                    </div>
                    <span className="text-[14px] text-[#a0aec0] font-medium leading-tight">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${themeBg}`} />
                {t.applicationScenario}
              </h2>
              <div className="relative p-8 rounded-2xl bg-[#0a111a] border border-[#2d3748] overflow-hidden group">
                <div className={`absolute top-0 left-0 w-1 h-full ${themeBg}`} />
                <p className="text-[14px] text-[#a0aec0] italic leading-relaxed relative z-10">
                  "{p.usageExample}"
                </p>
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="h-32 w-32" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-8">
          <div className="sticky top-24">
            <div className={`p-10 rounded-2xl bg-[#141d2b] border shadow-2xl relative overflow-hidden ${isPolitical ? 'border-yellow-400/50 shadow-yellow-400/5' : 'border-[#00c3ff]/50 shadow-[#00c3ff]/5'}`}>
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 blur-3xl ${isPolitical ? 'bg-yellow-400/5' : 'bg-[#00c3ff]/5'}`} />
              
              <div className="mb-10">
                <div className="text-[11px] text-[#a0aec0] uppercase tracking-[2px] font-black mb-3">
                  {language === 'pt' ? 'Investimento' : 'Investment'}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white tracking-tighter">
                    {p.cost.includes("R$") ? p.cost.split(" ")[1] : p.cost}
                  </span>
                  {p.cost.includes("R$") && (
                    <span className="text-sm font-bold text-[#a0aec0] ml-1">{t.perMonth}</span>
                  )}
                </div>
                {p.cost.includes("R$") && (
                  <div className="text-[12px] text-[#a0aec0] mt-2 font-medium">
                    {language === 'pt' ? 'Faturamento mensal recorrente' : 'Monthly recurring billing'}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Button className={`w-full h-14 ${themeBg} ${isPolitical ? 'text-black' : 'text-[#001f3f]'} font-black text-sm uppercase tracking-wider hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg ${isPolitical ? 'shadow-yellow-400/20' : 'shadow-[#00c3ff]/20'}`}>
                  {t.freeTrial}
                </Button>
                <Button variant="outline" className="w-full h-14 bg-transparent border-[#2d3748] text-white hover:bg-white/5 font-black text-sm uppercase tracking-wider transition-all">
                  {t.hireNow}
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <ShieldCheck className={`h-5 w-5 ${themeText}`} />
                  <span>{language === 'pt' ? 'Suporte Especializado 24/7' : '24/7 Specialized Support'}</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <Clock className={`h-5 w-5 ${themeText}`} />
                  <span>{language === 'pt' ? 'Ativação em até 2 horas' : 'Activation within 2 hours'}</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <CreditCard className={`h-5 w-5 ${themeText}`} />
                  <span>{language === 'pt' ? 'Pagamento via Cartão ou inclusão no contrato vigente' : 'Payment via Card or inclusion in current contract'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
