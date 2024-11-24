import { serverURL } from "../../services/FetchDjangoApiServices";
import { useComponentStyles } from "./ComponentCss";
import { Grid } from "@mui/material";
import PlusMinusComponent from "./PlusMinusComponent";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MyBag(props) {
  const classes = useComponentStyles();
  const user=useSelector(state=>state.user)
  const userData=Object.values(user)
  var dispatch = useDispatch()
  const navigate=useNavigate()
  const items = props?.data

  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

  var totalamount = items?.reduce((item1, item2) => {
    var amt = item1 + (item2.price * item2.qty)
    return (amt)
  }, 0)

  var actualamount = items?.reduce((item1, item2) => {
    var amt = item1 + (item2.offerprice > 0 ? (item2.offerprice * item2.qty) : (item2.price * item2.qty))
    return (amt)
  }, 0)

  var saveamount = totalamount - actualamount

  console.log('CART DATA', items)
  const payitems = [
    { id: '1', icon: 'f21.png' },
    { id: '2', icon: 'f22.png' },
    { id: '3', icon: 'f23.png' },
    { id: '4', icon: 'f24.png' },
    { id: '5', icon: 'f25.png' }
  ];

  const handleChange = (v, product) => {
    // alert(v)
    product['qty'] = v
    if (v >= 1) {
      dispatch({ type: 'ADD_PRODUCT', payload: [product.id, product] })
    }
    else {
      dispatch({ type: 'DELETE_PRODUCT', payload: [product.id] })
    }
    props.setPageRefresh(!props.pageRefresh)

  }
  const showAllItems = () => {
    return items.map((item) => (
      <div className="cart_container" >
        <Grid container spacing={md_matches?0:2}>
          <Grid item xs={md_matches?2:3}>
            <div className="cart_item" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <img src={`${serverURL}/static/${item.icon.split(",")[0]}`} alt={item.description} loading="lazy" style={{ width:md_matches?'100%': '80%', height: '90%' }} />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="item-details" style={{ display: 'flex', flexDirection:md_matches?'column': 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'left' }}>
              <div>
                <div style={{ color: '#2d2d2d', fontSize:md_matches?'5vh':'1vw', fontWeight: 'bolder', letterSpacing:md_matches?2: 0.6 }}>{item?.productid?.productname}</div>
                <div style={{ color: '#2d2d2d', fontSize:sm_matches?"2.5vw":md_matches?'2vw':'1.5vh', fontWeight: 600, letterSpacing:md_matches?0.5: 0.6 }}>{item?.productsubname}</div>

                <div style={{ color: '#666', fontWeight: 'bold', marginTop: 12, fontSize:md_matches?12: 14 }}>
                  {item?.offerprice > 0 ?
                    <div style={{ width: '90%', display: 'flex', justifyContent: 'space-evenly' }} >

                      <span style={{ color: '#000' }}>&#8377;{item?.offerprice}</span>
                      <span><s>&#8377;{item?.price}</s></span>
                      <span style={{ color: '#000' }}>&#8377;{item?.offerprice * item.qty}</span>
                    </div>
                    :
                    <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between' }} >
                      <span>{item?.price}</span>
                      <span style={{ color: '#000' }}>&#8377;{item?.price * item.qty}</span>

                    </div>


                  }</div>

              </div>
              <div style={{ display: 'flex', alignItems: 'left', marginTop: '2%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <div style={{ fontSize:sm_matches?"2vw":md_matches?'2vw': '1vw', justifyContent: 'center' }}>COLOR</div>
                  <div style={{ borderLeft: '1px solid #ececec', height: 20, margin: 10, alignItems: 'center' }}></div>
                  <div style={{ fontSize:md_matches?'1vh': '1vw' }}>
                    <select style={{ width: 'auto', border: 'none',  fontSize:sm_matches?"2vw":md_matches?'2vw': '1vw', borderRadius: '3px', padding: '5%', height: 'auto', overflowY: 'scroll', maxHeight: '150px' }}>
                      <option>S</option>
                      <option data_testid="size-0">XS</option>
                      <option data_testid="size-1">S</option>
                      <option data_testid="size-2">M</option>
                      <option data_testid="size-3">L</option>
                      <option data_testid="size-4">XL</option>
                      <option data_testid="size-5">2XL</option>
                    </select>
                  </div>



                  <div style={{ marginTop: '7%' }}>
                    <PlusMinusComponent value={item.qty} onChange={(v) => handleChange(v, item)} />
                  </div>


                </div>
              </div>

            </div>

          </Grid>
        </Grid>
        <div style={{ borderLeft: '10px solid #ececec', width: '90%', margin: 10, alignItems: 'center' }}></div>
      </div>

    ));
  };
const handleCheckUser=()=>{
if(userData?.length>0)
  {navigate('/displaycheckout')}
else
{navigate('/signindisplay')}
}
  const showTotal = () => {
    return (
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "5%",
        }}
      >
        <div style={{}}>
          <div style={{ fontWeight:1000,fontSize:md_matches?'3vw':"1.5vw" }}>TOTAL</div>
          <hr
            style={{
              width: "100%",
              borderTop: "1px solid #ececec",
              margin:md_matches?'10px 0': "20px 0",
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontWeight: "bold", flex: "1", textAlign: "left",fontSize:md_matches?'2.5vw':"1.2vw" }}>
                Total Amount:
              </div>
              <div style={{ flex: "1", textAlign: "right",fontSize:md_matches?'2.5vw':"1.2vw" }}>&#8377;{totalamount}</div>
            </div>
  
            <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
              <div style={{ fontWeight: "bold", flex: "1", textAlign: "left",fontSize:md_matches?'2.5vw':"1.2vw" }}>
                Amount to Pay:
              </div>
              <div style={{ flex: "1", textAlign: "right",fontSize:md_matches?'2.5vw':"1.2vw" }}>&#8377;{actualamount}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
              <div style={{ fontWeight: "bold", flex: "1", textAlign: "left",fontSize:md_matches?'2.5vw':"1.2vw" }}>
                You Save:
              </div>
              <div style={{ flex: "1", textAlign: "right" ,fontSize:md_matches?'2.5vw':"1.2vw"}}>&#8377;{saveamount}</div>
            </div>
  
            <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
              <div style={{ fontWeight: "bold", flex: "1", textAlign: "left",fontSize:md_matches?'2.5vw':"1.2vw" }}>
                Delivery:
              </div>
              <div style={{ flex: "1", textAlign: "right",fontSize:md_matches?'2.5vw':"1.2vw" }}>&#8377;{0}</div>
            </div>
            <hr
              style={{
                width: "100%",
                borderTop: "1px solid #2d2d2d",
                margin:md_matches?'2px 0': "10px 0",
              }}
            />
            <div style={{ display: "flex", flexDirection: "row", marginTop:md_matches?2: 5 }}>
              <div style={{ fontWeight: "bold", flex: "1", textAlign: "left",fontSize:md_matches?'2.5vw':"1.2vw" }}>
                Net Amount:
              </div>

              <div style={{ flex: "1", textAlign: "right",fontSize:md_matches?'2.5vw':"1.2vw" }}>&#8377;{actualamount}</div>
            </div>
            
          </div>
          <hr
            style={{
              width: "100%",
              borderTop: "1px solid #2d2d2d",
              margin:md_matches?'2px 0': "10px 0",
            }}
          />
           <div
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              <button style={{ backgroundColor: '#018849', color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 16, paddingBlock: 4, justifyContent: 'space-evenly', paddingRight: 10, paddingLeft: 10, width: '100%', borderBlockColor: '#018849' }}onClick={handleCheckUser}>CHECKOUT</button>
            </div>
        </div>
      </div>
    );
  };

  const showAllPayItems = () => {
    return payitems.map((item) => (
      <div key={item.id} style={{ width: '30px', height: '20px', marginBottom: 1, backgroundColor: '#f2f2f2', margin: 5 }}>
        <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ));
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection:md_matches?'column':'column', alignItems: 'center', marginLeft:md_matches?'0%':'20%', marginRight:md_matches?'0%': '20%' }}>
      <Grid container spacing={md_matches?1:2} style={{ width: '100%' }}>
        <Grid item xs={md_matches?11:8}>
          <div style={{ marginTop:sm_matches?"2%": 10, marginBottom:sm_matches?5: 10, backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, padding:sm_matches?'5%':'0.8%' }}>
            <div style={{ fontWeight: 'bold', fontSize:sm_matches?'2.3vh': '2vw', marginLeft: '5%' }}>MY BAG</div>
            <div style={{ fontSize:sm_matches?'1.4vh': '1vw', marginRight: '5%' }}>Items are reserved for 60 minutes</div>
          </div>
          <div style={{ backgroundColor: 'white', width: '100%', marginTop: '2%', padding: '0.8%' }}>
            {showAllItems()}
          </div>
          <div style={{ marginTop:'2%', marginBottom: 10, backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:md_matches?'1%':'0.8%' }}>
            <div style={{  display: 'flex', flexDirection:'column', padding:md_matches?'0%':'3%' }}>
              <div style={{  display: 'flex', alignItems: 'center', marginTop:md_matches?"8%": "4%", marginBottom:md_matches?"8%": "4%" }}>
                <img src={`${serverURL}/static/deliverytruck.png`} loading="lazy" style={{ width:md_matches?'45%': "10%", height:md_matches?20: 25, objectFit: 'cover', marginTop: '2%',marginLeft:md_matches?10:0 }} />
                <div style={{ marginLeft:md_matches?'5%':'5%', fontWeight: 'bold', fontSize:md_matches?'1.2vh': '1.1vw' }}>FREE * STANDARD DELIVERY.</div>
              </div>
              <div style={{ marginLeft:md_matches?'15%': '14%', fontSize:md_matches?'1.2vh': '0.8vw', marginBottom:md_matches?'0%': '2%' }}>Faster delivery options available to most countries.</div>
              <div style={{ marginLeft: '14%', marginTop:md_matches?2: 5, fontSize:md_matches?'2.2vh': '0.8vw' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ textDecoration: 'underline', fontSize:md_matches?'1.2vh': '0.8vw' }}>More info</li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={md_matches?11:4}>
          <div style={{ backgroundColor: 'white', width:'100%', padding:md_matches?'5%':'5%', marginTop:sm_matches?'0%':'5%' }}>
            {showTotal()}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
