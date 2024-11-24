import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LoginHeader()
{var navigate=useNavigate()

    const handleSignIn=()=>{
        navigate('/signindisplay')
      }

      const handleJoin=()=>{
        navigate('/joinindisplay')
      }


      const theme = useTheme();
      const md_matches = useMediaQuery(theme.breakpoints.down('md'));
      const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));
    
      return( 
    <div>
    <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' }}>
    <div  onClick={handleJoin} style={{width:sm_matches?150:200, cursor:'pointer', display: 'flex',flexWrap:'wrap',padding: sm_matches?'1%':'2%', color: '#000', fontWeight: 'bold', fontSize:sm_matches?'2.3vh':'2.3vh', textAlign: 'center', justifyContent: 'center' }}>
      Join
    </div>
    <div style={{ borderLeft: '1px solid #ececec', height: '30px', margin: '0 10px' }}></div>
    <div  onClick={handleSignIn}   style={{cursor:'pointer', display: 'flex',flexWrap:'wrap', color: '#000', fontWeight: 'bold', fontSize:sm_matches?'2.3vh':'2.3vh', textAlign: 'center',justifyContent: 'center',width:200 }}>
      Sign in
    </div>
  </div>
  
  
      <hr style={{ width: '100%', borderTop: '1px solid #ececec', margin: '20px 0' }} />
      </div>
  )
}