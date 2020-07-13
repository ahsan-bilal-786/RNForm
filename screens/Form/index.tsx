import React, {FC, Fragment} from 'react';
import {Button, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import TextField from '../../elements/TextField';

const initValues = {
  ssn: '',
  phoneNumber: '',
  email: '',
  country: '',
};

const validate = yup.object().shape({
  ssn: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().required(),
  country: yup.string().required(),
});

const UserForm: FC<any> = () => {
  return (
    <Formik
      initialValues={initValues}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={validate}>
      {(formikProps) => (
        <Fragment>
          <TextField name="ssn" placeholder="Social security number" />
          <TextField name="phoneNumber" placeholder="Phone number" />
          <TextField name="email" placeholder="Email" />
          <TextField name="country" placeholder="Country" />
          <Button
            title="Submit"
            disabled={!formikProps.isValid}
            onPress={formikProps.handleSubmit}
          />
        </Fragment>
      )}
    </Formik>
  );
};

export default UserForm;
