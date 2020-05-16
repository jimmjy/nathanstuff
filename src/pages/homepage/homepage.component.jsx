import React from 'react';

//components
import Services from '../services/services.component';

//styles
import './homepage.styles.scss';

//images
import homepageImage from '../../assets/apartment-bed-bedroom-chair-462235.jpg';


const HomePage = () =>
    <>
        <main className='homepage-main-content'>
            <section className="motto">
                <div className="motto-container">
                    <h1 className="motto-title">
                        You rest, we clean!
            </h1>
                    <p className="submotto">
                        See how letting us clean your space can improve your life!
            </p>
                </div>
            </section>
            <section className="homepage-image-container">
                <img className='homepage-image' src={homepageImage} alt="clean room" />
            </section>
        </main>
        <Services />
    </>

export default HomePage;