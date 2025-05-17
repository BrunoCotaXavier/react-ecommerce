import "./style.tab-button.css";

const TabButton = () => {
    return (
        <div className="tab-button-container">
            <div className="tab-button-bg">
                <div className="tab-info">
                    <div className="tab-info-item">
                        <h1 className="tab-info-title">LOJA</h1>
                        <a>Home</a>
                        <a>Produtos</a>
                        <a>Orçamento</a>
                        <a>Loja Online</a>
                        <a>Lojas Exclusivas</a>
                    </div>
                    <div className="tab-info-item">
                        <h1 className="tab-info-title">SOBRE</h1>
                        <a>Sobre Nós</a>
                        <a>Como Funciona</a>
                        <a>Tecnicas de Pesonalização</a>
                        <a>Práticas Sustentáveis</a>
                        <a>Perguntas Frequentes</a>
                        <a>Blog</a>
                    </div>
                    <div className="tab-info-item">
                        <h1 className="tab-info-title">LOCAL</h1>
                        <a>Rua da Graça, 925</a>
                        <a>Bom Retiro</a>
                        <a>São Paulo</a>
                    </div>
                    <div className="tab-info-item">
                        <h1 className="tab-info-title">CONTATO</h1>
                        <a>Faler conosco</a>
                        <a>(11)3333-3333 / (11)3333-3333</a>
                        <a>contato@hotmail.com</a>
                    </div>
                </div>
            </div>
            <div className="tab-about">
                <a>© 2025 - ABDON AMATTI & CIA LTDA - CNPJ 60.854.429/0001-78</a>
                <img src="https://static.wixstatic.com/media/4c92cf_4e35a4cb0bdf40bfb7155a003f4dd6d5~mv2.png/v1/fill/w_142,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/simbolo_monocromatico_verde.png" />
                <a>Política de Privacidade</a>
                <a> | </a>
                <a>Termos e Condições de Venda Online</a>
            </div>
        </div>
    )
}

export default TabButton;