import Header from "../components/Header"
import MyBag from "../components/MyBag"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { getData, serverURL } from "../../services/FetchDjangoApiServices"
import { useSelector } from "react-redux"
import SubcategoryComponent3 from "../components/SubcategoryComponent3"
export default function MyBagDisplay(props) {
  var product = useSelector(state => state.product)
  const [pageRefresh, setPageRefresh] = useState(false)
  var products = Object.values(product)
  console.log("products", products)
  return (<div style={{ position: 'relative', width: '100%' }}>
    <Header />

    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <div style={{ marginTop: 30, width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#ececec', paddingBottom: 10 }}>
        <MyBag data={products} pageRefresh={pageRefresh} setPageRefresh={setPageRefresh} />
      </div>

      <div style={{ borderTop: '1px solid #ececec', height: 20, margin: 0.1 }}></div>
      <div style={{ margin: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
        < SubcategoryComponent3 />
      </div>
      <div style={{ backgroundColor: '#ececec', width: '100%', display: 'flex', justifyContent: 'space-between', padding: 0, marginLeft: 0, marginRight: 0, }} >
        <Footer />
      </div>
    </div>
  </div>)

}