import React from 'react';

//components
import ServiceTile from '../../components/service-tile/service-tile.component';

//styles
import './services.styles.scss';

//data file
import { services } from '../../data/services';

const Services = () => {
    return (
        <main className='services-container'>
            <header className="services-title">Our Services</header>
            <section className="services-body">
                {
                    services.map(service => {
                        switch (service.type) {
                            case 'IMAGE':
                                return <ServiceTile key={service.id} img={service.img} description={service.description} />;
                            default:
                                return null;
                        }
                    })
                }
            </section>
        </main>
    );
};

export default Services;