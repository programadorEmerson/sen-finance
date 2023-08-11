import { FC } from 'react';

import { StyledCardValue } from './styles';

import ImagesEnum from '@/enums/images.enum';
import { TypeWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';
import numberFormatter from '@/utils/numberFormatter';

type CardValueProps = {
    value: number;
    title: string;
    icon: ImagesEnum;
    chekedFilter?: boolean;
}

const CardValue: FC<CardValueProps> = ({ value, title, icon, chekedFilter = false }) => {
  const { checkFilter } = useWalletContext();
  const isEntrance = title === TypeWalletEnum.ENTRANCE;
  return (
    <StyledCardValue title={title}>
      <div className='header-card'>
        <span>{title}</span>
        <img src={icon} alt="Plus" />
      </div>
      <div className='value-card'>
        <span>{numberFormatter(
          value,
          'currency',
        )}</span>
      </div>
      {
        title !== 'Total' && (
          <div className='filter-values'>
            <span>
              {`Exibir ${title.toLowerCase()}s`}
            </span>
            <input 
              onChange={() => checkFilter(isEntrance ? TypeWalletEnum.ENTRANCE : TypeWalletEnum.EXIT)} 
              checked={chekedFilter} type="checkbox" 
              className="checkbox-input" 
            />
          </div>
        )
      }
    </StyledCardValue>
  );
};

export default CardValue;
