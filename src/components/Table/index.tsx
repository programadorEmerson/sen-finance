import WalletForm from '../WalletForm';
import FilterByCategory from './FilterCategory';
import RowTable from './RowTable';
import { StyledTableWallet } from './style';

import useWalletContext from '@/hooks/useWalletContext';

const TableWallets = () => {
  const { wallets } = useWalletContext();
  return (
    <StyledTableWallet>
      <FilterByCategory />
      <WalletForm />
      {
        wallets.map((wallet) => (
          <RowTable key={wallet.id} wallet={wallet} />
        ))
      }
    </StyledTableWallet>
  );
};

export default TableWallets;
