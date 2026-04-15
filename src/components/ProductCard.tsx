import { Product } from "@/src/data/products";
import { Card as ShadcnCard, CardContent as ShadcnCardContent, CardHeader as ShadcnCardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Language, translations } from "@/src/lib/i18n";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  language: Language;
}

export function ProductCard({ product, onViewDetails, language }: ProductCardProps) {
  const Icon = product.icon;
  const t = translations[language];
  const p = product.translations[language] || product.translations.en;
  const isPolitical = product.category === "broadcast-politico";
  const themeText = isPolitical ? "text-yellow-400" : "text-[#00c3ff]";
  const themeBg = isPolitical ? "bg-yellow-400/10" : "bg-[#00c3ff]/10";
  const themeIconColor = isPolitical ? "text-yellow-400" : "text-[#00c3ff]";
  const themeHoverText = isPolitical ? "group-hover:text-yellow-400" : "group-hover:text-[#00c3ff]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <ShadcnCard 
        className="h-full flex flex-col overflow-hidden border-[#2d3748] bg-[#141d2b] card-hover-effect group cursor-pointer hover:shadow-2xl hover:shadow-[#00c3ff]/10 hover:border-[#00c3ff]/30 transition-all duration-300" 
        onClick={() => onViewDetails(product)}
      >
        <ShadcnCardHeader className="p-6 pb-2">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-[#001f3f] border border-[#2d3748] flex items-center justify-center ${themeIconColor} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <h3 className={`text-[16px] font-bold text-white ${themeHoverText} transition-colors leading-tight`}>
                {p.name}
              </h3>
              <span className={`text-[10px] uppercase tracking-widest ${isPolitical ? 'text-yellow-400/60' : 'text-[#00c3ff]/60'} font-black mt-1`}>
                {product.category.replace('-', ' ')}
              </span>
            </div>
          </div>
          <p className="text-[13px] text-[#a0aec0] mb-4 leading-relaxed line-clamp-2">
            {p.shortDescription}
          </p>
        </ShadcnCardHeader>
        <ShadcnCardContent className="p-6 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2">
            {p.features.map((feature) => (
              <span key={feature} className="text-[9px] uppercase tracking-widest font-extrabold text-[#a0aec0] bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                {feature}
              </span>
            ))}
          </div>
        </ShadcnCardContent>
        <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
          <span className={`text-[12px] font-bold text-white/40 ${themeHoverText} transition-colors`}>{t.viewDetails}</span>
          <ArrowRight className={`h-4 w-4 text-white/20 ${themeHoverText} group-hover:translate-x-1 transition-all`} />
        </div>
      </ShadcnCard>
    </motion.div>
  );
}
