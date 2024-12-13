import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

export default function Landing() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <div className="Uniswap">
        <SwapWidget />
      </div>
    </div>
  );
}
