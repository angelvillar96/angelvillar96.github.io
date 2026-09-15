import PageIntro from '../components/PageIntro';
import { ArrowUpRight } from '../components/Icons';
import { posts } from '../content';

export default function BlogPost({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug);

  if (!post) return null;

  return (
    <>
      <PageIntro eyebrow={`${post.displayDate} · ${post.tags[0]}`} title={post.title} description={post.description} />
      <article className="article-body shell">
        {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {post.externalLink && (
          <a className="button primary" href={post.externalLink} target="_blank" rel="noreferrer">
            {post.externalLabel ?? 'Explore the related work'} <ArrowUpRight />
          </a>
        )}
      </article>
    </>
  );
}
