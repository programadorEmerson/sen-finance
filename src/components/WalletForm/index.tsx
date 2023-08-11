import { FC, useEffect } from 'react';

import InputElement from '@/components/Input';

import InputSelect from '../select';
import { StyledForm } from './styles';

import { WalletProps } from '@/@types/wallet.type';
import { CategoryWalletEnum, TypeWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

type WalletFormProps = {
    onClose: () => void;
};

type WalletForm = {
  title: string;
  type: string;
  category: string;
  value: number;
};

const initialValues: WalletForm = { 
  title: '',
  type: TypeWalletEnum.ENTRANCE,
  category: CategoryWalletEnum.OTHERS,
  value: 1,
};

const validationSchema = yup.object<WalletProps>({
  title: yup.string().required('Campo obrigatório'),
  type: yup.string().required('Campo obrigatório'),
  category: yup.string().required('Campo obrigatório'),
  value: yup.number().min(0.01, 'Informe o valor') .required('Campo obrigatório'),
});

const WalletForm:FC<WalletFormProps> = ({ onClose }) => {

  const { newWallet } = useWalletContext();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      const walletData = { ...values, id: 0, createdAt: new Date().toISOString() };
      newWallet(walletData as WalletProps);
      onClose();
    },
  });

  useEffect(() => {
    return () => {
      formik.resetForm();
    };
  }, []);

  return (
    <StyledForm onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
      <InputElement
        keyName='title'
        formik={formik}
        type='text'
        placeholder='Descrição'
        mt={0}
      />
      <InputSelect
        option="Entrada"
        keyName='category'
        formik={formik}
        type='text'
        placeholder='Categoria'
        mt={0}
      />
      <InputSelect
        option="Saída"
        keyName='type'
        formik={formik}
        type='text'
        placeholder='Option'
        mt={0}
      />
      <InputElement
        keyName='value'
        formik={formik}
        type='number'
        placeholder='Tipo'
        mt={0}
      />
      <button className='submit-button' type="submit">Submit</button>
      <button className='cancel-button' onClick={onClose} type="submit">Cancelar</button>
    </StyledForm>
  );
};

export default WalletForm;
