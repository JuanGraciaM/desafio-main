import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <footer className="footer" id="f">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Flama © 2022</h3>
                    <p href="#f">Tienda Zapatilla</p>
                </div>
                <div className="footer__content--divlist">
                    <h3>Store</h3>
                    <ul>
                        <li><a href="#f">Nuestros productos</a></li>
                        <li><a href="#f">AirPro Max</a></li>
                        <li><a href="#f">Street Wear</a></li>
                        <li><a href="#f">City Style</a></li>
                    </ul>
                </div>
                <div className="footer__content--divlist">
                    <h3>Soporte</h3>
                    <ul>
                        <li><a href="#f">Consultas</a></li>
                        <li><a href="#f">Quejas</a></li>
                        <li><a href="#f">Sobre Nosotros</a></li>
                    </ul>
                </div>
                
                <div className="footer__content--divlist">
                    <h3>Contacto</h3>
                    <ul>
                    <li><a href="">Book_Store@Libertaria.com</a></li>
                        <li><a href="#f">Teléfono: 011-4342-5676</a></li>
                        <li><a href="#f">Celular: +54-011-5674-5632</a></li>
                        <li><a href="#f">Av. Córdoba 2701</a></li>
                        <li><a href="#f">C.P.: 2304</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__media">
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-facebook-f"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-twitter"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-youtube"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>
            <div className="footer__copy">
                <p>©Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}