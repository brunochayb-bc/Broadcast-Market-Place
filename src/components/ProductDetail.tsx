import { Product } from "@/src/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  PlayCircle,
  ShieldCheck,
  Star
} from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const Icon = product.icon;

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
        className="mb-8 -ml-2 text-[#a0aec0] hover:text-[#00c3ff] hover:bg-white/5 transition-all"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o Marketplace
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#141d2b] border border-[#2d3748] rounded-2xl p-10 shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
              <div className="p-5 rounded-2xl bg-[#001f3f] border border-[#2d3748] text-[#00c3ff] shadow-inner">
                <Icon className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="outline" className="text-[#00c3ff] border-[#00c3ff]/30 uppercase tracking-[2px] text-[10px] font-black px-3 py-1">
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
                  {product.name}
                </h1>
              </div>
            </div>

            <Separator className="bg-white/5 mb-10" />

            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#00c3ff]" />
                Visão Geral
              </h2>
              <p className="text-[15px] text-[#a0aec0] leading-relaxed font-medium">
                {product.fullDescription}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#00c3ff]" />
                Diferenciais Competitivos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00c3ff]/30 transition-colors">
                    <div className="mt-1 h-5 w-5 rounded-full bg-[#00c3ff]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-[#00c3ff]" />
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
                <div className="h-1.5 w-1.5 rounded-full bg-[#00c3ff]" />
                Cenário de Aplicação
              </h2>
              <div className="relative p-8 rounded-2xl bg-[#0a111a] border border-[#2d3748] overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00c3ff]" />
                <p className="text-[14px] text-[#a0aec0] italic leading-relaxed relative z-10">
                  "{product.usageExample}"
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
            <div className="p-10 rounded-2xl bg-[#141d2b] border border-[#00c3ff]/50 shadow-2xl shadow-[#00c3ff]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c3ff]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <div className="mb-10">
                <div className="text-[11px] text-[#a0aec0] uppercase tracking-[2px] font-black mb-3">Investimento</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white tracking-tighter">
                    {product.cost.includes("R$") ? product.cost.split(" ")[1] : product.cost}
                  </span>
                  {product.cost.includes("R$") && (
                    <span className="text-sm font-bold text-[#a0aec0] ml-1">/mês</span>
                  )}
                </div>
                {product.cost.includes("R$") && (
                  <div className="text-[12px] text-[#a0aec0] mt-2 font-medium">Faturamento mensal recorrente</div>
                )}
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 bg-[#00c3ff] text-[#001f3f] font-black text-sm uppercase tracking-wider hover:bg-[#00c3ff]/90 hover:scale-[1.02] transition-all shadow-lg shadow-[#00c3ff]/20">
                  Solicitar 7 Dias Grátis
                </Button>
                <Button variant="outline" className="w-full h-14 bg-transparent border-[#2d3748] text-white hover:bg-white/5 font-black text-sm uppercase tracking-wider transition-all">
                  Contratação Direta
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <ShieldCheck className="h-5 w-5 text-[#00c3ff]" />
                  <span>Suporte Especializado 24/7</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <Clock className="h-5 w-5 text-[#00c3ff]" />
                  <span>Ativação em até 2 horas</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#a0aec0] font-medium">
                  <CreditCard className="h-5 w-5 text-[#00c3ff]" />
                  <span>Pagamento via Boleto ou Cartão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
