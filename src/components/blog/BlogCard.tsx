import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDateMx } from '@/lib/formatters';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group rounded-3xl bg-white border border-sand-200 shadow-sm hover:shadow-antigravity-float hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left">
      <div>
        {/* Cover Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-100">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-sand-300 text-charcoal-800 text-[10px] font-sub uppercase font-bold tracking-wider shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-3 text-[11px] text-charcoal-400 font-light">
            <span>{formatDateMx(post.publishDate)}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTimeMinutes} min de lectura
            </span>
          </div>

          <h3 className="font-display font-medium text-xl sm:text-2xl text-charcoal-800 group-hover:text-charcoal-600 transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="font-body text-xs text-charcoal-500 font-light leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-sand-100 mt-2">
        <div className="flex items-center gap-2 text-xs text-charcoal-700">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 rounded-full object-cover border border-sand-300"
          />
          <span className="font-medium">{post.author.name}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-sub uppercase font-bold tracking-wider text-charcoal-800 group-hover:text-charcoal-950 group-hover:gap-2 transition-all"
        >
          <span>Leer</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
