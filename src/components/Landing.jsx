import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'
import AOS from 'aos';
import "aos/dist/aos.css";


const Landing = () => {
    AOS.init()
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1 className='landing__title filterbt'
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-once={true}
                        >Welcome to </h1>
                        <h1 className='landing__title filterb'
                        data-aos="fade-up"
                        data-aos-delay="1100"
                        data-aos-duration="1000"
                        >The Purple Library </h1>
                        <h2 className='landing__title'
                        data-aos="fade-right"
                        data-aos-delay="1700"
                        data-aos-duration="1000"
                        data-aos-once={true}
                        >Find your dream book... <span className='purple'></span></h2>
                        <a href="#features">
                            <button className="btn"
                            data-aos="fade-right"
                            data-aos-delay="1700"
                            data-aos-duration="1000"
                            data-aos-once={true}
                            >Browse books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper" 
                    data-aos="fade-left"
                    data-aos-delay="1700"
                    data-aos-duration="1000"
                    data-aos-once={true}
                    >
                        <img src={UndrawBooks} alt="" className='landing__img'/>
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
