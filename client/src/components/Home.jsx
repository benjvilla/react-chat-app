//import necessary elements
import "../styles/App.css";
import Bros from '../img/onion.jpg';

//Home component rendered on app start
export default function Home() {
    return (
        <div id='homepage'> 
            <h2>Welcome to Soapstone Messenger!</h2>
            <img id="bros" src={Bros} />
        </div>
    )
}