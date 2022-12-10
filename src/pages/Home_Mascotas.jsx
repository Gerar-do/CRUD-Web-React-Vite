import { BrowserRouter } from "react-router-dom";
import App from '../Componentes/App'

function Home() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Home;