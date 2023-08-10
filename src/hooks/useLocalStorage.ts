import { useEffect, useState } from 'react';

import { UserProps, WalletProps } from '@/@types/wallet.type';

type StorageProps = {
  user: UserProps;
  wallets: WalletProps[];
};

const INITIAL_VALUE: StorageProps = { wallets: [], user: null };

// A função useLocalStorage aceita uma chave (key) como entrada e retorna array com 5 elementos:
const useLocalStorage = (key: string): [
  // Elemento 1: O tipo de retorno da função useLocalStorage é um objeto com propriedades de armazenamento (user e wallets).
  StorageProps,

  // Elemento 2: Uma função para atualizar o usuário no armazenamento com base em um novo objeto UserProps.
  (user: UserProps) => void,

  // Elemento 3: Uma função para adicionar carteiras ao armazenamento com base em um array de objetos WalletProps.
  (wallets: WalletProps[]) => void,

  // Elemento 4: Uma função para remover uma carteira com base em um ID numérico.
  (id: number) => void,

  // Elemento 5: Uma função para restaurar o armazenamento para seus valores iniciais.
  () => void,
] => {
  const [storedValue, setStoredValue] = useState<StorageProps>(INITIAL_VALUE);

  const updateStorage = (value: StorageProps) => {
    localStorage.setItem(key, JSON.stringify(value));
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

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (item) {
      setStoredValue((prev) => {
        return { 
          ...prev, 
          ...JSON.parse(item), 
        };
      });
    }
  }, [key]);

  return [storedValue, updateUser, updateWallet, removeWallet, restoreStorage];
};

export default useLocalStorage;
