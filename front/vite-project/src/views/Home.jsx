import "../../src/App.css"
import ImgText from "../components/primary/imgtext/ImgText.jsx";
import texts from "../helpers/text.js";
import { useState } from "react";

const Home = () => {
    const [textsToShow, setTextsToShow] = useState(texts);
    return (
        <div>
            <h1>HOME</h1>
            <button path="/Appointmentform">agendar turno</button> 
            {
                textsToShow.map(text=>{
                    return <ImgText text={text} />;    
            })}
        </div>
    );
};

export default Home;