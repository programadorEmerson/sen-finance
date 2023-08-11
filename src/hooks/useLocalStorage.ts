import { useState } from 'react';

import { UserProps, WalletProps } from '@/@types/wallet.type';

type StorageProps = {
  user: UserProps;
  wallets: WalletProps[];
};

const INITIAL_VALUE: StorageProps = { wallets: [], user: null };

const useLocalStorage = (key: string): [
  StorageProps,
  (user: UserProps) => void,
  (wallets: WalletProps[]) => void,
  (id: number) => void,
  () => void,
  (wallet: WalletProps) => void,
] => {
  const [storedValue, setStoredValue] = useState<StorageProps>(() =>{
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return INITIAL_VALUE;
  });

  const updateStorage = (value: StorageProps) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const createWallet = (wallet: WalletProps) => {
    const hasWallet = storedValue.wallets.length > 0;
    const newId = hasWallet ? storedValue.wallets[storedValue.wallets.length - 1].id + 1 : 1;
    const updatedWallet = { ...storedValue, wallets: [...storedValue.wallets, { ...wallet, id: newId }] };
    updateStorage(updatedWallet);
    setStoredValue(updatedWallet);
  };

  const updateValue = (updates: Partial<StorageProps>) => {
    const updatedValue = {
      ...storedValue,
      ...updates,
    };
    updateStorage(updatedValue);
    setStoredValue(updatedValue);
  };

  const updateUser = (user: UserProps) => {
    updateValue({ user });
  };

  const updateWallet = (wallets: WalletProps[]) => {
    updateValue({ wallets: [...storedValue.wallets, ...wallets] });
  };

  const removeWallet = (id: number) => {
    updateValue({
      wallets: storedValue.wallets.filter((wallet) => wallet.id !== id),
    });
  };

  const restoreStorage = () => {
    updateValue(INITIAL_VALUE);
  };

  return [storedValue, updateUser, updateWallet, removeWallet, restoreStorage, createWallet];
};

export default useLocalStorage;
