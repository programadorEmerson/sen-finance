/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useCallback, useEffect } from 'react';

import { UserProps, WalletAppProps, WalletProps } from '@/@types/wallet.type';
import { TypeWalletEnum } from '@/enums/wallet.enum';
import useLocalStorage from '@/hooks/useLocalStorage';

const WalletContext = createContext({} as WalletAppProps);

function WalletProvider({ children }: { children: React.ReactNode }) {
  const [selectedWallet, setSelectedWallet] = useState<WalletProps | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [wallets, setWallets] = useState<WalletProps[]>([]);
  const [checkboxSelected, setCheckboxSelected] = useState<{entrance: boolean, exit: boolean}>({
    entrance: true,
    exit: true,
  });

  const [storedValue, updateUser, _updateWallet, removeWallet, restoreStorage, createWallet] = useLocalStorage('wallet');

  const checkFilter = useCallback((type: TypeWalletEnum) => {
    if (type === TypeWalletEnum.ENTRANCE) {
      setCheckboxSelected((prev) => {
        return { ...prev, entrance: !prev.entrance };
      });
    } else {
      setCheckboxSelected((prev) => {
        return { ...prev, exit: !prev.exit };
      });
    }
  }, []);

  const newWallet = (wallet: WalletProps) => {
    createWallet(wallet);
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

  const handleSelectFilter = (type: string) => {
    setSelectedFilter(type === 'Todos' ? null : type);
  };

  const filterByType = useCallback((wallets: WalletProps[]) => {
    if (checkboxSelected.entrance && checkboxSelected.exit) {
      return wallets;
    } else if (checkboxSelected.entrance && !checkboxSelected.exit) {
      return wallets.filter((wallet) => wallet.type !== TypeWalletEnum.EXIT);
    } else if (!checkboxSelected.entrance && checkboxSelected.exit) {
      return wallets.filter((wallet) => wallet.type !== TypeWalletEnum.ENTRANCE);
    } else {
      return [];
    }
  }, [checkboxSelected]);

  useEffect(() => {
    // newWallet({
    //   id: 1,
    //   title: 'Salário Mes 06/2023',
    //   category: CategoryWalletEnum.FOOD,
    //   type: TypeWalletEnum.ENTRANCE,
    //   value: 10350.48,
    //   createdAt: new Date().toISOString(),
    // });
    // newWallet({
    //   id: 1,
    //   title: 'Pagamento de pacela do carro',
    //   category: CategoryWalletEnum.FOOD,
    //   type: TypeWalletEnum.EXIT,
    //   value: 350.35,
    //   createdAt: new Date().toISOString(),
    // });
    // newWallet({
    //   id: 1,
    //   title: 'Freela desenvolvimento',
    //   category: CategoryWalletEnum.OTHERS,
    //   type: TypeWalletEnum.ENTRANCE,
    //   value: 1550.98,
    //   createdAt: new Date().toISOString(),
    // });
    // newWallet({
    //   id: 1,
    //   title: 'Saidinha com a Elaine',
    //   category: CategoryWalletEnum.HEALTH,
    //   type: TypeWalletEnum.EXIT,
    //   value: 100.48,
    //   createdAt: new Date().toISOString(),
    // });
  }, []);

  useEffect(() => {
    let filtered = filterByType(storedValue.wallets);
    if (selectedFilter) {
      filtered = filtered.filter((wallet) =>
        wallet.category === selectedFilter,
      );
    }
    setWallets(filtered);
  }, [checkboxSelected, selectedFilter, storedValue]);

  const sharedState = {
    user: storedValue.user,
    selectedFilter,
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
    checkboxSelected,
    checkFilter,
  };

  return (
    <WalletContext.Provider value={sharedState}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
