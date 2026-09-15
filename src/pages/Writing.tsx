import { useMemo, useState } from 'react';
import PageIntro from '../components/PageIntro';
import PostCard from '../components/PostCard';
import { postCategories, posts } from '../data/writing';

export default function Writing() {
  const [category, setCategory] = useState<(typeof postCategories)[number]>('All');
  const visiblePosts = useMemo(
    () => category === 'All' ? posts : posts.filter(({ tags }) => tags.includes(category)),
    [category],
  );

  return (
    <>
      <PageIntro
        eyebrow="Blog & tutorials"
        title="Notes from the workbench."
        description="Research updates, practical machine-learning notes, project stories, books, music, and occasional dispatches from beyond the lab."
      />

      <section className="section shell blog-section">
        <div className="filter-row blog-filters" aria-label="Filter blog posts by category">
          {postCategories.map((item) => (
            <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="post-grid">
          {visiblePosts.map((post) => <PostCard key={`${post.date}-${post.title}`} post={post} />)}
        </div>
      </section>

      <section className="writing-note">
        <div className="shell writing-note-inner">
          <p className="eyebrow">Open source</p>
          <p>The tutorials and supporting code are public. Fork them, experiment, and make them your own.</p>
        </div>
      </section>
    </>
  );
}
