import CardValue from './CardValue';
import { StyledHeader } from './style';

import ImagesEnum from '@/enums/images.enum';
import { TypeWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';

const Header = () => {
  const { calculateValues, calculateBalance, checkboxSelected, user } = useWalletContext();
  
  return (
    <StyledHeader>
      <section className='container-menu'>
        <div className='container-logo'>
          <img src={ImagesEnum.LOGO} alt="Logo" />
          <span>Sen Finance</span>
        </div>
        <div>
          <span>
            {user?.email}
          </span>
        </div>
      </section>
      <section className='container-cards'>
        <CardValue 
          value={calculateValues(TypeWalletEnum.ENTRANCE)} 
          title={TypeWalletEnum.ENTRANCE}
          icon={ImagesEnum.ICON_UP} 
          chekedFilter={checkboxSelected.entrance}
        />
        <CardValue 
          value={calculateValues(TypeWalletEnum.EXIT)} 
          title={TypeWalletEnum.EXIT} 
          icon={ImagesEnum.ICON_DOWN}
          chekedFilter={checkboxSelected.exit} 
        />
        <CardValue 
          value={calculateBalance()} 
          title='Total' 
          icon={ImagesEnum.ICON_WALLET} 
        />
      </section>
    </StyledHeader>
  );
};

export default Header;
