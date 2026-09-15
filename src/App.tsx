import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Writing from './pages/Writing';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import { posts } from './content';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const pages: Record<string, { title: string; content: React.ReactNode }> = {
    '/': { title: 'Angel Villar-Corrales — Research Scientist', content: <Home /> },
    '/research': { title: 'Research — Angel Villar-Corrales', content: <Research /> },
    '/blog': { title: 'Blog — Angel Villar-Corrales', content: <Writing /> },
    '/resume': { title: 'Résumé — Angel Villar-Corrales', content: <Resume /> },
  };
  const blogSlug = pathname.match(/^\/blog\/([^/]+)$/)?.[1];
  const blogPost = blogSlug ? posts.find((post) => post.slug === blogSlug) : undefined;
  const page = pages[pathname] ?? (blogPost
    ? { title: `${blogPost.title} — Angel Villar-Corrales`, content: <BlogPost slug={blogSlug!} /> }
    : undefined);

  document.title = page?.title ?? 'Page not found — Angel Villar-Corrales';

  return <Layout>{page?.content ?? <NotFound />}</Layout>;
}
