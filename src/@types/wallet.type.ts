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
    selectedFilter: string | null;
    selectedWallet: WalletProps | null;
    checkboxSelected: {entrance: boolean, exit: boolean}
    checkFilter: (type: TypeWalletEnum) => void;
    signout: () => void;
    calculateBalance: () => number;
    signin: (user: UserProps) => void;
    deleteWallet: (id: number) => void;
    selectWallet: (id: number) => void;
    newWallet: (wallet: WalletProps) => void;
    modifyWallet: (wallet: WalletProps) => void;
    calculateValues: (type: TypeWalletEnum) => number;
    handleSelectFilter: (type: string) => void;
};

export type { WalletProps, UserProps, WalletAppProps };
