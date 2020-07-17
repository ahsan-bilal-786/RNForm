import React, {Fragment, useEffect} from 'react';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useFormikContext} from 'formik';
import TextField from '../elements/TextField';
import Select from '../elements/Select';
import {countryList} from './initialValues';
import {initialValues} from '../screens/Form/initialValues';

const UserFormFields = () => {
  const {isValid, handleSubmit, values} = useFormikContext();

  useEffect(() => {
    const saveData = async () => {
      if (values !== initialValues) {
        await AsyncStorage.setItem('formValues', JSON.stringify(values));
      }
    };
    saveData();
  }, [values]);
  return (
    <Fragment>
      <TextField name="ssn" placeholder="Social security number" />
      <TextField name="phoneNumber" placeholder="Phone number" />
      <TextField name="email" placeholder="Email" />
      <Select name="country" values={countryList} />
      <Button title="Submit" disabled={!isValid} onPress={handleSubmit} />
    </Fragment>
  );
};

export default UserFormFields;
