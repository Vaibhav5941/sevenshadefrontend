import Header from "../components/Header"
import SubcategoryComponent3 from "../components/SubcategoryComponent3"
import Footer from "../components/Footer"
import { useState, useEffect } from 'react'
import { postData, serverURL } from "../../services/FetchDjangoApiServices"
import ProductDetailComponent from "../components/ProductDetailComponent"
import YouMightAlsoLikeComponent from "../components/YouMightAlsoLikeComponent"
import StyleItWithComponent from "../components/StyleItWithComponent"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import RecentlyViewedComponent from "../components/RecentlyViewedComponent"
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom"
export default function Home2(props) {
  var location = useLocation()
  var productid = location.state.productid
  const [productList, setProductList] = useState([])
  const [pageRefresh, setPageRefresh] = useState(false)

  var fetchAllProducts=async()=>{

    var result = await postData('user_productsdetails_by_id', { productid: productid })
    console.log("PRODUCTS:", result)

    setProductList(result.data)
  }

  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(function () {
    fetchAllProducts()
  }, [])
  return (
    <div style={{ width: '100%', justifyContent: 'center' }}>
      <Header />

      <div style={{ display: 'flex', width:md_matches?"98%":'80%', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', marginTop: 30, width: '98%', display: 'flex', marginLeft:md_matches?'0%':'40%', justifyContent: 'center' }}>
          <ProductDetailComponent pageRefresh={pageRefresh} setPageRefresh={setPageRefresh} productList={productList} />
        </div>
        
        <Grid container spacing={sm_matches?2:2} item xs={sm_matches?12:12}>
          <Grid container spacing={sm_matches?2:2} item xs={sm_matches?10:10}>
            <div style={{ borderTop: '1px solid #ececec', width:md_matches?'90%':'100%', margin:md_matches?0: 0.5 }}></div>

            <div style={{ display: 'flex', marginTop: 30, width: '90%', display: 'flex', margin:md_matches?0: 30, justifyContent:md_matches?"left": 'center' }}>
              <YouMightAlsoLikeComponent />
            </div>
            <div style={{ display: 'flex', marginTop: 30, width: '90%', display: 'flex', margin:md_matches?0: 30, justifyContent: 'center' }}>
              <StyleItWithComponent />
            </div>
            <div style={{ display: 'flex', marginTop: 30, width: '90%', display: 'flex', margin:md_matches?0: 30, justifyContent: 'center', marginLeft:md_matches?'15%': '30%' }}>
              <RecentlyViewedComponent />
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{marginBottom:10, width:'100%',display:'flex',justifyContent:'center'}}>
             <SubcategoryComponent3/>
        </div>
      <div style={{ backgroundColor: '#ececec', width: '100%', display: 'flex', justifyContent: 'space-between', padding: 0, marginLeft: 0, marginRight: 0 }} >
        <Footer />
      </div>
    </div>
  );
}

/* 
export default function ProductsHome(props)
{
    return(<div style={{position:'relative',width:'100%',justifyContent:'center',maxWidth:1200}}>
     <Header />    
     <div style={{display:'flex',width:'99%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{display: 'flex',marginTop:30,width:'90%',display:'flex',margin:30,justifyContent:'center'}}>
     <ProductDetailPage />
    </div>
    <div style={{ borderTop:'1px solid #ececec', height:20, margin:0.1 }}></div>
    <div style={{margin:10,width:'100%',display:'flex',justifyContent:'center'}}>
     <Footer />
    </div>
    <div style={{backgroundColor: '#ececec',width:'100%',display:'flex',justifyContent:'space-between',padding:0,marginLeft:0,marginRight:0}} >
     <Bottom />
    </div>
    </div>
    </div>)*/