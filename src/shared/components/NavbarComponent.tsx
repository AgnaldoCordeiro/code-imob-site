import { useEffect, useState } from "react";
import { Link as RLink } from "react-scroll";

export default function NavbarComponent() {
  const blackImg = "/logo.png"
  const whiteImg = "/logobranco.png"

  const [stateImg, setStateImg] = useState(whiteImg)
 
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById("header");

      if (window.scrollY >= 50) {
        header!.classList.add("scroll-header");
        setStateImg(blackImg)
      } else {
        header!.classList.remove("scroll-header");
        setStateImg(whiteImg)
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
        <img src={stateImg}  width={"80px"} height={"100px"}/>    
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <RLink to="home" smooth={true} duration={500} offset={-50}>
                <i className="bx bx-home-alt-2"></i>
                <span>Home</span>
              </RLink>
            </li>

            <li className="nav__item">
              <RLink to="popular" smooth={true} duration={500} offset={-50}>
                <i className="bx bx-building-house"></i>
                <span>Áreas de Lazer</span>
              </RLink>
            </li>

            <li className="nav__item">
              <RLink to="value" smooth={true} duration={500} offset={-50}>
                <i className="bx bx-award"></i>
                <span>Valores</span>
              </RLink>
            </li>

            <li className="nav__item">
              <RLink to="contact" smooth={true} duration={500} offset={-50}>
                <i className="bx bx-phone"></i>
                <span>Contato</span>
              </RLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
