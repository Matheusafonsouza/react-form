import React, { useCallback, useContext, useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import SignInValidations from '../../context/validations';
import useErrors from '../../hooks/useErrors';

const ClientForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promos, setPromos] = useState(true);
  const [news, setNews] = useState(false);

  const validations = useContext(SignInValidations);
  const [errors, validateErrors] = useErrors(validations);

  const canSubmit = useCallback(() => {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
      return true;
    }
  }, [errors]);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (canSubmit()) {
        onSubmit({
          name,
          lastName,
          cpf,
          promos,
          news
        });
      }
    }}>
      <TextField
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        type='text'
        name='name'
        margin='normal'
        fullWidth
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Sobrenome'
        variant='outlined'
        name='lastName'
        type='text'
        margin='normal'
        fullWidth
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='CPF'
        name='cpf'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        required
        onBlur={validateErrors}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
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
        Próximo
      </Button>
    </form>
  );
};

export default ClientForm;
