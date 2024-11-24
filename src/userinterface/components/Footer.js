import { serverURL } from "../../services/FetchDjangoApiServices"
import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Bottom(props) {
  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));


  var bottomitems = [{ id: '1', headingname: 'HELP & INFORMATION', subheadingname: ["Help", "Track order", "Delivery & returns", "Sitemap"] },
  { id: '2', headingname: 'ABOUT ASOS', subheadingname: ["About us", "Careers at ASOS", "Corporate responsibility", "Investors' site"] },
  { id: '3', headingname: 'MORE FROM ASOS', subheadingname: ["Mobile and ASOS apps", "ASOS Marketplace", "Gift vouchers", "Black Friday", "ASOS x Thrift+", "Discover the ASOS Credit Card", "Help Improve the ASOS Website"] },]

  var countryitems = [{ id: '1', icon: 'c1.png' },
  { id: '2', icon: 'c2.png' },
  { id: '3', icon: 'c3.png' },
  { id: '4', icon: 'c4.png' },
  { id: '5', icon: 'c5.png' },
  { id: '6', icon: 'c6.png' },
  { id: '7', icon: 'c7.png' },
  { id: '8', icon: 'c8.png' },
  { id: '9', icon: 'c9.png' },
  { id: '10', icon: 'c10.png' }]

  const showAllBottomItems = () => {
    return (<div style={{ display: "flex", justifyContent: 'space-between', paddingTop: 10, flexWrap: md_matches ? 'wrap' : 'nowrap' }} >
      <Grid item xs={12} container spacing={sm_matches?8:md_matches ? 10 : 15} width='100%'>
        {bottomitems?.map((item) => (
          <Grid item xs={6} sm={6} md={3} >
            <div style={{ color: "#666", fontSize:sm_matches?"3vw": md_matches ? "2vw" : 14, fontWeight: 'bold', marginBottom: md_matches ? 5 : 10 }}>{item.headingname}</div>
            <ul style={{ listStyleType: 'none', padding: 0, color: "#767676", fontSize:sm_matches?"2.5vw": md_matches ? "2vw" : "0.9vw", marginBottom: 10 }}>
              {item?.subheadingname?.map((subitem) => (
                <li style={{ marginBottom: md_matches ? 2 : 5 }}>{subitem}</li>
              ))}
            </ul>
          </Grid>
        ))}
        <Grid item xs={md_matches ? 6 : 3}>
          <div style={{ color: "#666",  fontSize:sm_matches?"3vw": md_matches ? "2vw" : 14, fontWeight: 'bold', marginBottom: 10 }}>SHOPPING FROM:</div>
          <div style={{ color: "#767676", marginBottom: md_matches ? 1 : 10,fontSize:sm_matches?"2.5vw": md_matches ? "2vw" : "0.9vw" }}>You're in <img src={`${serverURL}/static/c0.png`} loading="lazy" style={{ width: md_matches ? 8 : 20, height: md_matches ? 8 : 20, objectFit: 'cover' }} />| CHANGE</div>
          <div style={{ color: "#767676", marginBottom: md_matches ? 1 : 10,fontSize:sm_matches?"2.5vw": md_matches ? "2vw" : "0.9vw"}}>Some of our international sites:</div>
          <div style={{ display: 'flex', alignItems: 'center',flexWrap: 'wrap',  marginBottom: md_matches ? "10%" : 20 }}>
            {showAllCountryItems()}
          </div>
        </Grid>
      </Grid>
    </div>
    )
  }

  const showAllCountryItems = () => {
    return countryitems?.map((item) => (
      <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  marginRight: sm_matches ? 1 : md_matches ? 3 : 5 }}>
        <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width:sm_matches?8: md_matches ? 8: 20, height:sm_matches?8: md_matches ? 8 : 20, objectFit: 'cover' }} />
      </div>
    ))
  }



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '95%', padding: sm_matches ? 5 : md_matches ? 10 : 30 }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-evenly", width: '100%', backgroundColor: '#ececec', padding: sm_matches ? "5%" : md_matches ? 15 : 10 }}>
          {showAllBottomItems()}
        </div>
      </div>
    </div>
  )
}