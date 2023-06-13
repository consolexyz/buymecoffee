import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {ZksyncEraTestnet} from "@thirdweb-dev/chains"



function MyApp({ Component, pageProps }) {
  return (
        <ThirdwebProvider activeChain={ZksyncEraTestnet}>
        <MoralisProvider initializeOnMount = {false}>
        <Component {...pageProps} />
        </MoralisProvider>
        </ThirdwebProvider>
  );
}

export default MyApp;
