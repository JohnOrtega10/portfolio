import React from 'react';
import '../App.css'

const Home = () => {
    return (
        <section className="home">
            <div className="home__wrapper">
                <div className="home__titles">
                    <h1 className='home__title'>Hola! Soy John Ortega - </h1>
                    <h1 className='home__title home__title--color'>Desarrollador Web Full Stack</h1>
                </div>
                {/* <p className='home__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ipsam fuga aperiam animi natus illo fugit, sed enim totam hic!</p> */}
                <div className='home__buttons'>
                    <button className='home__button'>Descargar CV</button>
                    <button className='home__button home__button--color'>Contratame</button>
                </div>
                <div class="scrolldown" >
                    <div class="chevrons">
                        <div class="chevrondown"></div>
                        <div class="chevrondown"></div>
                    </div>
                </div>
            </div>
            {/* <a href='https://www.freepik.es/vectores/software'>Vector de software creado por vectorjuice - www.freepik.es</a> */}
            
            
        </section>
    );
};

export default Home;