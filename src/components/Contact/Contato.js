import React, { useState } from 'react';
import './ContatoStyle.css';
import { TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Header from '../Header/Header';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setNome('');
    setEmail('');
    setMensagem('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Header />
      <div className="contato-wrapper">
        <div className="contato-container">
          <Typography variant="h4" component="h1" className="contato-titulo">
            Fale Conosco
          </Typography>
          <Typography variant="subtitle1" className="contato-descricao">
            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </Typography>
          <form onSubmit={handleSubmit} className="contato-form">
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="contato-input"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contato-input"
            />
            <TextField
              label="Mensagem"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="contato-input"
            />
            <Button
              type="submit"
              endIcon={<SendRoundedIcon />}
              className="contato-btn"
              style={{display:'flex', alignItems:'flex-start'}}
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Mensagem enviada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contato;