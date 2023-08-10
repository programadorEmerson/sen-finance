import React, { createContext, useEffect, useState, useCallback } from 'react';

import { UserProps, WalletAppProps, WalletProps } from '@/@types/wallet.type';
import { TypeWalletEnum } from '@/enums/wallet.enum';
import useLocalStorage from '@/hooks/useLocalStorage';

const WalletContext = createContext({} as WalletAppProps);

function WalletProvider({ children }: { children: React.ReactNode }) {
  const [selectedWallet, setSelectedWallet] = useState<WalletProps | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<TypeWalletEnum | 'all'>('all');

  const [storedValue, updateUser, updateWallet, removeWallet, restoreStorage] = useLocalStorage('wallet');
  const wallets = storedValue.wallets;

  const newWallet = (wallet: WalletProps) => {
    const newWallets = [...wallets, wallet];
    updateWallet(newWallets);
  };

  const deleteWallet = (id: number) => {
    removeWallet(id);
  };

  const signin = (user: UserProps) => {
    updateUser(user);
  };

  const signout = () => {
    restoreStorage();
  };

  const selectWallet = (id: number) => {
    const wallet = wallets.find((wallet) => wallet.id === id)!;
    setSelectedWallet(wallet);
  };

  const calculateValues = useCallback((type: TypeWalletEnum): number => {
    return wallets.reduce((acc, wallet) => {
      return wallet.type === type ? acc + wallet.value : acc;
    }, 0);
  }, [wallets]);

  const calculateBalance = (): number => {
    const entrance = calculateValues(TypeWalletEnum.ENTRANCE);
    const exit = calculateValues(TypeWalletEnum.EXIT);
    return entrance - exit;
  };

  const handleSelectFilter = (type: TypeWalletEnum | 'all') => {
    setSelectedFilter(type);
  };

  const filterByType = useCallback(() => {
    switch (selectedFilter) {
    case TypeWalletEnum.ENTRANCE:
      return wallets.filter((wallet) => wallet.type === TypeWalletEnum.ENTRANCE);
    case TypeWalletEnum.EXIT:
      return wallets.filter((wallet) => wallet.type === TypeWalletEnum.EXIT);
    default:
      return wallets;
    }
  }, [selectedFilter, wallets]);

  useEffect(() => {
    const filteredWallets = filterByType();
    updateWallet(filteredWallets);
  }, [selectedFilter, filterByType]);

  const sharedState = {
    user: storedValue.user,
    wallets,
    signin,
    signout,
    newWallet,
    deleteWallet,
    selectWallet,
    selectedWallet,
    calculateValues,
    handleSelectFilter,
    calculateBalance,
  };

  return (
    <WalletContext.Provider value={sharedState}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
