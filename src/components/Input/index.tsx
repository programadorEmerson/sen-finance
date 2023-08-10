import { FC } from 'react';

import { StyledInput } from './styles';

type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    other?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputElement: FC<InputProps> = (props) => {
  const { type, placeholder, value, onChange, other = false } = props;
  return (
    <StyledInput 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      other={other}
    />
  );
};

export default InputElement;
