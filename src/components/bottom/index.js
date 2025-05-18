import "./style.bottom.css"

import iconInstagram from "../../assets/icon-instagram.svg"
import logo from "../../assets/logo.png"

import { Link } from "react-router-dom";

const Bottom = () => {
    return (
        <div>
            <div className="containerBottom">
                <div className="cardBottom">
                    <h6 className="tittleBottom">LOJA</h6>
                    <br />
                    <h6>Home</h6>
                    <h6>Produtos</h6>
                    <h6>Orçamento</h6>
                    <h6>Loja Online</h6>
                </div>
                <div className="cardBottom">
                    <h6 className="tittleBottom">SOBRE</h6>
                    <br />
                    <h6>Sobre Nós</h6>
                    <h6>Como Funciona</h6>
                    <h6>Técnicas e Personalização</h6>
                    <h6>Práticas Sustentáveis</h6>
                    <h6>Perguntas Frequentes</h6>
                </div>
                <div className="cardBottom">
                    <h6 className="tittleBottom">LOCAL</h6>
                    <br />
                    <h6>R. Cantidiano Guimarães, 132 </h6>
                    <div>
                        <img src={iconInstagram} />
                        <span>lboltda</span>
                    </div>
                </div>
                <div className="cardBottom">
                    <div style={{ paddingLeft: 20 }}>
                        <h6 className="tittleBottom">CONTATO</h6>
                        <br />
                        <h6>Fale Conosco</h6>
                        <h6>+55 (11) 949543274</h6>
                        <h6>contato@malhariatropical.com.br</h6>
                    </div>
                    <img src="https://static.wixstatic.com/media/c97d9f_a9b51f094e81449282aad9347f3153a1~mv2.png/v1/fill/w_144,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c97d9f_a9b51f094e81449282aad9347f3153a1~mv2.png" />
                    <img src="https://static.wixstatic.com/media/c97d9f_23da9aefc1c0412cb500f9890da88635~mv2.png/v1/fill/w_126,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bci_logo_branco.png" />
                </div>
            </div>
            <div className="containerRotate">
                <div className="cardRotate">
                    <span>© 2025 - ABDON AMATTI & CIA LTDA - CNPJ 60.854.429/0001-78</span>
                    <img width={55} src={logo} />
                    <Link style={{ color: "black" }} to="">Política de Privacidade - Termos e Condições de Venda Online</Link>
                </div>
            </div>
        </div>
    )
}

export default Bottom;