//para utilizar o componente crie o import na pagina que deseja
//coloque o nome da pessoa entre <footer>NomePessoa</footer>
//passe a informação dentro da tag Footer - LINK
//<Footer link={}>faele</footer>

import Social from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </p>
        <Social icon={"logo-github"} href={"#"} />
        <Social icon={"logo-instagram"} href={"#"} />
        <Social icon={"logo-twitter"} href={"#"} />
        <Social icon={"logo-facebook"} href={"#"} />
        <Social icon={"logo-youtube"} href={"#"} />
    </footer>
  );
};

export default Footer;
