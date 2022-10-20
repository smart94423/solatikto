import "../styles/globals.css";
import dyanmic from "next/dynamic";
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  const WalletConnectionProvider = dyanmic(
    () => import ('../context/WalletConnectionProvider'),
    { ssr: false },
  )

  return (
  <WalletConnectionProvider>
     <Component {...pageProps} />
  </WalletConnectionProvider>
  )
}

export default MyApp
