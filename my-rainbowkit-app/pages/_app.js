import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const zksyncdev = {
  id: 280,
  name: 'ZksyncEraTestnet',
  network: 'zksync',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#0000FF',
  nativeCurrency: {
  decimals: 18,
  name: 'ZksyncEraTestnet',
  symbol: 'ETH',
  },
  rpcUrls: {
  default: {
  http: ['https://testnet.era.zksync.dev'],
  },
  },
  blockExplorers: {
  default: { name: 'zksyncexplorer', url: 'https://goerli.explorer.zksync.io/' },
  etherscan: { name: 'zksyncexplorer', url: 'https://goerli.explorer.zksync.io/' },
  },
  testnet: false,
  };


const chains = [
  zksyncdev,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
];

const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#E1B88E',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
