import { StyledInput } from './styles';

import { FormikProps } from 'formik';

interface InputTextProps<T> {
  formik: FormikProps<T>
  keyName: keyof T & string
  type: string;
  placeholder: string;
  mt: number;
  size?: string;
}

const InputText: <T>(props: InputTextProps<T>) =>
  JSX.Element = (props) => {
    const hasError = props.formik.touched[props.keyName] && props.formik.errors[props.keyName];
    return (
      <StyledInput
        name={props.keyName}
        placeholder={props.placeholder}
        value={String(props.formik.values[props.keyName])}
        onChange={props.formik.handleChange}
        type={props.type}
        mt={props.mt}
        valid={hasError ? 'error' : 'valid'}
        style={{ width: props.size ?? '100%' }}
      />
    );
  };

export default InputText;
