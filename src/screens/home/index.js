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
                        <p className="titleCardHome">ORÇAMENTO</p>
                    </div>
                    <div>
                        <p className="subTitleCardHome">Já tem ideia de produto, arte e quantidade? Solicite seu orçamento.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/budget"> CLIQUE AQUI </Link>
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
                        <p className="subTitleCardHome">Conheça nossas opções de produtos disponíveis.</p>
                    </div>
                    <div>
                        <Link className="linkCardHome" to="/products"> Conheça > </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;