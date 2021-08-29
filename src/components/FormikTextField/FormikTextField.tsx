import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { Field, FieldProps, getIn } from 'formik';
import * as React from 'react';

export function FormikTextField({
  name,
  error,
  helperText,
  ...rest
}: TextFieldProps) {
  const renderField = ({ field, form: { errors, touched } }: FieldProps) => {
    const fieldError = name && getIn(errors, name);
    const fieldTouched = name && getIn(touched, name);

    return (
      <TextField
        {...field}
        {...rest}
        name={name}
        error={error || (!!fieldError && !!fieldTouched)}
        helperText={
          helperText || (fieldError && fieldTouched ? fieldError : '')
        }
      />
    );
  };

  return <Field name={name}>{renderField}</Field>;
}
