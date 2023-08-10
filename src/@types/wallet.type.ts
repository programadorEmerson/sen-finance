import { TypeWalletEnum, CategoryWalletEnum } from '@/enums/wallet.enum';

type WalletProps = { 
    id: number
    title: string
    type: TypeWalletEnum
    category: CategoryWalletEnum
    createdAt: string
    value: number
};

type UserProps = { email: string } | null;

type WalletAppProps = {
    user: UserProps;
    wallets: WalletProps[];
    selectedWallet: WalletProps | null;
    signout: () => void;
    calculateBalance: () => number;
    signin: (user: UserProps) => void;
    deleteWallet: (id: number) => void;
    selectWallet: (id: number) => void;
    newWallet: (wallet: WalletProps) => void;
    calculateValues: (type: TypeWalletEnum) => number;
    handleSelectFilter: (type: TypeWalletEnum | 'all') => void;
};

export type { WalletProps, UserProps, WalletAppProps };
