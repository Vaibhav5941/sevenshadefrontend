import Slider from "react-slick"
import Header from "../components/Header"
import { useState, useEffect } from "react"
import { getData } from "../../services/FetchDjangoApiServices"
import SubCategoryComponent from "../components/SubcategoryComponent"
import SubCategoryComponent1 from "../components/SubcategoryComponent1"
import SubCategoryComponent2 from "../components/SubcategoryComponent2"
import SubCategoryComponent3 from "../components/SubcategoryComponent3"
import Footer from "../components/Footer"
import SliderComponent from "../components/SliderComponent"
export default function Home(props) {
  const [listBanner, setListBanner] = useState([])
  const [listSubcategory, setSubCategoryList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [listMaincategory, setMainCategoryList] = useState([])

  const fetchAllBanners = async () => {
    var result = await getData("banner_list")
    var images = result.data.icon.split(",")
    setListBanner(images)
  }

  const fetchAllBrands = async () => {
    var result = await getData("user_brand_list")

    setBrandList(result.data)
  }
  const fetchAllSubcategoryList = async () => {
    var result = await getData("user_subcategory_list")

    setSubCategoryList(result.data)
  }
  const fetchAllMaincategoryList = async () => {
    var result = await getData("user_maincategory_list")
    setMainCategoryList(result.data)
  }
  useEffect(function () {
    fetchAllBanners()
    fetchAllSubcategoryList()
    fetchAllBrands()
    fetchAllMaincategoryList()
  }, [])


  return (<div style={{ position: 'relative', width: '100%' }}>
    <Header />
    <div style={{ display: 'flex', width: '99%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: 20, width: '98%', display: 'flex', justifyContent: 'center' }}>
        <SliderComponent data={listBanner} />
      </div>

      <div style={{ marginTop: 30, width: '85%', display: 'flex', justifyContent: 'center' }}>
        <SubCategoryComponent data={listSubcategory} />
      </div>

      <div style={{ marginTop: "5%", width: '98%', display: 'flex', justifyContent: 'center' }}>
        <SubCategoryComponent2 data={listMaincategory} />
      </div>

      <div style={{ marginBottom: 50, marginTop: 50, width: '98%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubCategoryComponent1 data={brandList} />
      </div>

      <div style={{ marginBottom: 10, width: '60%', display: 'flex', justifyContent: 'center' }}>
        <SubCategoryComponent3 />
      </div>

      <div style={{ backgroundColor: '#ececec', width: '100%', display: 'flex', justifyContent: 'space-between' }} >
        <Footer />
      </div>

    </div>
  </div>)




}