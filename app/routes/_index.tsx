import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { Header } from '~/components/header/Header';
import LandingPage from './landing/route';

export const meta: MetaFunction = () => {
  return [{ title: 'Hilbert AI' }, { name: 'description', content: 'Talk with our AI assistant, Hilbert' }];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <Header />
      <ClientOnly>{() => <LandingPage />}</ClientOnly>
    </div>
  );
}
