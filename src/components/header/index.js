import "./style.header.css"
import logo from "../../assets/logo.png"
import person from "../../assets/icon-person.svg"
import cart from "../../assets/icon-cart.svg"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="headerContainer">
            <div>
                <img src={logo} width={100} />
            </div>
            <div className="containerHeaderLink">
                <Link className="headerLink" to="/products">PRODUTOS</Link>
                <Link className="headerLink" to="/como-funciona">COMO FUNCIONA</Link>
                <Link className="headerLink" to="/orcamento">ORÇAMENTO</Link>
                <Link className="headerLink" to="/loja-online">LOJA ONLINE</Link>
            </div>
            <div className="containerPerson">
                <p style={{ paddingTop: 15, paddingRight: 5, fontWeight: "bold" }}>Fazer Login</p>
                <img src={person}></img>
                <img src={cart}></img>
            </div>
        </div>
    )
}

export default Header;