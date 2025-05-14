import CarrosselFullWidth from "../../components/carrossel";
import "./style.home.css"

const items = [
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    <div>Slide 3</div>,
    <div>Slide 4</div>,
    <div>Slide 4</div>,
    <div>Slide 4</div>,
    <div>Slide 4</div>,
    <div>Slide 4</div>,
    <div>Slide 4</div>,
];

const Home = () => {
    return (
        <CarrosselFullWidth items={items} />
    )
}

export default Home;