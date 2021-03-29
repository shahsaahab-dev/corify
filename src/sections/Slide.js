import React from 'react'

export default function Slide({imgSrc,subTitle,mainTitle,rent,payable,description}) {
    return (
        <>
        <div className="single-slider bg_cover" style={{backgroundImage:`url(${imgSrc})`}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="slider-content">
                    <h4 className="sub-title">{subTitle}</h4>
                    <h2 className="main-title">{mainTitle}</h2>
                    <p className="sub-title-2">Cayman <span>S</span></p>
                    <div className="slider-description">
                    <p className="text-heading">
                        <span className="heading-1">{rent}</span>
                        <span className="heading-2">/</span>
                        <span className="heading-3">{payable}</span>
                    </p>
                    <p>{description}</p>
                    </div>
                    <ul className="slider-btn">
                    <li><a className="main-btn main-btn-2" href="#">LEARN MORE</a></li>
                    <li><a className="main-btn" href="#"><i className="ion-speedometer" /> TEST DRIVE</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
