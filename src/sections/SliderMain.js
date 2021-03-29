import React from 'react'
import SliderData from '../Data/SliderData';
import Slide from './Slide';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

export default function SliderMain() {
    const NextArrow = (props) => {
        const {className,style,onClick} = props;
        return (<span onClick={onClick} className={className}><ChevronRight/></span>
        )
    }
    const PrevArrow = (props) => {
        const {className,style,onClick} = props;
        return (<span onClick={onClick} className={className}><ChevronLeft/></span>
        )
    }
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow/>,
        nav:false,
        
    }
    return (
        <>
        <div>
        <Slider {...sliderSettings}>
           {SliderData.map(slide=>{
               return(<Slide
                key={slide.id}
                imgSrc={slide.image}
                subTitle={slide.subTitle}
                mainTitle={slide.main_title}
                rent={slide.rent}
                payable={slide.payable}
                description={slide.description}
               />)
           })}
        </Slider>
      </div>
        </>
    )
}
