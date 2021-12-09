import 'fontsource-roboto';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import RegisterForm from './components/RegisterForm';
import SignInValidations from './context/validations';
import { validateCpf } from './models/signInValidations';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography
        variant='h3'
        align='center'
        component='h1'
      >
        Formulário de cadastro
      </Typography>
      <SignInValidations.Provider value={{
        cpf: validateCpf
      }}>
        <RegisterForm />
      </SignInValidations.Provider>
    </Container>
  );
}

export default App;
