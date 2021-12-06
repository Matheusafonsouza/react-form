import React from 'react';
import ClientForm from './ClientForm';
import DeliveryForm from './DeliveryForm';
import UserForm from './Userform';

const RegisterForm = ({ onSubmit }) => {
  return (
    <>
      <ClientForm />
      <UserForm />
      <DeliveryForm />
    </>
  );
};

export default RegisterForm;
