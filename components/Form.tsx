import React, {Fragment, FC} from 'react';
import {IFormValues} from '../screens/Form/types';
import TextField from '../elements/TextField';
import Select from '../elements/Select';
import {countryList} from './initialValues';

interface IUserFormFields {
  values: IFormValues;
  handleChange: (name: string, value: string) => void;
}

const UserFormFields: FC<IUserFormFields> = ({values, handleChange}) => {
  return (
    <Fragment>
      <TextField
        name="ssn"
        placeholder="Social security number"
        value={values.ssn}
        handleChange={handleChange}
      />
      <TextField
        name="phoneNumber"
        placeholder="Phone number"
        value={values.phoneNumber}
        handleChange={handleChange}
      />
      <TextField
        name="email"
        placeholder="Email"
        value={values.email}
        handleChange={handleChange}
      />
      <Select
        name="country"
        values={countryList}
        value={values.country}
        handleChange={handleChange}
      />
    </Fragment>
  );
};

export default UserFormFields;
