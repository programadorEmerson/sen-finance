import { useNavigate } from 'react-router-dom';

import InputElement from '@/components/Input';

import RoutesEnum from '@/enums/routes.enum';
import useWalletContext from '@/hooks/useWalletContext';
import { StyledSignin } from '@/styles/pages/signin';
import { useFormik } from 'formik';
import * as yup from 'yup';

export type InicialValuesProps = {
  email: string;
  password: string;
};

const initialValues: InicialValuesProps = { email: '', password: '' };

const validationSchema = yup.object<InicialValuesProps>({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const Signin = () => {

  const { signin } = useWalletContext();
  const navgate = useNavigate();
  
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: async ({ email }) => {
      signin({ email });
      navgate(RoutesEnum.DASHBOARD);
    },
  });

  return (
    <StyledSignin>
      <div className='image-signin' />
      <form className='container-signin' onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
        <InputElement
          keyName='email'
          formik={formik}
          type='email'
          placeholder='Digite seu email'
          mt={0}
        />
        <InputElement
          keyName='password'
          type='password'
          placeholder='Digite sua senha'
          formik={formik}
          mt={20}
        />
        <button type='submit'>Entrar</button>
        <section className='actions'>
          <div>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span>Lembrar de mim</span>
            </label>
          </div>
          <div className='forgot'>
            <a href='#'>Forgot password?</a>
          </div>
        </section>
      </form>
    </StyledSignin>
  );
};

export default Signin;
