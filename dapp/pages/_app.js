import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';


// const zksyncdev = {
//   id: 280,
//   name: 'ZksyncEraTestnet',
//   network: 'zksync',
//   iconUrl: 'https://example.com/icon.svg',
//   iconBackground: '#0000FF',
//   nativeCurrency: {
//   decimals: 18,
//   name: 'ZksyncEraTestnet',
//   symbol: 'ETH',
//   },
//   rpcUrls: {
//   default: {
//   http: ['https://testnet.era.zksync.dev'],
//   },
//   },
//   blockExplorers: {
//   default: { name: 'zksyncexplorer', url: 'https://goerli.explorer.zksync.io/' },
//   etherscan: { name: 'zksyncexplorer', url: 'https://goerli.explorer.zksync.io/' },
//   },
//   testnet: false,
//   };


// const chains = [
//   zksyncdev,
//   ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
// ];

// const { provider, webSocketProvider } = configureChains(chains, [
//   publicProvider(),
// ]);

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit App',
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
//   webSocketProvider,
// });

function MyApp({ Component, pageProps }) {
  return (
        <MoralisProvider initializeOnMount = {false}>
        <Component {...pageProps} />
        </MoralisProvider>
  );
}

export default MyApp;
