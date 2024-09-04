import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
// 1. Your WalletConnect Cloud project ID
const projectId = '5f1aa0a2ce5f89853d031a2cee29347a'

// 2. Create wagmiConfig
const metadata = {
  name: 'Deneme',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
   // Optional - Override createConfig parameters
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})
    
createRoot(document.getElementById('root')).render(
  <WagmiProvider config={config}>
  <StrictMode>
    <App />
  </StrictMode>
  </WagmiProvider>
)
