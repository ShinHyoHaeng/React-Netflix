import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import React,{Component} from 'react';

import Slider from "react-slick"
import "./slick.css"; 
import "./slick-theme.css";


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <ArrowForwardIosOutlined className="SlickArrow"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <ArrowBackIosOutlined className="SlickArrow"/>
    </div>
  );
}

export class ImgSlider extends Component {
    render() {
        const {children} = this.props;
        const settings = {
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            swipe: false,
            initialSlide:0,
            lazyload: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                        infinite: false,
                        slidesToScroll: 1,
                        swipe: false,
                        initialSlide:0,
                        lazyload: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        infinite: false,
                        slidesToScroll: 1,
                        swipe: false,
                        initialSlide:0,
                        lazyload: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 3,
                        infinite: false,
                        slidesToScroll: 1,
                        swipe: false,
                        initialSlide:0,
                        lazyload: true,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 758,
                    settings: {
                        slidesToShow: 2,
                        initialSlide:1,
                        slidesToScroll: 2,
                        swipe:true,
                        arrows:false,
                        initialSlide:0,
                        infinite: false,
                        lazyload: true
                    }
                }
            ]
        }
        return (
            <Slider {...settings}>
                {children}
            </Slider>
        )
    }
}

export default ImgSlider
