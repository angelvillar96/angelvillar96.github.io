import type { BlogPost } from '../content/types';
import { ArrowUpRight } from './Icons';

function CardContent({ post }: { post: BlogPost }) {
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
        <ArrowUpRight />
      </div>
    </>
  );
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <a className="post-card" href={`/blog/${post.slug}`}>
      <CardContent post={post} />
    </a>
  );
}
