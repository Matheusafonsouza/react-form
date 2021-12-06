import 'fontsource-roboto';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import RegisterForm from './components/RegisterForm';

function App() {
  const handleRegisterformSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component='article' maxWidth='sm'>
      <Typography
        variant='h3'
        align='center'
        component='h1'
      >
        Formulário de cadastro
      </Typography>
      <RegisterForm onSubmit={handleRegisterformSubmit} />
    </Container>
  );
}

export default App;
