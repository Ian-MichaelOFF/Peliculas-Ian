import logo from "../img/logoudg.png"
export function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt="UDG" className="footerLogo"/>
        <p>
            Ian Michael castellanos Zuñiga
        </p>
        <p>
            Zeus Emanuel Gutierrez Cobian
        </p>
        <p>
            DESARROLLO DE APLICACIONES WEB EN LA NUBE Y MÓVILES
            2026A
        </p>
        <p>
            © Abril 2026 Mi App de Películas
        </p>
        
    </footer>
  );
}