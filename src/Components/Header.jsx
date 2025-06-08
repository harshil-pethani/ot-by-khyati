import React from 'react'
import { useNavigate } from 'react-router-dom';
import heroImg from '/assets/header.jpg';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div id='homeHeader' className="homeHeader">
            <div className="background">
                <img src={heroImg} loading="lazy" alt="" />
            </div>
            <div className="content">
                <p className="title">
                    Occupation Therapy
                </p>
                <p className="slogan">
                    by Dr. Khyati Thakkar 
                </p>
                {/* <p className="desc">
                    Giving parents and guardians the support they need
                </p> */}
                {/* <button onClick={() => { navigate("/explore") }} className="learnmore">
                    Explore <ion-icon name="arrow-forward"></ion-icon>
                </button> */}
            </div>
            {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                <path fill="#ffffff" fillOpacity="1" d="M0,120L30,100C60,80,120,40,180,36C240,32,300,64,360,70C420,80,480,60,540,70C600,80,660,120,720,124C780,128,840,100,900,96C960,92,1020,120,1080,120C1140,120,1200,92,1260,76C1320,60,1380,60,1410,60L1440,60L1440,200L1410,200C1380,200,1320,200,1260,200C1200,200,1140,200,1080,200C1020,200,960,200,900,200C840,200,780,200,720,200C660,200,600,200,540,200C480,200,420,200,360,200C300,200,240,200,180,200C120,200,60,200,30,200L0,200Z"></path>
            </svg> */}

            {/* <svg className="wave" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 72L48 60.0187C96 47.8125 192 24.1875 288 29.9812C384 36 480 72 576 81C672 90 768 72 864 78.0187C960 83.8125 1056 114.188 1152 119.981C1248 126 1344 108 1392 99L1440 90V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V72Z" fill="#ffffff" />
            </svg> */}

            <svg className="wave" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 108L1392 119.981C1344 132.188 1248 155.813 1152 150.019C1056 144 960 108 864 99C768 90 672 108 576 101.981C480 96.1875 384 65.8125 288 60.0187C192 54 96 72 48 81L0 90V180H48C96 180 192 180 288 180C384 180 480 180 576 180C672 180 768 180 864 180C960 180 1056 180 1152 180C1248 180 1344 180 1392 180H1440V108Z" fill="#ffffff" />
            </svg>


        </div>
    )
}

export default Header