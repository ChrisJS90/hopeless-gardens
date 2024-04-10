import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>
                <Typewriter
                    words={["You have been called in to restore a garden that was vandalised prior to its grand reopening"]}
                    loop={1}
                />
            </p>
            <button onClick={() => navigate("/opening")}>
                Start Game
            </button>
        </div>
    )
}

export default Intro