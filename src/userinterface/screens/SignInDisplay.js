import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
 import { useState } from 'react';
 import { Grid } from "@mui/material";
import PaymentFooterComponent from '../components/PaymentFooterComponent';
import { serverURL } from "../../services/FetchDjangoApiServices"
import { useDispatch } from 'react-redux'; 
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postData } from '../../services/FetchDjangoApiServices';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
 
import LoginHeader from '../components/LoginHeader';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://sevenshades.com/">
        sevenshades.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.



const defaultTheme = createTheme();

export default function AdminLOgin() {

  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileno,setMobileNo]=useState('')  
  const [password,setPassword]=useState('') 
   var dispatch=useDispatch()
  var navigate=useNavigate()
  const handleSubmit = async() => {
    
    var body={mobile:mobileno,pwd:password}
    var result=await postData('check_user_login',body)
    if(result.status)
    {
    dispatch({type:'ADD_USER',payload:[mobileno,result.data[0]]})
      navigate('/')
    }
    else
     alert('Invalid Admin Id Password')

  
   
  };

  return (<div style={{backgroundColor:'#ececec',justifyContent:'center',padding:sm_matches?"2%":'1.5%'}}>
  <div style={{ display: 'flex', alignItems: 'center',paddingLeft:md_matches?'0%':'25%'}}>
  <Grid container spacing={2} style={{ alignItems: 'center' }}>
    <Grid item xs={12} md={8}>
    <div style={{ padding:md_matches?'5%':'2%',color:'#000',fontWeight:'bold',justifyContent:'center',textAlign:'center',fontSize:md_matches?"5vh":'3vw',fontFamily: "League Gothic",letterSpacing: 1 }}>
      
    SevenShades<div style={{fontSize:md_matches?'3vh':'1.5vw'}}>CHECKOUT</div></div>
    <div style={{width:'100%',backgroundColor:'white',padding:sm_matches?"5%":'2%'}}>
    <ThemeProvider theme={defaultTheme}>
      <Container   maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop:sm_matches?"2%":"8%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
        <LoginHeader />
          
          <Box  sx={{ mt: 1 }}>
          <label style={{ width: '100%', fontWeight:'bold'}}>MOBILE NUMBER :</label>
            <TextField
              margin="normal"
              
              fullWidth
              id="mobileno"
              name="mobileno"
              autoComplete="mobileno"
              autoFocus
              onChange={(e)=>setMobileNo(e.target.value)}
            />
            <label style={{ width: '100%', fontWeight:'bold'}}>PASSWORD :</label>
            <TextField
              margin="normal"
              
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            
            <Button
              style={{backgroundColor:'black',
              color:'white',
              fontWeight:'bold'}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:sm_matches?'2.3vh': '2vh',marginTop:sm_matches?'5%':'5%'}}>OR SIGN IN WITH ....</div>
<div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center',marginTop:sm_matches?'10%':'10%'}}>
    <button style={{width:sm_matches?'30%': '30%', margin:sm_matches?'0%':'4%', backgroundColor:'white', display: 'flex', alignItems: 'center',border:sm_matches?'solid 1px #ddd':'solid 2px #ddd'}}>
        <img src={`${serverURL}/static/google.webp`} loading="lazy" style={{ width: 30, height: 30 }}/>
        <span style={{marginLeft:md_matches?"2px": '8px'}}>GOOGLE</span>
    </button>
    <button style={{width:sm_matches?'30%': '30%',margin:sm_matches?'0%':'4%', backgroundColor:'white', display: 'flex', alignItems: 'center',border:sm_matches?'solid 1px #ddd':'solid 2px #ddd'}}>
        <img src={`${serverURL}/static/apple.png`} loading="lazy" style={{ width: 30, height: 30 }}/>
        <span style={{marginLeft:md_matches?"2px": '8px'}}>APPLE</span>
    </button>
    <button style={{width:sm_matches?'35%': '40%',margin:sm_matches?'0%':'4%', backgroundColor:'white', display: 'flex', alignItems: 'center',border:sm_matches?'solid 1px #ddd':'solid 2px #ddd'}}>
        <img src={`${serverURL}/static/facebook.png`} loading="lazy" style={{ width: 30, height: 30 }}/>
        <span style={{marginLeft:md_matches?"2px": '8px'}}>FACEBOOK</span>
    </button>
</div>


          </Box>
        </Box>
        <Copyright sx={{ mt:sm_matches?5: 2, mb: 4 }} />
        
      </Container>
      

    </ThemeProvider>
    
    </div>
    </Grid>
    </Grid>
    </div>
    <div style={{ display: 'flex', marginTop: 30, width: '98%', display: 'flex', justifyContent: 'center',backgroundColor:'white' }}>
          <PaymentFooterComponent />
        </div>
    
    
        
    
  </div>);
}