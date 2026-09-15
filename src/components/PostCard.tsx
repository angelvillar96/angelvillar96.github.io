import type { Post } from '../data/writing';
import { ArrowUpRight } from './Icons';

function CardContent({ post }: { post: Post }) {
  return (
    <>
      <div className="post-meta">
        <time>{post.date}</time>
        <span>{post.year}</span>
      </div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className="post-card-footer">
        <ul className="tag-list compact">
          {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {post.href && <ArrowUpRight />}
      </div>
    </>
  );
}

export default function PostCard({ post }: { post: Post }) {
  if (!post.href) return <article className="post-card"><CardContent post={post} /></article>;

  return (
    <a className="post-card" href={post.href} target="_blank" rel="noreferrer">
      <CardContent post={post} />
    </a>
  );
}
