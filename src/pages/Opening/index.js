import locations from "../../data/story";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Opening = () => {
    const navigate = useNavigate()
    const start = locations.find((e) => e.id === 1)
    console.log(start)
    const [beat, setBeat] = useState(start.intro)

    return (
        <>
            <div>
                <p>{`${beat}`}</p>
            </div>
            <div>
                {beat === start.intro &&
                <span>
                    <button onClick={() => setBeat(start.run)}>Run</button>
                    <button onClick={() => setBeat(start.enter)}>Enter</button>
                </span>}
                {beat === start.run &&
                <span>
                    <button onClick={() => navigate("/")}>THE END</button>
                </span>}
                {beat === start.enter &&
                <span>
                    <button onClick={() => navigate("/game")}>Continue...</button>
                </span>}
            </div>
        </>
    )
}

export default Opening

