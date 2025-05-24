import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../services/FetchDjangoApiServices";
export default function SliderComponent(props) {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
const theme = useTheme();
const md_matches = useMediaQuery(theme.breakpoints.down('md'));
const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));  

  var data = props.data
  const showSlider = () => {
    return data.map((item) => {
      return <div><img src={`${serverURL}/static/${item}`} style={{ width:sm_matches ? '180%' : md_matches ? '100%' : '98%' , height: '46%' }} /></div>  //sm_matches ? 2 : md_matches ? 4 : 6
    })

  }
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        {showSlider()}
      </Slider>
    </div>
  );
}