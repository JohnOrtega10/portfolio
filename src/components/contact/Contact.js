import { useForm } from "react-hook-form";
import { useRef, useState, useLayoutEffect } from "react";
import gsap, { Power2 } from "gsap";
import "./contact.styles.css";

const Contact = () => {
  const refContact = useRef(null);

  const [isVisibleForm, setisVisibleForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submit = (data) => {
    setIsLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => setisVisibleForm())
      .catch((error) => console.log(error));
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tlContact = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact__inputs",
          start: "top center",
          id: "contact",
        },
      });

      tlContact
        .from(".contact__inputs", {
          opacity: 0,
          y: 200,
          duration: 1.2,
          ease: Power2.easeOut,
        })
        .from(
          [".line--contact", ".btn--contact"],
          {
            opacity: 0,
            x: "-100%",
            duration: 1,
            stagger: 0.2,
            ease: Power2.easeOut,
          },
          "-=.8"
        );
    }, refContact);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section contact" id="contact" ref={refContact}>
      <div className="scroll-effect">
        <h2 className="title scroll-effect__text">Trabajemos juntos!</h2>
        <h2 className="title scroll-effect__text">Trabajemos juntos!</h2>
        <h2 className="title scroll-effect__text">Trabajemos juntos!</h2>
        <h2 className="title scroll-effect__text">Trabajemos juntos!</h2>
      </div>
      <div className="contact__container container">
        <div className="contact__send-message">
          <p className="contact__text text">
            Puedes comunicarte conmigo completando el formulario que aparece a
            continuación, también escribiéndome al{" "}
            <a
              href="mailto:johnortega.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              correo electrónico
            </a>{" "}
            o a mi cuenta de{" "}
            <a
              href="https://www.linkedin.com/in/john-ortega-81aa01231/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              linkedin
            </a>
            .
          </p>
          {isVisibleForm ? (
            <form
              className="contact__inputs"
              onSubmit={handleSubmit(submit)}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="contact__input-container">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="text contact__input"
                  name="name"
                  required
                  {...register("name")}
                />
                <div className="line-container">
                  <div className="line line--contact"></div>
                </div>
              </div>
              <div className="contact__input-container">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="text contact__input"
                  name="email"
                  required
                  {...register("email")}
                />
                <div className="line-container">
                  <div className="line line--contact"></div>
                </div>
              </div>
              <div className="contact__input-container">
                <textarea
                  cols="30"
                  rows="8"
                  placeholder="Tu mensaje"
                  className="text contact__input contact__input--area"
                  name="message"
                  required
                  {...register("message")}
                ></textarea>
                <div className="line-container">
                  <div className="line line--contact"></div>
                </div>
              </div>
              <button className="btn btn--contact" type="submit">
                {isLoading ? (
                  <p className="btn__text">Espere por favor . . . </p>
                ) : (
                  <>
                    <p className="btn__text">Enviar mensaje</p>
                    <i className="btn__icon uil uil-arrow-right"></i>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="contact__message">
              <p className="text">
                ¡Gracias por tu mensaje! Me pondré en contacto contigo tan
                pronto como pueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
