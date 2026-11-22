import { useEffect } from 'react';
import Layout from './components/Layout';
import { resolveRoute } from './routes';

export default function App({ path }: { path: string }) {
  const route = resolveRoute(path);

  useEffect(() => {
    document.title = route.title;
  }, [route]);

  return <Layout activePath={route.path}>{route.render()}</Layout>;
}
