import "./footer.css"
//footer insertar imagen de fondo falta

const Footer = () => {
    return (
        <footer className="footer">
            <div className="redes">
                <a href="https://www.facebook.com/wilson.ayala.127/">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://github.com/wilwilsonayala">
                    <img src="/img/github.png" alt="GitHub" />
                </a>
                <a href="https://wa.me/73241949">
                    <img src="/img/whatssap.png" alt="Whatssap" />
                </a>
            </div>
            <img className="logofooter" src="/img/sinfondo.png" alt="org" />
            <strong>Desarrollado por W@P</strong>
        </footer>
    );
};
export default Footer