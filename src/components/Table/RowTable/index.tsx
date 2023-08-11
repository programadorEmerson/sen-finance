import { FC } from 'react';

import { WalletProps } from '@/@types/wallet.type';
import ImagesEnum from '@/enums/images.enum';
import useWalletContext from '@/hooks/useWalletContext';
import numberFormatter from '@/utils/numberFormatter';
import { format } from 'date-fns';

type RowTableProps = {
    wallet: WalletProps
}

const RowTable: FC<RowTableProps> = ({ wallet }) => {
  const { createdAt, title, category, type, value } = wallet;

  const { deleteWallet, selectWallet } = useWalletContext();
  return (
    <div className="row-table">
      <div className="row-table__date">
        <span>{format(new Date(createdAt), 'dd/MM/yyyy')}</span>
      </div>
      <div className="row-table__title">
        <span>{title}</span>
      </div>
      <div className="row-table__value">
        <span style={{
          color: type === 'Entrada' ? '#00837E' : '#F75A68',
        }}>{numberFormatter(
            value,
            'currency',
          )}</span>
      </div>
      <div className="row-table__category">
        <span>{category}</span>
      </div>
      <div className="row-table__type">
        <span>{type}</span>
      </div>
      <div className="row-table__actions">
        <button onClick={() => selectWallet(wallet.id)} className="edit-button">
          <img src={ImagesEnum.ICON_EDIT} alt="" />
        </button>
        <button onClick={() => deleteWallet(wallet.id)} className="delete-button">
          <img src={ImagesEnum.ICON_DELETE} alt="" />
        </button>
      </div>
    </div>
  );
};

export default RowTable;
