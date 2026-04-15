import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  onExplore: () => void;
}

export function HomeView({ onExplore }: HomeViewProps) {
  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden rounded-3xl bg-[#001f3f] text-white p-12 lg:p-20 border border-white/5 shadow-2xl shadow-black/50">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#00c3ff]/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00c3ff]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src="input_file_1.png" 
              alt="Broadcast Logo" 
              className="h-16 w-auto object-contain mb-10"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
              Inteligência que <span className="text-[#00c3ff] drop-shadow-[0_0_15px_rgba(0,195,255,0.3)]">move</span> os mercados.
            </h1>
            <p className="text-xl text-[#a0aec0] leading-relaxed mb-12 max-w-2xl font-medium">
              Conheça módulos adicionais (add-ons) e ferramentas que podem otimizar o seu fluxo operacional e auxiliar na tomada de decisão. Tudo integrado com o ecossistema Broadcast.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" onClick={onExplore} className="h-14 px-10 bg-[#00c3ff] text-[#001f3f] font-black uppercase tracking-wider hover:bg-[#00c3ff]/90 hover:scale-105 transition-all shadow-xl shadow-[#00c3ff]/20 border-none">
                Explorar Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 font-black uppercase tracking-wider bg-transparent border-white/10 text-white hover:bg-white/5 transition-all">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Zap,
            title: "Latência Zero",
            description: "Acesso direto aos feeds de dados mais rápidos do mercado global, garantindo execução prioritária."
          },
          {
            icon: Shield,
            title: "Segurança Nível Bancário",
            description: "Protocolos de criptografia de ponta a ponta para proteção total de seus dados e estratégias."
          },
          {
            icon: BarChart3,
            title: "Inteligência Pura",
            description: "Algoritmos proprietários e IA generativa que transformam dados brutos em alpha real."
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
            <h2 className="text-4xl font-black tracking-tighter text-white">Ecossistema Broadcast</h2>
            <p className="text-[#a0aec0] text-lg font-medium">A maior rede de inteligência financeira da América Latina ao seu alcance.</p>
          </div>
          <div className="space-y-6">
            {[
              "Integração nativa com o Terminal Broadcast",
              "Curadoria em tempo real por especialistas",
              "Suporte técnico premium 24/7",
              "Faturamento centralizado para corporações"
            ].map((item) => (
              <div key={item} className="flex items-center gap-5 group">
                <div className="h-6 w-6 rounded-full bg-[#00c3ff]/10 text-[#00c3ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-[16px] font-bold text-[#a0aec0] group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="link" className="p-0 h-auto text-[#00c3ff] font-black text-sm uppercase tracking-widest group hover:no-underline">
            Ver todos os diferenciais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
        <div className="flex-1 w-full aspect-[4/3] rounded-3xl bg-[#141d2b] border border-white/5 overflow-hidden relative group shadow-2xl">
          <img 
            src="https://picsum.photos/seed/broadcast-terminal/1200/900" 
            alt="Broadcast Terminal" 
            className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-transparent to-transparent flex items-end p-12">
            <div className="glass-panel p-6 rounded-2xl w-full">
              <p className="text-sm font-bold text-[#a0aec0]">
                <span className="text-2xl font-black text-[#00c3ff] block mb-1">+50.000</span> 
                Profissionais conectados diariamente à nossa rede.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
