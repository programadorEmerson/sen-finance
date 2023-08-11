import { useState } from 'react';

import WalletForm from '../WalletForm';
import CardValue from './CardValue';
import Modal from './Modal';
import { StyledHeader } from './style';

import ImagesEnum from '@/enums/images.enum';
import { TypeWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { calculateValues, calculateBalance, checkboxSelected } = useWalletContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <StyledHeader>
      <section className='container-menu'>
        <Modal isOpen={isModalOpen}>
          <WalletForm onClose={closeModal} />
        </Modal>
        <div className='container-logo'>
          <img src={ImagesEnum.LOGO} alt="Logo" />
          <span>Sen Finance</span>
        </div>
        <button type='button' onClick={() => openModal()}>Nova transação</button>
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
