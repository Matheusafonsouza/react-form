import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promos, setPromos] = useState(true);
  const [news, setNews] = useState(false);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({
        name,
        lastName,
        cpf,
        promos,
        news
      });
    }}>
      <TextField
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Sobrenome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='CPF'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        value={cpf}
        onChange={e => setCpf(e.target.value)}
      />

      <FormControlLabel
        label='Promoções'
        control={<Switch
          name='Promoções'
          color='primary'
          checked={promos}
          onChange={e => setPromos(e.target.checked)}
        />}
      />
      <FormControlLabel
        label='Promoções'
        control={<Switch
          name='Novidades'
          color='primary'
          checked={news}
          onChange={e => setNews(e.target.checked)}
        />}
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default RegisterForm;
