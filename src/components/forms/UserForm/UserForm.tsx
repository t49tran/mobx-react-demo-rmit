import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { FormikTextField } from 'src/components/FormikTextField';
import { useFormStyles } from './styles';
import { IUser } from 'src/types/User';
import { Grid } from '@material-ui/core';

interface IUserFormProps {
  onSubmit: (data: any) => void;
  formRef: React.RefObject<any>;
  user?: IUser;
}

export const UserForm: React.FC<IUserFormProps> = ({
  onSubmit,
  formRef,
  user: { firstName = '', lastName = '', email = '' } = {}
}) => {
  const { field } = useFormStyles();
  const initialValues = React.useMemo(
    () => ({
      firstName,
      lastName,
      email,
      password: '',
      confirmPassword: ''
    }),
    [firstName, lastName, email]
  );

  const renderForm = useCallback(
    () => (
      <Form>
        <Grid container>
          <Grid item xs={12}>
            <FormikTextField
              className={field}
              name="firstName"
              label="First name"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              className={field}
              name="lastName"
              label="Last name"
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField className={field} name="email" label="Email" />
          </Grid>
        </Grid>
      </Form>
    ),
    [field]
  );

  return (
    <Formik
      innerRef={formRef as any}
      onSubmit={onSubmit}
      initialValues={initialValues}
      component={renderForm}
    />
  );
};
