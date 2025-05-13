import "./style.header.css"

const Header = () => {
    return (
        <div className="header-container">
            <img src="https://static.wixstatic.com/media/4c92cf_1ee960cc7d5c4cfe9f8fca84a96ffaaa~mv2.png/v1/fill/w_294,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_pb_negativo.png" alt="Logo" className="logo" />
            <a>PRODUTOS</a>
            <a>COMO FUNCIONA</a>
            <a>ORÇAMENTO</a>
            <a>LOJA ONLINE</a>
            <a>Fazer Login</a>
            <img src="./user.png" className="user"></img>
            <div className="car-container">
                <img src="./car.png" alt="carrinho" className="car"></img>
                <p>0</p>
            </div>
        </div>
    )
}

export default Header;