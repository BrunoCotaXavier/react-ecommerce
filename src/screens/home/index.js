import CarrosselFullWidth from "../../components/carrossel";
import "./style.home.css"
import iconShirt from "../../assets/icon-shirt.svg"
import iconBudget from "../../assets/icon-budget.svg"
import iconAbout from "../../assets/icon-about.svg"

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div style={{ height: 500, backgroundColor: "black" }}>
                <CarrosselFullWidth />
            </div>
            <div className="containerCardHome">
                <div className="cardHome">
                    <div>
                        <img width={100} src={iconShirt} />
                    </div>
                    <div>
                        <p className="titleCardHome">PRODUTOS</p>
                    </div>
                    <div>
                        <p className="subTitleCardHome">Conheça nossas opções de produtos disponíveis.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/products"> CONHEÇA > </Link>
                    </div>
                </div>
                <div className="cardHomeCenter">
                    <div>
                        <img width={100} src={iconBudget} />
                    </div>
                    <div>
                        <p className="titleCardHome" style={{color: "#007940"}}>ORÇAMENTO</p>
                    </div>
                    <div>
                        <p className="subTitleCardHome" style={{color: "#007940"}}>Já tem ideia de produto, arte e quantidade? Solicite seu orçamento.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/budget" style={{color: "#007940"}}> CLIQUE AQUI ></Link>
                    </div>
                </div>
                <div className="cardHome">
                    <div>
                        <img width={100} src={iconShirt} />
                    </div>
                    <div>
                        <p className="titleCardHome">COMO FUNCIONA</p>
                    </div>
                    <div>
                        <p className="subTitleCardHome">Entenda como funciona o processo para o orçamento e produção de seus produtos personalizados.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/products"> LEAI MAIS > </Link>
                    </div>
                </div>
            </div>
            <div className="containerImagesProduct">
                <div className="cardImageProduct">
                    <div>
                        <img src="https://static.wixstatic.com/media/d4a6d2_cd0f28849cf8410d8a43c83f6a2d7420~mv2.png/v1/fill/w_305,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4a6d2_cd0f28849cf8410d8a43c83f6a2d7420~mv2.png" />
                    </div>
                    <div className="linkImage">
                        <Link className="linkTextImage" to="/products">CAMISETAS EM ALGODÃO</Link>
                    </div>
                </div>
                <div className="cardImageProduct">
                    <div>
                        <img src="https://static.wixstatic.com/media/d4a6d2_7531c28503564d359bc32408f0fc2ed0~mv2.png/v1/fill/w_305,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4a6d2_7531c28503564d359bc32408f0fc2ed0~mv2.png" />
                    </div>
                    <div className="linkImage">
                        <Link className="linkTextImage" to="/products">CAMISETAS EM ALGODÃO</Link>
                    </div>
                </div>
                <div className="cardImageProduct">
                    <div>
                        <img src="https://static.wixstatic.com/media/d4a6d2_ce10f38586c74293b5f19e3f8bf9836d~mv2.png/v1/fill/w_305,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4a6d2_ce10f38586c74293b5f19e3f8bf9836d~mv2.png" />
                    </div>
                    <div className="linkImage">
                        <Link className="linkTextImage" to="/products">CAMISETAS EM ALGODÃO</Link>
                    </div>
                </div>
                <div className="cardImageProduct">
                    <div>
                        <img src="https://static.wixstatic.com/media/d4a6d2_412bd3c6947b4cc0a7f43e3255e50215~mv2.png/v1/fill/w_305,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4a6d2_412bd3c6947b4cc0a7f43e3255e50215~mv2.png" />
                    </div>
                    <div className="linkImage">
                        <Link className="linkTextImage" to="/products">CAMISETAS EM ALGODÃO</Link>
                    </div>
                </div>
            </div>
            <div className="containerVideo">
                <div className="cardVideo">
                    <p style={{ color: " #00471b", fontSize: 50, fontWeight: "600" }}>Valorizamos</p>
                    <p style={{ color: " #00471b", fontSize: 45, display: "flex", marginTop: -45, fontWeight: "200" }}>a sua  <p style={{ paddingLeft: 10, fontWeight: "600" }}> Marca!</p></p>
                    <p style={{ marginTop: -20 }}>
                        O que você veste, diz muito sobre você, e nós,<br />
                        da Malharia Tropical, temos orgulho de fabricar<br />
                        produtos personalizados com qualidade.
                    </p>
                    <p>
                        Cada time tem sua história,<br />
                        nós te ajudamos a fazer a sua!
                    </p>
                    <br />
                    <div className="botaoOrcamento">
                        <Link to="/budget" style={{color:"white"}}>SOLICITE SEU ORÇAMENTO</Link>
                    </div>
                </div>
                <div>
                    <iframe width="600" height="353"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Home;