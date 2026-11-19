import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Sparkles, Share2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { blogPosts } from '@/data/blog';
import { formatDateMx } from '@/lib/formatters';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-36 pb-32 text-center space-y-4">
        <h2 className="font-display font-medium text-3xl text-charcoal-800">
          Artículo no encontrado
        </h2>
        <Link to="/blog">
          <button className="px-6 py-2.5 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider">
            Regresar al Blog
          </button>
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5]">
      <Container size="md" className="space-y-8 text-left">
        {/* Back Button */}
        <div>
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-sub uppercase font-bold tracking-wider text-charcoal-600 hover:text-charcoal-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Notas de Bienestar</span>
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-sand-100 border border-sand-300 text-charcoal-800 text-[10px] font-sub uppercase font-bold tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display font-medium text-3xl sm:text-5xl text-charcoal-800 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-sand-200/80 py-4 text-xs text-charcoal-500 font-light">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover border border-sand-300"
              />
              <div>
                <strong className="text-charcoal-800 font-medium block">
                  {post.author.name}
                </strong>
                <span className="text-[11px] text-charcoal-400">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right">
              <span>{formatDateMx(post.publishDate)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTimeMinutes} min
              </span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-sand-100 border border-sand-300 shadow-md">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none pt-6 font-body text-charcoal-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p className="text-lg text-charcoal-800 font-light italic leading-relaxed border-l-2 border-botanical-forest pl-4">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line font-light leading-loose space-y-4">
            {post.content}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-sand-300 flex items-center justify-between">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-xs font-sub uppercase font-bold tracking-wider text-charcoal-800 hover:underline"
          >
            <span>Explorar Fórmulas Relacionadas</span>
          </Link>

          <Link
            to="/blog"
            className="px-6 py-2.5 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900"
          >
            Ver Más Artículos
          </Link>
        </div>
      </Container>
    </article>
  );
};
