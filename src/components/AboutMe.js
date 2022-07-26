import React from 'react';
import '../App.css'

import pc2 from '../icons/x.svg'
import skills from '../icons/skills.svg'

const AboutMe = () => {
    return (
        <section className="aboutme">

            <div className="aboutme__info">
                <img src={pc2} alt="" className="aboutme__info-img" />
                <div className="lateral-title">sobremi</div>
                <div className="aboutme__personal-info">
                    <h1 style={{fontSize: '30px'}}>¿Quién soy?</h1>
                    <p className="aboutme__info-text">Soy un estudiante de ingenieria de sistemas, disfruto de la programación y quiero desempeñarme profesionalmente en la rama del desarrollo web. 
                    </p>
                    <p className="aboutme__info-text">Me motiva aprender constantemente, y resolver problemas de forma creativa.</p>
                    <h3 className='aboutme__info-title'>Información Personal</h3>
                    <div className="aboutme__info-lists">
                        <div className='aboutme__info-list-item'>
                            <i class="fas fa-mobile-alt fa-lg"></i>
                            <div>
                                <h4 className='aboutme__info-list-title'>Telefono</h4>
                                <p className='aboutme__info-list-text'>+51 3108894385</p>

                            </div>
                        </div>
                        <div className='aboutme__info-list-item'>
                            <i class="fas fa-envelope fa-lg"></i>
                            <div>
                                <h4 className='aboutme__info-list-title'>Correo</h4>
                                <p className='aboutme__info-list-text'>johnortega.dev@gmail.com</p>
                            </div>
                        </div>
                        <div className='aboutme__info-list-item'>
                            <i class="fas fa-map-marked-alt fa-lg"></i>
                            <div>
                                <h4 className='aboutme__info-list-title'>Ubicación</h4>
                                <p className='aboutme__info-list-text'>Bogotá, Colombia</p>

                            </div>
                        </div>
                        <div className='aboutme__info-list-item'>
                            <i class="fas fa-birthday-cake fa-lg"></i>
                            <div>
                                <h4 className='aboutme__info-list-title'>Cumpleaños</h4>
                                <p className='aboutme__info-list-text'>10 Marzo, 2001</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>




                {/* <h1 className='aboutme__title'>Sobre mi </h1> */}
            <div className="aboutme__wrapper">
                <img src={skills} alt=""  className='img-skills'/>
                <div className='studies-skills'>
                    <div className="aboutme__studies">
                        <div className='lateral-title'>estudios</div>
                        <div className="aboutme__studies-list">
                            <span className='aboutme__studies-date'>2020 - Actualmente</span>
                            <h3 className='aboutme__studies-degree'>Uniersidad ECCI</h3>
                            <p className='aboutme__studies-information'>Tecnólogo en Desarrollo Informatíco</p>
                        </div>
                        <div className="aboutme__studies-list">
                            <span className='aboutme__studies-date'>2021 - 2022</span>
                            <h3 className='aboutme__studies-degree'>Academlo</h3>
                            <p className='aboutme__studies-information'>Bootcamp desarrollo Web Full-Stack y Ciencias de la computación</p>
                        </div>
                        <span className='aboutme__line'></span>
                    </div>

                    {/* <img src={sx} alt="" className='sss'/> */}
                    <div className='aboutme__skills'>
                        <div className='lateral-title'>habilidades</div>
                        <div className="aboutme__skills-list">
                            <h1 className='aboutme__skill-title aboutme__skills-frontend'>Frontend</h1>
                            <p className='aboutme__skill-information'>HTML, CSS, Javascript, ReactJs, React Redux</p>
                        </div>
                        <div className="aboutme__skills-list aboutme__skills-backend">
                            <h1 className='aboutme__skill-title'>Backend</h1>
                            <p className='aboutme__skill-information'>Nodejs, Express, Sequelize, Python, Django, SQL</p>
                        </div>
                        <span className='aboutme__line'></span>
                    </div>
                </div>
                






            </div>
            
        </section>
    );
};

export default AboutMe;