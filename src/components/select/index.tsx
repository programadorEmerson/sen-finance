import { StyledInputSelect } from './styles';

import { CategoryWalletEnum, TypeWalletEnum } from '@/enums/wallet.enum';
import { FormikProps } from 'formik';

interface InputSelectProps<T> {
  formik: FormikProps<T>
  keyName: keyof T & string
  type: string;
  placeholder: string;
  mt: number;
  option: string;
  size?: string;
}

const InputSelect: <T>(props: InputSelectProps<T>) =>
  JSX.Element = (props) => {
    const typeValue = props.option === 'Entrada' ? TypeWalletEnum : CategoryWalletEnum;
    return (
      <StyledInputSelect
        name={props.keyName}
        value={String(props.formik.values[props.keyName])}
        onChange={props.formik.handleChange}
        style={{ width: props.size ?? '100%' }}
      >
        {Object.values(typeValue).map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </StyledInputSelect>
    );
  };

export default InputSelect;
