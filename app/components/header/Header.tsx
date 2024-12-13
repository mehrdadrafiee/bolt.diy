import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames('flex items-center p-5 border-b h-[var(--header-height)]', {
        'border-transparent': !chat.started,
        'border-bolt-elements-borderColor': chat.started,
      })}
    >
      <div className="flex items-center gap-2 z-logo">
        <button
          aria-label="Toggle Sidebar"
          className="i-ph:sidebar-simple-duotone text-xl text-bolt-elements-textPrimary"
        />
        <a
          href="/"
          className="flex items-center gap-2 text-accent hover:opacity-90 transition-opacity"
          aria-label="Hilbert AI Home"
        >
          <h1 className="text-2xl font-semibold">Hilbert AI</h1>
          <img src="/hilbert.png" alt="Hilbert AI Logo" className="w-10 h-10 dark:invert" />
        </a>
      </div>
      {chat.started && ( // Display ChatDescription and HeaderActionButtons only when the chat has started.
        <>
          <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
            <ClientOnly>{() => <ChatDescription />}</ClientOnly>
          </span>
          <ClientOnly>
            {() => (
              <div className="mr-1">
                <HeaderActionButtons />
              </div>
            )}
          </ClientOnly>
        </>
      )}
    </header>
  );
}
