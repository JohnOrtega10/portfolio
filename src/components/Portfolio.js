import React from 'react';
import '../App.css'
import pokedexProject from '../icons/pokedex3.png'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                < div className='lateral-title'>proyectos</div>
                <div className='portfolio__text'>
                    <h1 className="portfolio__title">Conoce mis proyectos</h1>
                    <p>Aquí hay algunos de mis proyectos mas recientes. ¿Quieres ver más? puedes acceder a mi cuenta de <a href="//" style={{color: 'black', fontWeight: '600'}}>github</a>.</p>
                </div>
                <div className="portfolio__projects">
                    <div className='portfolio__project' >
                        <img src={pokedexProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            {/* <div className="portafolio__area">Frontend</div> */}
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <h3 className='portfolio__information-title'>Pokedex</h3>
                            <p className='portfolio__information-description'>Aplicación web, donde el usuario puede registrar su nombre, ver y filtrar pokemones.</p>
                            
                            <div className='a'>
                                <a href='//' className='portfolio__information-view'>Ver proyecto</a>
                                <a href='//' className='portfolio__information-view'>Ver codigo</a>
                            </div>

                        </div>
                    </div>
                    <div className='portfolio__project' >
                        <img src={pokedexProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            {/* <div className="portafolio__area">Frontend</div> */}
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <h3 className='portfolio__information-title'>Pokedex</h3>
                            <p className='portfolio__information-description'>Aplicación web, donde el usuario puede registrar su nombre, ver y filtrar pokemones.</p>
                            
                            <div className='a'>
                                <a href='//' className='portfolio__information-view'>Ver proyecto</a>
                                <a href='//' className='portfolio__information-view'>Ver codigo</a>
                            </div>

                        </div>
                    </div>
                    <div className='portfolio__project' >
                        <img src={pokedexProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            {/* <div className="portafolio__area">Frontend</div> */}
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <h3 className='portfolio__information-title'>Pokedex</h3>
                            <p className='portfolio__information-description'>Aplicación web, donde el usuario puede registrar su nombre, ver y filtrar pokemones.</p>
                            
                            <div className='a'>
                                <a  href='//'className='portfolio__information-view'>Ver proyecto</a>
                                <a href='//' className='portfolio__information-view'>Ver codigo</a>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <div className="portfolio__projects">

                    <div className='portfolio__project' >
                        <img src={pokedexProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            <div className="portafolio__area">Frontend</div>
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <h3 className='portfolio__information-title'>Pokedex</h3>
                            <p className='portfolio__information-description'>Aplicación web, donde el usuario puede registrar su nombre, ver y filtrar pokemones.</p>
                            
                            <div className='a'>
                                <a className='portfolio__information-view'>Ver proyecto</a>
                                <a className='portfolio__information-view'>Ver codigo</a>
                            </div>

                        </div>
                    </div>
                    <div className='portfolio__project' >
                        <img src={ecommerceProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            <div className="portafolio__area">Frontend</div>
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <span className='portfolio__technologies'>React Redux</span>
                            <h3 className='portfolio__information-title'>Eccomerce</h3>
                            <p className='portfolio__information-description'>Tienda virtual donde el usuario puede loguearse, ver y filtrar productos, añadirlos al carrito y comprarlos. </p>
                            <div className='a'>
                                <a className='portfolio__information-view'>Ver proyecto</a>
                                <a className='portfolio__information-view'>Ver codigo</a>
                            </div>
                        </div>
                    </div>


                    <div className='portfolio__project' >
                        <img src={crudProject} alt="" className='portfolio__image'/>
                        <div className='portfolio__information'>
                            <div className="portafolio__area">Frontend</div>
                            <span className='portfolio__technologies'>HTML</span>
                            <span className='portfolio__technologies'>CSS</span>
                            <span className='portfolio__technologies'>ReactJs</span>
                            <h3 className='portfolio__information-title'>Pokedex</h3>
                            <p className='portfolio__information-description'>Aplicación web, donde el usuario puede registrar su nombre, ver y filtrar pokemones.</p>
                            <div className='a'>
                                <a className='portfolio__information-view'>Ver proyecto</a>
                                <a className='portfolio__information-view'>Ver codigo</a>
                            </div>
                        </div>
                    </div>

                </div> */}

            </div>
        </section>
    );
};

export default Portfolio;