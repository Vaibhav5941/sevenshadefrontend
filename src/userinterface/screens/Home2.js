import Header from "../components/Header"
import Footer from "../components/Footer"
import SubSubcategoryComponent from '../components/SubSubcategoryComponent'
import { useLocation } from "react-router-dom"
import { postData } from "../../services/FetchDjangoApiServices"
import { useEffect, useState } from "react"
import SubcategoryComponent3 from "../components/SubcategoryComponent3"
export default function Home2(props) {
    var location = useLocation()
    console.log('LLOOCCAATTTION:', location)
    const [productList, setProductList] = useState([])
    var pageview = location.state.pageview
    var products = location.state.products
    const setPageView = async () => {

        if (pageview == 'SubcategoryComponent2') {
            var result = await postData('user_products_maincategory', { maincategoryid: products.id })
            console.log("RRRRESSS:", result)
            setProductList(result.data)
        }
    }
    useEffect(function () {
        setPageView()
    }, [])

    return (<div style={{ width: '100%', justifyContent: 'center' }}>
        <Header />
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginTop:"3%", width: '98%', display: 'flex', justifyContent: 'center' }}>
                <SubSubcategoryComponent category={products?.maincategoryname} data={productList} />
            </div>
            <div style={{marginBottom:10, width:'60%',display:'flex',justifyContent:'center'}}>
             <SubcategoryComponent3/>
        </div>
            <div style={{ backgroundColor: '#ececec', width: '100%', display: 'flex', justifyContent: 'space-between' }} >
                <Footer />
            </div>
        </div>
    </div>)

}