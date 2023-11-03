import { useState } from "react";
import StoryArea from "../../components/StoryArea"
import TypeArea from "../../components/TypeArea";
import interaction from "../../logic/userInteraction";
import locations from "../../data/story";
import "./style.css"

const Game = () => {

    const gameStart = locations[1];
    const [locat, setLocat] = useState(gameStart);
    const [storyBeat, setStoryBeat] = useState("");
    const [textInput, setTextInput] = useState("");
    const [response, setResponse] = useState([]);

    function handleChange(e) {
        e.preventDefault()
        setTextInput(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault()
        console.log(locations)
        let res = interaction(textInput, locat)
        if(res.includes("move")){
            const targetLoc = res.slice(12)
            const newLoc = locations.find((e) => e.location === targetLoc)
            console.log(newLoc)
            setLocat(newLoc)
        }
        if(response.length === 0){
            setResponse([res])
        } else if(response.length < 5 && res !== response[response.length - 1]) {
            setResponse([...response, res])
        } else {
            const newArr = response.slice(1)
            newArr.push(res)
            setResponse(newArr)
        }

    };

    return (
        <>
            <StoryArea loc={locat} />

            <div className="responseArea">
                <ul>
                    {response.map((res) => {
                        return (
                            <li>{`${res}`}</li>
                        )
                    })}
                </ul>
            </div>

            <form className="typeArea" onSubmit={handleSubmit}>
                <span>
                    <input type="text" onChange={handleChange} />
                    <input type="submit" />
                </span>
            </form>
        </>
    )
}

export default Game