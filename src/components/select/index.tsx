import { StyledInput } from './styles';

import { CategoryWalletEnum, TypeWalletEnum } from '@/enums/wallet.enum';
import { FormikProps } from 'formik';

interface InputTextProps<T> {
  formik: FormikProps<T>
  keyName: keyof T & string
  type: string;
  placeholder: string;
  mt: number;
  option: string;
}

const InputSelect: <T>(props: InputTextProps<T>) =>
  JSX.Element = (props) => {
    const typeValue = props.option !== 'Entrada' ? CategoryWalletEnum : TypeWalletEnum;
    return (
      <StyledInput
        name={props.keyName}
        value={String(props.formik.values[props.keyName])}
        onChange={props.formik.handleChange}
      >
        {Object.values(typeValue).map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </StyledInput>
    );
  };

export default InputSelect;
