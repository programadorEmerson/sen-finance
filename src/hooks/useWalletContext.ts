import { useContext } from 'react';

import { WalletAppProps } from '@/@types/wallet.type';
import { WalletContext } from '@/context/wallet.context';

const useWalletContext = (): WalletAppProps => useContext(WalletContext);

export default useWalletContext;
