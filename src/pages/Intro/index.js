import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>You have been called in to restore a garden that was vandalised prior to its grand reopening</p>
            <button onClick={() => navigate("/game") }>
                Start Game
            </button>
        </div>
    )
}

export default Intro