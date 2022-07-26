import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            {/* <h1>Contacto</h1> */}
            <div className="contact__wrapper">
                <div className='lateral-title'>contacto</div>
                <div className="contact__information">
                    <h1 className='contact__information-title'>Trabajemos juntos!</h1>
                    <p className="contact__information-text">Envíame un mensaje por aqui. Tambien puedes escribirme al correo electrónico o a mi cuenta de linkedin. 👋</p>
                    <div className="contact__information-item">
                        <div className='contact__icon'><i className="fas fa-phone-alt fa-2x"></i></div>
                        <div className='contact__information-wrapper'>
                            <h3 className='contact__item-title'>Telefono:</h3>
                            <p className='contact__item-description'>+51 3108894385</p>
                        </div>
                    </div>
                    <div className="contact__information-item">
                        <div className='contact__icon'><i class="fas fa-envelope fa-2x"></i></div>
                        
                        <div className='contact__information-wrapper'>
                            <h3 className='contact__item-title'>Correo:</h3>
                            <p className='contact__item-description'>johnortega.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__information-item">
                        <div className='contact__icon'><i class="fas fa-map-marked-alt fa-2x"></i></div>
                        <div className='contact__information-wrapper'>
                            <h3 className='contact__item-title'>Ubicación:</h3>
                            <p className='contact__item-description'>Bogotá, Colombia</p>
                        </div>
                    </div>
                </div>
                <div className='contact__inputs'>
                        <h1 className='contact__input-title'>Ponerse en contacto</h1>

                        <input type="text" placeholder='Nombre' className='contact__input'/>
                        <input type="text" placeholder='Email' className='contact__input'/>
                        <textarea cols="30" rows="8" placeholder='Mensaje' className='contact__input'></textarea>
                        <button className='contact__input-btn'>Enviar Mensaje</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;