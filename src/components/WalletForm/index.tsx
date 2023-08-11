import { FC, useEffect } from 'react';

import InputElement from '@/components/Input';

import InputSelect from '../select';
import { StyledForm } from './styles';

import { WalletProps } from '@/@types/wallet.type';
import { CategoryWalletEnum, TypeWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const WalletForm:FC = () => {

  const { newWallet } = useWalletContext();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      const walletData = { ...values, id: 0, createdAt: new Date().toISOString() };
      newWallet(walletData as WalletProps);
      formik.resetForm();
    },
  });

  useEffect(() => {
    return () => {
      formik.resetForm();
    };
  }, []);

  return (
    <StyledForm onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
      <div className='content-form'>
        <span>
          - Incluir novo registro
        </span>
        <InputElement
          keyName='title'
          formik={formik}
          type='text'
          placeholder='Descrição'
          mt={0}
          size='35%'
        />
        <div style={{ width: '15%', marginTop: '-3px' }}>
          <InputSelect
            option="Entrada"
            keyName='type'
            formik={formik}
            type='text'
            placeholder='Categoria'
            mt={0}
            size='100%'
          />
        </div>
        <div style={{ width: '15%', marginTop: '-3px' }}>
          <InputSelect
            option="Saída"
            keyName='category'
            formik={formik}
            type='text'
            placeholder='Option'
            mt={0}
            size='100%'
          />
        </div>
        <InputElement
          keyName='value'
          formik={formik}
          type='number'
          placeholder='Tipo'
          mt={0}
          size='10%'
        />
        <button style={{ width: '25%' }} className='submit-button' type="submit">Adicionar despesa</button>
      </div>
    </StyledForm>
  );
};

export default WalletForm;
