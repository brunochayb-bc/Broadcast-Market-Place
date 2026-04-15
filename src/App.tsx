import { useState, useMemo } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/src/components/AppSidebar";
import { products, Product, categories } from "@/src/data/products";
import { ProductCard } from "@/src/components/ProductCard";
import { ProductDetail } from "@/src/components/ProductDetail";
import { HomeView } from "@/src/components/HomeView";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== "home") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const activeCategoryName = useMemo(() => {
    return categories.find((c) => c.id === activeCategory)?.name || "Marketplace";
  }, [activeCategory]);

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    setSelectedProduct(null);
    setSearchQuery("");
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar 
            activeCategory={activeCategory} 
            onSelectCategory={handleSelectCategory} 
          />
          <SidebarInset className="flex flex-col bg-background">
            <header className="sticky top-0 z-30 flex h-[64px] items-center gap-4 border-b border-white/5 bg-[#001f3f] px-8 shadow-lg shadow-black/20">
              <SidebarTrigger className="-ml-2 text-white/70 hover:text-white hover:bg-white/10 transition-all" />
              <Separator orientation="vertical" className="h-6 bg-white/10" />
              
              <div className="flex-1 flex items-center gap-6">
                <div className="relative w-full max-w-lg hidden md:block group">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-[#00c3ff] transition-colors" />
                  <Input
                    placeholder="Pesquisar no Marketplace Broadcast..."
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-[#00c3ff]/50 focus-visible:bg-white/10 transition-all h-10 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[11px] font-bold text-white/60 uppercase tracking-widest">
                  <span className="cursor-pointer hover:text-[#00c3ff] transition-colors">PT</span>
                  <span className="text-white/20">|</span>
                  <span className="cursor-pointer hover:text-[#00c3ff] transition-colors">EN</span>
                </div>
                
                <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                  <div className="flex flex-col items-end hidden sm:flex">
                    <span className="text-[12px] font-bold text-white">Bruno Chayb</span>
                    <span className="text-[10px] text-white/50">Administrador</span>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#00c3ff] to-[#007bff] p-[1px]">
                    <div className="h-full w-full rounded-full bg-[#001f3f] flex items-center justify-center text-white font-black text-xs">
                      BC
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1">
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <div className="p-6 lg:p-10">
                  <AnimatePresence mode="wait">
                    {selectedProduct ? (
                      <div key="detail">
                        <ProductDetail 
                          product={selectedProduct} 
                          onBack={handleBackToList} 
                        />
                      </div>
                    ) : activeCategory === "home" && !searchQuery ? (
                      <div key="home">
                        <HomeView 
                          onExplore={() => handleSelectCategory("renda-fixa")} 
                        />
                      </div>
                    ) : (
                      <motion.div
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8"
                      >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div>
                            <h2 className="text-3xl font-black tracking-tight text-foreground">
                              {searchQuery ? `Resultados para "${searchQuery}"` : activeCategoryName}
                            </h2>
                            <p className="text-muted-foreground mt-1">
                              {filteredProducts.length} produtos encontrados nesta categoria.
                            </p>
                          </div>
                          
                          {activeCategory !== "home" && (
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              Atualizado em tempo real
                            </div>
                          )}
                        </div>

                        {filteredProducts.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                              <div key={product.id}>
                                <ProductCard 
                                  product={product} 
                                  onViewDetails={handleViewDetails} 
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                              <Search className="h-10 w-10 text-muted-foreground/30" />
                            </div>
                            <h3 className="text-xl font-bold">Nenhum produto encontrado</h3>
                            <p className="text-muted-foreground max-w-xs mt-2">
                              Tente ajustar sua busca ou navegar por outras categorias no menu lateral.
                            </p>
                            <Button 
                              variant="outline" 
                              className="mt-8"
                              onClick={() => setSearchQuery("")}
                            >
                              Limpar busca
                            </Button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollArea>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
