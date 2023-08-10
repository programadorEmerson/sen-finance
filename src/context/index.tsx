import { ReactNode } from 'react';

import { WalletProvider } from '@/context/wallet.context';

/**
 * Componente que envolve a aplicação com os provedores necessários.
 * @param children Os componentes filhos a serem envolvidos pelos provedores.
 */
const ProvidersApp = ({ children }: { children: ReactNode }) => {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  );
};

export default ProvidersApp;
