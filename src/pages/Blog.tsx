import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  getAllPosts,
  getCategories,
  getFeaturedPosts,
  type BlogPost,
} from "@/lib/blog";

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

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const filteredFeatured =
    selectedCategory === "Todos"
      ? featuredPosts
      : featuredPosts.filter((post) => post.category === selectedCategory);

  const gridPosts = filteredPosts.filter(
    (post) => !filteredFeatured.some((f) => f.slug === post.slug)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero editorial com destaques */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-surface via-background to-surface py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 mb-3 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs font-medium text-text-muted"
              >
                <TrendingUp className="h-3 w-3 text-brand-900" />
                <span>Insights em agentes de IA</span>
              </Badge>
              <h1 className="text-balance text-4xl font-extrabold leading-normal pb-2 text-gradient sm:text-5xl lg:text-6xl">
                Blog Meu Agente
              </h1>
              <p className="mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
                Conteúdos profundos sobre automação com IA, WhatsApp Business e
                estratégias para escalar atendimento, vendas e operações em
                empresas modernas.
              </p>
            </div>

            {/* Busca + meta */}
            <div className="mt-4 w-full max-w-md space-y-3 lg:mt-0">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                <Input
                  placeholder="Buscar por temas, palavras-chave ou tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-11 rounded-full bg-background/80 pl-10 text-sm shadow-sm backdrop-blur-sm"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                <span>
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "artigo" : "artigos"} encontrados
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>
                  Explorando{" "}
                  <span className="font-medium text-text">
                    IA aplicada ao WhatsApp, automação e crescimento
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Faixa de destaques */}
          {filteredFeatured.length > 0 && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredFeatured.slice(0, 3).map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/70 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-900/60 hover:shadow-xl md:p-5 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative mb-4 overflow-hidden rounded-xl ${
                      index === 0
                        ? "aspect-[16/6] sm:aspect-[16/5]"
                        : "aspect-video"
                    } bg-gradient-to-br from-brand-900/10 to-brand-700/10`}
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3 text-xs text-white/90">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <span className="hidden h-1 w-1 rounded-full bg-white/60 sm:inline-flex" />
                      <span className="hidden text-xs sm:inline-flex">
                        Por {post.author}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-[11px]">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-[11px] text-white">
                          Destaque Meu Agente
                        </Badge>
                      )}
                    </div>
                    <h2
                      className={`text-balance font-semibold text-text transition-colors group-hover:text-brand-900 ${
                        index === 0
                          ? "text-xl sm:text-2xl lg:text-3xl"
                          : "text-lg sm:text-xl"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`text-text-muted ${
                        index === 0
                          ? "line-clamp-3 text-sm sm:text-base"
                          : "line-clamp-2 text-sm"
                      }`}
                    >
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Filtros de categoria */}
      <section className="sticky top-0 z-20 border-b border-border/40 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="flex w-full flex-wrap justify-start gap-2 bg-surface/70 p-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-3 py-1 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
            {/* Grid de posts */}
            <div>
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-text sm:text-xl">
                    Todos os artigos
                  </h2>
                  <p className="text-xs text-text-muted sm:text-sm">
                    Explore a biblioteca completa de conteúdos sobre IA e
                    automação.
                  </p>
                </div>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                {gridPosts.map((post, index) => (
                  <Link to={`/blog/${post.slug}`} key={post.slug}>
                    <Card
                      className="group flex h-full flex-col overflow-hidden border-border/60 bg-surface/70 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-900/60 hover:shadow-xl"
                      style={{ animationDelay: `${index * 0.04}s` }}
                    >
                      <div className="relative overflow-hidden bg-gradient-to-br from-brand-900/10 to-brand-700/10">
                        <div className="aspect-[16/9]">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 text-[11px] text-white/90">
                          <Badge
                            variant="secondary"
                            className="bg-black/70 text-[11px] text-white backdrop-blur"
                          >
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-amber-500/90 text-[11px] text-white backdrop-blur">
                              Destaque
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardHeader className="space-y-3">
                        <CardTitle className="text-base font-semibold leading-snug text-text group-hover:text-brand-900 sm:text-lg">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-sm sm:text-[15px]">
                          {post.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="mt-auto border-t border-border/50 bg-background/40 py-3 text-xs text-text-muted sm:text-[13px]">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                          <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
                          <span className="hidden truncate text-xs sm:inline-flex">
                            Por {post.author}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {gridPosts.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-text-muted">
                    Nenhum post encontrado com esses filtros.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSelectedCategory("Todos");
                      setSearchQuery("");
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar refinada */}
            <div className="space-y-8">
              {/* Posts em destaque / mais lidos */}
              <Card className="border-border/60 bg-surface shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <TrendingUp className="h-5 w-5 text-brand-900" />
                    Leituras recomendadas
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Seleção curada para você aprofundar o uso de IA no seu
                    negócio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {featuredPosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="block rounded-lg border border-transparent p-3 transition-colors hover:border-brand-900/40 hover:bg-surface"
                    >
                      <h4 className="line-clamp-2 text-sm font-semibold text-text group-hover:text-brand-900">
                        {post.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-3 text-[11px] text-text-muted">
                        <span>{post.readTime}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span>{post.category}</span>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-brand-900/20 bg-gradient-to-br from-brand-900/5 to-brand-700/5">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    📬 Newsletter Meu Agente
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Receba, 1 vez por semana, insights práticos sobre IA e
                    automação direto no seu email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="seu@email.com" type="email" />
                  <Button className="w-full text-sm">Assinar Newsletter</Button>
                  <p className="text-center text-[11px] text-text-muted">
                    Conteúdo direto ao ponto. Sem spam. Cancele quando quiser.
                  </p>
                </CardContent>
              </Card>

              {/* CTA produto */}
              <Card className="border-none bg-gradient-to-br from-brand-900 to-brand-700 text-white">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    Pronto para tirar suas ideias do papel?
                  </CardTitle>
                  <CardDescription className="text-sm text-white/85">
                    Teste Agentes de IA no WhatsApp e veja, na prática, como
                    automatizar atendimento e vendas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-white text-brand-900 hover:bg-white/90"
                    onClick={() =>
                      window.open("https://app.meuagente.api.br", "_blank")
                    }
                  >
                    Criar conta gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Categorias */}
              <Card className="border-border/60 bg-surface/80">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    Categorias
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Filtre por temas para encontrar o próximo conteúdo ideal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {categories
                    .filter((c) => c !== "Todos")
                    .map((category) => {
                      const count = posts.filter(
                        (p) => p.category === category
                      ).length;
                      return (
                        <Badge
                          key={category}
                          variant={
                            selectedCategory === category
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer rounded-full px-3 py-1 text-[11px] hover:scale-105 hover:border-brand-900/60"
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

