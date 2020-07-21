import React, {Fragment, FC} from 'react';
import {IFormValues, ICountry} from '../screens/Form/types';
import TextField from '../elements/TextField';
import Select from '../elements/Select';

interface IErrors {
  ssn?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
}

interface IUserFormFields {
  values: IFormValues;
  countries: ICountry[];
  errors: IErrors;
  handleChange: (name: string, value: string) => void;
}

const UserFormFields: FC<IUserFormFields> = ({
  values,
  countries,
  errors,
  handleChange,
}) => {
  return (
    <Fragment>
      <TextField
        name="ssn"
        placeholder="Social security number"
        value={values.ssn}
        error={errors.ssn}
        handleChange={handleChange}
      />
      <TextField
        name="phoneNumber"
        placeholder="Phone number"
        value={values.phoneNumber}
        error={errors.phoneNumber}
        handleChange={handleChange}
      />
      <TextField
        name="email"
        placeholder="Email"
        value={values.email}
        error={errors.email}
        handleChange={handleChange}
      />
      <Select
        name="country"
        values={countries}
        value={values.country}
        error={errors.country}
        handleChange={handleChange}
      />
    </Fragment>
  );
};

export default UserFormFields;
