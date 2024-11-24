import Product from "../../administrator/screens/Product"
import { serverURL } from "../../services/FetchDjangoApiServices"
import { useNavigate } from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function SubSubcategoryComponent(props) {
  const navigate = useNavigate()
  var items = props?.data
  const handleNextPage = (item) => {
    navigate('/productdetaildisplay', { state: { productid: item.id } })

  }
   
  const theme = useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));


  const showAllItems = () => {
    return items?.map((item) => {
      return <div style={{ cursor: 'pointer', display: 'flex', flexDirection:'column', justifyContent:'center', margin:sm_matches?'0px':'3px', flexWrap: 'wrap', maxWidth: sm_matches? '50%' : '300px', boxShadow:sm_matches?"none": '0 4px 8px 0 rgba(0, 0, 0, 0.2)' , padding:sm_matches?"none": '10px',borderRadius:sm_matches?"none": '8px', 
        backgroundColor:sm_matches?"none": '#fff',}} onClick={() => handleNextPage(item)}>
        <div>
          <img src={`${serverURL}${item.icon}`} loading="lazy" style={{  width: sm_matches? '100%' : "100%", height: sm_matches? '100%' : "100%", }} alt={item.subsubcategoryname} />
        </div>
        <div style={{ fontSize: sm_matches? "100%":16, letterSpacing: 0.5, flexDirection: 'column', textAlign:sm_matches?"center": 'center', marginTop:sm_matches?"1%":'1px', marginBottom:sm_matches?"30px": '20px' }}>
          {item.productname}
        </div>
        <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: 0.5, textAlign: 'left', color: '#d01345' }}>
          {//item.price 
          }
        </div>
      </div>

    })
  }

  const dd = [
    { id: '1', ddname: 'Sort', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '2', ddname: 'Category', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '3', ddname: 'Product Type', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '4', ddname: 'Style', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '5', ddname: 'Brand', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '6', ddname: 'Color', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '7', ddname: 'Bodyfit', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '8', ddname: 'Size', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] },
    { id: '9', ddname: 'Price Range', ddmenu: ['Recommended', "What's New", 'Price High to Low', 'Price Low to High'] }
  ];

  const showDropDowns = () => {
    return dd.map((ddown) => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', backgroundColor: '#ececec', flexWrap: 'wrap'}}>
        <select
          style={{ width: '200px', fontSize: '16px', color: "#666", backgroundColor: '#ececec', border: '1px solid #ccc', borderRadius: '4px', padding: '6px 10px' }}
        >
          <option>{ddown.ddname}</option>
          {ddown.ddmenu.map((menuOption) => (
            <option>{menuOption}</option>
          ))}
        </select>
      </div>
    ));
  };
  return (<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 30, letterSpacing: 1, margin: 20 }}>
      New in:{props?.category}
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', backgroundColor: '#ececec', padding: 10, paddingLeft: 120, paddingRight: 70 }}>
      {showDropDowns()}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin:sm_matches?"1%":"4%", justifyContent: 'space-between', width: '100%' }}>
      {showAllItems()
      }
    </div>
  </div>)


}