import 'fontsource-roboto';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import RegisterForm from './components/RegisterForm/RegisterForm';

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
      <RegisterForm />
    </Container>
  );
}

export default App;
