import { ArrowRight } from '../components/Icons';

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <a className="button primary" href="/">Back home <ArrowRight /></a>
    </section>
  );
}
