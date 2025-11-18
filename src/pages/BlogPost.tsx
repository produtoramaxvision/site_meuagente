import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowRight, Home, ChevronRight, Share2 } from "lucide-react";
import { getPostBySlug, getFeaturedPosts, type BlogPost } from "@/lib/blog";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import SEO from "@/components/SEO";
import { createArticleSchema } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      const postData = await getPostBySlug(slug);
      setPost(postData);
      
      // Load related posts
      const featured = await getFeaturedPosts();
      setRelatedPosts(featured.filter(p => p.slug !== slug).slice(0, 3));
    };
    loadPost();
  }, [slug]);

  useEffect(() => {
    // Generate TOC and track active heading
    const headings = document.querySelectorAll('article h2');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-text-muted mb-4">Post não encontrado</p>
          <Button asChild variant="outline">
            <Link to="/blog">Voltar para o Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Extract headings for TOC
  const headings = post.content.match(/^## (.+)$/gm)?.map(h => {
    const title = h.replace('## ', '');
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return { title, id };
  }) || [];

  return (
    <>
      <SEO
        title={`${post.title} – Blog Meu Agente`}
        description={post.description}
        keywords={post.tags}
        ogImage={post.coverImage}
        ogType="article"
        canonicalUrl={`/blog/${post.slug}`}
        structuredData={createArticleSchema({
          title: post.title,
          description: post.description,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
          image: `https://meuagente.com${post.coverImage}`,
          url: `https://meuagente.com/blog/${post.slug}`,
        })}
      />
      <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-12 bg-gradient-to-br from-surface via-background to-surface border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link to="/" className="hover:text-brand-900 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-brand-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text">{post.category}</span>
          </nav>

          {/* Post header */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  Destaque
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-text-muted mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </div>
              <div className="flex items-center gap-2">
                Por {post.author}
              </div>
            </div>
          </div>

          {/* Cover image */}
          <div className="mt-8 max-w-5xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900/10 to-brand-700/10 border border-border/50">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Main content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none prose-headings:text-text prose-p:text-text-muted prose-strong:text-text prose-a:text-brand-900 prose-code:text-brand-900 prose-code:bg-brand-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-2 prose-pre:border prose-pre:border-border/50">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h2: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>

              {/* Tags */}
              <Separator className="my-8" />
              <div className="flex flex-wrap gap-2 not-prose">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-6 not-prose">
                <span className="text-sm font-semibold text-text">Compartilhe:</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Copiar Link
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* TOC */}
              {headings.length > 0 && (
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-base">Neste artigo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm py-1 pl-3 border-l-2 transition-all ${
                          activeHeading === heading.id
                            ? "border-brand-900 text-brand-900 font-semibold"
                            : "border-border text-text-muted hover:text-text hover:border-brand-900/50"
                        }`}
                      >
                        {heading.title}
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-gradient-to-br from-brand-900 to-brand-700 text-white border-none">
                <CardHeader>
                  <CardTitle className="text-base">Gostou do conteúdo?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-white/90">
                    Experimente Agentes de IA gratuitamente
                  </p>
                  <Button 
                    className="w-full bg-white text-brand-900 hover:bg-white/90"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Criar Conta Grátis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-brand-900/5 to-brand-700/5 border-brand-900/20">
                <CardHeader>
                  <CardTitle className="text-base">📬 Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-text-muted">
                    Receba dicas semanais de automação
                  </p>
                  <Input placeholder="seu@email.com" type="email" />
                  <Button className="w-full" size="sm">
                    Assinar
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text mb-8">Posts Relacionados</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-brand-900/10 to-brand-700/10 overflow-hidden">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="text-xs w-fit mb-2">
                        {relatedPost.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-brand-900 transition-colors">
                        {relatedPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-900 to-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para Implementar Agentes de IA?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Comece gratuitamente hoje e veja resultados em menos de 7 dias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-900 hover:bg-white/90 shadow-2xl"
              onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
            >
              Criar Conta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/planos">Ver Planos e Preços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BlogPost;

