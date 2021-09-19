import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuAppBar from '../components/NavBar';

export default function ContainerB() {
  return (
    <React.Fragment>
        
    <MenuAppBar />
      <CssBaseline />
      <Container maxWidth="sl">
        <Typography component="div" style={{ backgroundColor: '#D3D3D3', height: '100vh', width: '100%', marginTop: '2vh' }} />
      </Container>
    </React.Fragment>
  );
}