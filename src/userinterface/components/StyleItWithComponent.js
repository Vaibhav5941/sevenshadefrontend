import { serverURL } from "../../services/FetchDjangoApiServices"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createRef,useRef } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function StyleItWithComponent(props)
{
    const theme = useTheme();
    const md_matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));   
    const sldr1 = useRef();
    const sldr2 = useRef();

    var style_it_with=[{id:'1',icon:'siw1.png',price:'£79.00',description:"Levi's Swift leather trainer in white with navy backtab"},
           {id:'2',icon:'siw2.png',price:'£65.00',description:'Noak skinny wool-rich suit in navy puppytooth check'}
                     ]

                     var settings = {
                        dots:false,
                        infinite: true,
                        
                        autoPlay:true,
                        //autoplaySpeed:3000,
                        slidesToShow: sm_matches?1:md_matches?2:4,
                        slidesToScroll: 1,
                        arrows:false
                        
                      };
                       const handleNext1 = () => {
                           sldr1.current.slickNext();
                       };
                   
                       const handlePrevious1 = () => {
                           sldr1.current.slickPrev();
                       };
                   

                       const showStyleItWith=()=>{
                        return  style_it_with.map((item)=>{
                            return <div style={{backgroundColor:'white',padding:md_matches?0:2,margin:md_matches?2:5}}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin:md_matches?'0px': '2px', flexWrap: 'wrap', maxWidth:md_matches?150:150 }}>
                            <div>
                                <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width:md_matches?"60%": 150, height:md_matches?"60%" :200 }}/>
                            </div>
                            <div style={{ fontSize:sm_matches?"2.5vw": md_matches?"2vw":10, letterSpacing: 0.5, flexWrap:'wrap', flexDirection: 'column', textAlign: 'left', marginTop: '5px' }}>
                                {item.description}
                            </div>
                            <div style={{ fontWeight: 500, fontSize:sm_matches?"3vw": md_matches?"2.5vw":14, letterSpacing: 0.5, textAlign: 'left',marginLeft:15 ,color:'#525050'}}>
                                        {item.price}
                                    </div>
                                    </div>
                                    
                        </div>
                     }
                    )}

                    return(<div style={{width:'100%',justifyContent: 'center',maxWidth:1200}}>
    
                    <div style={{display:'flex',flexWrap:'wrap',width:'98%' }}>
                   
                
                    <div style={{ width: '100%', position: 'relative' , backgroundColor: '#ececec',padding:'2%'}}>
                    <div style={{ fontWeight: 'bold', fontSize:sm_matches?"4vw": md_matches?"2vw":18, letterSpacing: 0.8, color: '#2d2d2d', marginTop:md_matches?20: 20,justifyContent: 'center', marginLeft:md_matches?"12%":'30%'}}>STYLE IT WITH</div>

                                    <div style={{ width: '100%', backgroundColor: '#ececec', paddingLeft:md_matches?"0%": '15%', paddingRight:md_matches?"20%": '15%', display: 'flex', flexWrap: 'wrap', marginLeft:md_matches?"12%": "15%" }}>
                                        
                                            {showStyleItWith()}
                                    </div>
                                </div>
                
                               
                    </div>
                    </div>
                    )
}
/* 
<div style={{ fontWeight: 'bold', fontSize: 18, letterSpacing: 0.8, color: '#2d2d2d', marginTop: 20 }}>STYLE IT WITH</div>
                                        <div style={{ cursor: 'pointer', position: 'absolute', left: '-1%', top: '14%', zIndex: 3 }} onClick={handlePrevious1}><ArrowBackIosIcon style={{ color: 'grey', fontSize: '2vw' }} /></div>
                                        <Slider ref={sldr1} {...settings}>
                                            {showStyleItWith()}
                                        </Slider>
                                        <div style={{ cursor: 'pointer', position: 'absolute', right: '-1%', top: '14%', zIndex: 3 }} onClick={handleNext1}><ArrowForwardIosIcon style={{ color: 'grey', fontSize: '2vw' }} /></div>
                                    </div>
*/