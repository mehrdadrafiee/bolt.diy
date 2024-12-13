import { ClientOnly } from 'remix-utils/client-only';
import Landing from '~/components/landing/Landing';

export default function LandingPage() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <ClientOnly>{() => <Landing />}</ClientOnly>
    </div>
  );
}
