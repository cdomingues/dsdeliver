import './styles.css';
import {ReactComponent as MainImage} from './main.svg';

function Home(){
    return (
        <div className="homeContainer">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">Faça seu pedido<br /> que entregamos<br /> pra você!!!</h1>
                    <h3 className="home-subttitle">Escolha o seu pedido e em poucos minutos <br/> levaremoss na sua porta</h3>
                    <a className="home-btn-order" href="orders">FAZER PEDIDO</a>
                </div>
                <div className="home-image">
                    <MainImage/>
                </div>
            </div>
        </div>
    )
}

export default Home;