import React, { useState } from 'react';
import { BookOpen, Sparkles, Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BlogCard, BehindTheScenesGallery } from '@/components/blog';
import { blogPosts } from '@/data/blog';

export const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = ['TODOS', ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag === 'TODOS' || post.tags.includes(selectedTag);
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5] space-y-24 sm:space-y-32">
      {/* 1. Header & Blog Feed */}
      <section>
        <Container size="xl" className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-[0.2em] font-bold shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-botanical-forest" />
              <span>SABIDURÍA & EDUCACIÓN BOTÁNICA</span>
            </div>
            <h1 className="font-display font-medium text-4xl sm:text-6xl text-charcoal-800 tracking-tight">
              Blog / Notas de Bienestar
            </h1>
            <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
              Reflexiones, rutinas de descanso, anatomía capilar y Ciencia Ancestral para nutrir Tu vida consciente.
            </p>
          </div>

          {/* Tags & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-sand-200 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-sub uppercase font-bold tracking-wider transition-all ${
                      isActive
                        ? 'bg-charcoal-800 text-sand-50 shadow-sm'
                        : 'bg-sand-50 border border-sand-200 text-charcoal-600 hover:bg-sand-100'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artículo..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-sand-50 border border-sand-300 text-xs text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-800"
              />
            </div>
          </div>

          {/* Articles Grid (4 Articles specified in user prompt) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Galería Detrás de Cámaras (Eventos y Procesos) */}
      <BehindTheScenesGallery />
    </div>
  );
};
