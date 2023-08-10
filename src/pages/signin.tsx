import { useState } from 'react';

import InputElement from '@/components/Input';

import { StyledSignin } from '@/styles/pages/signin';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledSignin>
      <div className='image-signin' />
      <section className='container-signin'>
        <InputElement
          value={email}
          type='email'
          placeholder='Digite seu email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputElement
          value={password}
          type='password'
          placeholder='Digite sua senha'
          onChange={(event) => setPassword(event.target.value)}
          other
        />
        <button type='button'>Entrar</button>
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
      </section>
    </StyledSignin>
  );
};

export default Signin;
