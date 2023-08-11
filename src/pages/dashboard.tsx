import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TableWallets from '@/components/Table';

import RoutesEnum from '@/enums/routes.enum';
import useWalletContext from '@/hooks/useWalletContext';
import { StyledMain } from '@/styles/pages/dashboard';

const Dashboard = () => {
  const { user  } = useWalletContext();
  const navgate = useNavigate();

  useEffect(() => {
    if (!user) navgate(RoutesEnum.SIGNIN);
  }, [user]);

  return (
    <StyledMain>
      <TableWallets />
    </StyledMain>
  );
};

export default Dashboard;
