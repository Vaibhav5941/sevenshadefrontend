import { serverURL } from "../../services/FetchDjangoApiServices"
import {useNavigate} from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function SubcategoryComponent2(props)
{   const navigate=useNavigate()

    const theme = useTheme();
    const md_matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

    var items=props.data
    const handleClick=(item)=>{
     navigate('/home2',{state:{products:item,pageview:'SubcategoryComponent2'}})
      
    }
    const showAllItems=()=>{
        console.log("sub 11",items)
        return items?.map((item)=>{
            return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', marginBottom:20,padding:10 }}>
                  <div>
                    <img src={`${serverURL}${item.icon}`} loading="lazy" style={{width:md_matches?350:450,height:md_matches?400:600}}/>
                    </div> 
                    <div style={{fontWeight:'bold',fontSize:18,letterSpacing:0.8,margin:5}}>
                        {`Trending Fashion for ${item.maincategoryname}` }
                    </div>
                     <button onClick={()=>handleClick(item)} style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(0, 0, 0)', background: 'rgb(255, 255, 255)', dataHoverColor: '#FFFFFF', dataHoverBackground: '#000000',fontWeight:700,fontSize:14,letterSpacing:1,margin:10,padding: '15px 30px', border: '1px solid black',borderBlockWidth:2  }}>
                     {`Shop Now`}
                    </button>
                    </div>

        })
    }
    return(<div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
    {showAllItems()}
    </div>)
}