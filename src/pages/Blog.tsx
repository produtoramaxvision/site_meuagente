import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllPosts, getCategories, getFeaturedPosts, type BlogPost } from "@/lib/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getCategories();

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      const featured = await getFeaturedPosts();
      setPosts(allPosts);
      setFeaturedPosts(featured);
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-6">
            Blog Meu Agente
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Aprenda tudo sobre Agentes de IA, automação de negócios, WhatsApp Business e muito mais
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <Input
                placeholder="Buscar posts, tags ou temas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-8 bg-surface/30 sticky top-0 z-10 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 h-auto p-2 bg-background/80">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Blog posts grid */}
            <div className="lg:col-span-2">
              <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <Link to={`/blog/${post.slug}`} key={post.slug}>
                    <Card className="group h-full hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      {/* Cover image */}
                      <div className="aspect-video bg-gradient-to-br from-brand-900/10 to-brand-700/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                              Destaque
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl group-hover:text-brand-900 transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center gap-4 text-xs text-text-muted">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-text-muted text-lg">Nenhum post encontrado com esses filtros.</p>
                  <Button variant="outline" className="mt-4" onClick={() => { setSelectedCategory("Todos"); setSearchQuery(""); }}>
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Posts mais lidos */}
              <Card className="sticky top-32">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand-900" />
                    Posts em Destaque
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <Link 
                      key={post.slug} 
                      to={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <div className="space-y-2 p-3 rounded-lg hover:bg-surface-2 transition-colors">
                        <h4 className="text-sm font-semibold text-text group-hover:text-brand-900 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter signup */}
              <Card className="bg-gradient-to-br from-brand-900/5 to-brand-700/5 border-brand-900/20">
                <CardHeader>
                  <CardTitle className="text-lg">📬 Newsletter</CardTitle>
                  <CardDescription>
                    Receba dicas semanais de automação e IA direto no seu email
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="seu@email.com" type="email" />
                  <Button className="w-full">
                    Assinar Newsletter
                  </Button>
                  <p className="text-xs text-text-muted text-center">
                    Sem spam. Cancele quando quiser.
                  </p>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-brand-900 to-brand-700 text-white border-none">
                <CardHeader>
                  <CardTitle className="text-lg">Pronto para começar?</CardTitle>
                  <CardDescription className="text-white/80">
                    Teste Agentes de IA gratuitamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-white text-brand-900 hover:bg-white/90"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Criar Conta Gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Categorias */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categorias</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {categories.filter(c => c !== "Todos").map((category) => {
                    const count = posts.filter(p => p.category === category).length;
                    return (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category} ({count})
                      </Badge>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

