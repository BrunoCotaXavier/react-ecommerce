import "./style.home.css"
import CarrosselFullWidth from "../../components/carrossel";

import iconShirt from "../../assets/icon-shirt.svg"
import iconBudget from "../../assets/icon-budget.svg"
import iconAbout from "../../assets/icon-about.svg"
import iconCall from "../../assets/icon-call.svg"
import iconPhone from "../../assets/icon-phone.svg"

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
                        <p className="titleCardHome" style={{ color: "#007940" }}>ORÇAMENTO</p>
                    </div>
                    <div>
                        <p className="subTitleCardHome" style={{ color: "#007940" }}>Já tem ideia de produto, arte e quantidade? Solicite seu orçamento.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/budget" style={{ color: "#007940" }}> CLIQUE AQUI ></Link>
                    </div>
                </div>
                <div className="cardHome">
                    <div>
                        <img width={100} src={iconAbout} />
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
                        <Link to="/budget" style={{ color: "white" }}>SOLICITE SEU ORÇAMENTO</Link>
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
            <div className="containerAboutHome">
                <div className="cardAboutHomeImage">
                    <img className="responsiveImage" src="https://static.wixstatic.com/media/c97d9f_95c65e6e793749e981b500955e0ff93d~mv2.jpg/v1/fill/w_1000,h_452,al_c,q_85,enc_avif,quality_auto/c97d9f_95c65e6e793749e981b500955e0ff93d~mv2.jpg" />
                </div>
                <div className="cardAboutHome">
                    <div className="containerTitleAboutHome">
                        <p className="titleAboutHome">SOBRE NÓS</p>
                    </div>
                    <div className="containerDescriptionAboutHome">
                        <p className="descriptionAboutHome">
                            Começamos com roupas de baixo,
                            passamos para camisetas coloridas, uniformes, blusões universitários e hoje somos a solução que você busca para roupas básicas, personalizadas e confortáveis!
                            Há mais de 70 anos confeccionando roupas
                            de acordo com a sua solicitação.
                        </p>
                        <p className="descriptionAboutHome">
                            Há mais de 70 anos confeccionando roupas
                            de acordo com a sua solicitação.
                        </p>
                    </div>
                    <div>
                        <Link to="/about" style={{ color: "white" }}>LEIA MAIS ></Link>
                    </div>
                </div>
            </div>
            <div className="containerContactHome">
                <div className="cardContactHome">
                    <div>
                        <p className="titleContactHome">CONTATO</p>
                    </div>
                    <div>
                        <span className="descriptionContactHome">Entre em contato conosco ou envie um e-mail <br /> para</span>
                        <span style={{ color: "#007940", paddingLeft: 5, fontWeight: "bold" }}>contato@malhariatropical.com.br</span>
                    </div>
                    <div className="sectionPhone">
                        <div className="containerPhone" style={{ marginBottom: -20 }}>
                            <img src={iconCall} />
                            <p className="phoneCall"> +55 (11) 949543274</p>
                        </div>
                        <div className="containerPhone">
                            <img src={iconPhone} />
                            <p className="phoneCall"> +55 (11) 949543274</p>
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <span>ou peça seu </span>
                            <Link to="/budget" className="buttonBudget">ORÇAMENTO</Link>
                        </div>
                    </div>
                </div>
                <div className="cardContactHome">
                    <form>
                        <div className="firstSectionFrom">
                            <div style={{ padding: 10 }}>
                                <label>Nome *</label>
                                <br />
                                <input className="inputForm" type="text" name="firstName" required />
                            </div>
                            <div style={{ padding: 10 }}>
                                <label>Sobrenome *</label>
                                <br />
                                <input className="inputForm" type="text" name="lastName" required />
                            </div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <label>Email *</label>
                            <br />
                            <input className="inputForm" type="email" name="email" required />
                        </div>
                        <div className="firstSectionFrom">
                            <div style={{ padding: 10 }}>
                                <label>Telefone *</label>
                                <br />
                                <input className="inputForm" type="tel" name="telephone" required />
                            </div>
                            <div style={{ padding: 10 }}>
                                <label>Empresa *</label>
                                <br />
                                <input className="inputForm" type="text" name="company" required />
                            </div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <label>Mensagem *</label>
                            <br />
                            <textarea className="textAreaForm" name="mensage" required />
                        </div>
                        <div style={{ padding: 10 }}>
                            <input type="checkbox" name="consent" required />
                            <label className="labelCheckbox">Eu concordo em receber comunicações.</label>
                        </div>
                        <div className="sectionButtonForm">
                            <button className="buttonSubmit" type="submit">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="containerLocation">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4847834277875!2d-46.567205!3d-23.586088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce4232799d3%3A0x89a1a6e30a4b8c91!2sR.%20Cantidiano%20Guimar%C3%A3es%2C%20132%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003132-060!5e0!3m2!1spt-BR!2sbr!4v1715975472435!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Home;