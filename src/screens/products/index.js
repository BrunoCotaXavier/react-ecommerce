import "./style.products.css"

const Product = () => {
    return (
        <div className="products-container">
            <span>PRODUTOS</span>
            <p>Todos os nossos produtos são personalizáveis. </p>
            <p>Diferentes técnicas de personalização para cada material ou tecido.</p>
            <p>Para comprar produtos lisos, acesse a loja online, ou em nossa loja física: Rua da Graça, 925.</p>

            <div className="product-list">
                <div className="product-card">
                    <img src="https://static.wixstatic.com/media/d4a6d2_cd0f28849cf8410d8a43c83f6a2d7420~mv2.png/v1/fill/w_405,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/simbolo_monocromatico_verde.png" alt="Produto 3" />
                        <div className="product-name"><a href="https://www.wix.com/website-template/view/html/3092" target="_blank" rel="noopener noreferrer"></a>
                        <span className="tp">CAMISETAS EM ALGODÃO</span>
                        </div>
                </div>
                <div className="product-card">
                    <img src="https://static.wixstatic.com/media/d4a6d2_cd0f28849cf8410d8a43c83f6a2d7420~mv2.png/v1/fill/w_405,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/simbolo_monocromatico_verde.png" alt="Produto 3" />
                        <div className="product-name">
                        <a href="https://www.wix.com/website-template/view/html/3092" target="_blank" rel="noopener noreferrer"></a>
                        <span className="tp">SAMBA E SHORT DOLL</span>
                        </div>
                </div>
                <div className="product-card">
                    <img src="https://static.wixstatic.com/media/d4a6d2_cd0f28849cf8410d8a43c83f6a2d7420~mv2.png/v1/fill/w_405,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/simbolo_monocromatico_verde.png" alt="Produto 3" />
                        <div className="product-name">
                            <a href="https://www.wix.com/website-template/view/html/3092" target="_blank" rel="noopener noreferrer"></a>
                            <span className="tp">BLUSÕES</span>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default Product;