import { serverURL } from "../../services/FetchDjangoApiServices";
import { useComponentStyles } from "./ComponentCss";
import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PaymentFooterComponent(props) {
  const classes = useComponentStyles();
  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));


  const payitems = [
    { id: '1', icon: 'f21.png' },
    { id: '2', icon: 'f22.png' },
    { id: '3', icon: 'f23.png' },
    { id: '4', icon: 'f24.png' },
    { id: '5', icon: 'f25.png' }
  ];

  

  const showAllPayItems = () => {
    return payitems.map((item) => (
      <div style={{ width: sm_matches ? '20%' : '20%', height: '20%', marginBottom: 1, backgroundColor: '#f2f2f2', margin:sm_matches? 2:5 }}>
        <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: sm_matches? 32:65, height: sm_matches?25:48 }} />
      </div>
    ));
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div style={{display: 'flex',flexWrap:'wrap'}}>
        <div style={{fontWeight:'bold',marginTop:sm_matches? 10:20,alignItems:'center',color:'#767676',fontSize:md_matches? 12:20}}>WE ACCEPT:</div>
          <div style={{ display: 'flex', justifyContent: 'center',marginTop:sm_matches? "2%":"1%" }}>
            {showAllPayItems()}
          </div>
        </div>
  
    </div>
  );
}
