export interface IFormValues {
  ssn: string;
  phoneNumber: string;
  email: string;
  country: string;
}

export interface IUserForm {
  userDetails: IFormValues;
  loadUserData: () => void;
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
}
