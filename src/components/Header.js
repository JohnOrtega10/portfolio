import React, { useEffect, useRef} from 'react';
import '../App.css'
import gsap from 'gsap';

const Header = () => {

    // const [menuTl] = useState(gsap.timeline({ paused: true }));
    const menuBars = {};
    const animationHamburgerBtn = gsap.timeline({ paused: true})

    useEffect(() => {
        animationHamburgerBtn
        .to(menuBars.topBar, {duration: 0.2, x: 52, rotation: 45,stroke: "#fff" })  // stroke: "black",
        .to(menuBars.middleBar, { duration: 0.2, alpha: 0 }, 0)
        .to(menuBars.bottomBar,{ duration: 0.2, x: 52, rotation: -45, stroke: "#fff" }, 0) /*stroke: "black"*/ 
        .reverse();
    }, [animationHamburgerBtn,menuBars.topBar, menuBars.middleBar, menuBars.bottomBar ]);

    const toggleMenuTimeline = () => {
        animationHamburgerBtn.reversed(!animationHamburgerBtn.reversed());
        animationMenu.reversed(!animationMenu.reversed());
        // animationHamburgerBtn.reversed() ? animationHamburgerBtn.play() : animationHamburgerBtn.reverse()
    };

    const animationMenu = gsap.timeline();
    const menu = useRef();
    const el = gsap.utils.selector(menu);

    useEffect(()=>{
        animationMenu.to(menu.current, {
            duration:0,
            display: "block",
            ease: 'Expo.easeInOut',
        }).from(el(".menu__wrapper"),{
            duration:1,
            x:"100%",
            ease: 'Expo.easeInOut'
        }).from(el(".menu__span"), {
            duration:1,
        	x:"100%",
        	stagger: 0.1,
        	ease: 'Expo.easeInOut'
        },"-=0.9" ).from(el(".menu__link"), {
            duration:1.5,
            y:"100%",
            stagger: 0.2,
            ease: 'Expo.easeInOut'
        } , "-=0.5")
        .from(el(".menu__item__footer"),{
            duration:1,
            y:"-100%",
            opacity:0,
            stagger: 0.1,
            ease: 'Expo.easeInOut'
        }, "-=0.5")
        .reverse()
    }, [animationMenu, el])

        
    const handleMenuClick = () =>{
        
    }



    return (
        <>
        <header className="header">
            <div className="header__nav">
                <div className="header__logo">
                    {/* <h1>Logo</h1> */}
                </div>
                <button className="header__hamburger-btn">
                    <svg
                        className="menu-btn"
                        viewBox="0 0 384 276"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleMenuTimeline}
                    >
                        <line
                            x1="16"
                            y1="17"
                            x2="368"
                            y2="17"
                            ref={e => (menuBars["topBar"] = e)}
                        />
                        <line
                            x1="16"
                            y1="139.2"
                            x2="368"
                            y2="139.2"
                            ref={e => (menuBars["middleBar"] = e)}
                        />
                        <line
                            x1="16"
                            y1="261"
                            x2="368"
                            y2="261"
                            ref={e => (menuBars["bottomBar"] = e)}
                        />
                    </svg>
                </button>
            </div>
        </header>
        
        <section className="menu" ref={menu} onClick={()=>handleMenuClick()} style={{cursor:'pointer'}}>
            <div className="menu__wrapper" >
                <div className="menu__bg" >
                    <span className='menu__span'></span>
                    <span className='menu__span'></span>
                    <span className='menu__span'></span>
                </div>
                <div className='menu__nav'>
                    <ul className="menu__list">
                        <li className='menu__item'>
                            <a href="//" className='menu__link'>Inicio</a>
                        </li>
                        <li className='menu__item'>
                            <a href="//" className='menu__link'>Sobre mi </a>
                        </li>
                        <li className='menu__item'>
                            <a href="//" className='menu__link'>Portafolio</a>
                        </li>
                        <li className='menu__item'>
                            <a href="//" className='menu__link'>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="menu__nav__footer">
                    <ul className="menu__social__list">
                        <li className='menu__item__footer'><a href='//'>Linkedin</a></li>
                        <li className='menu__item__footer'><a href='//'>Github</a></li>
                    </ul>
                    <span className='menu__item__footer'>2022</span>
                </div>
            </div>
        </section>
        
        </>
        
        

    );
};


export default Header;