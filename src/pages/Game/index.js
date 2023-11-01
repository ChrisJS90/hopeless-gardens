import { useState } from "react";
import StoryArea from "../../components/StoryArea"
import TypeArea from "../../components/TypeArea";
import interaction from "../../logic/userInteraction"; 
import locations from "../../data/story";

const Game = () => {

const gameStart = locations[0]
const [location, setLocation] = useState(gameStart)
const [storyBeat, setStoryBeat] = useState("");
const [textInput, setTextInput] = useState("")

function handleChange(e) {
    e.preventDefault()
    setTextInput(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    setStoryBeat()
}
console.log('check game loop')

    return(
        <>
            <StoryArea loc={location} />
            <form className="typeArea" onSubmit={handleSubmit}>
                <span>
                    <input type="text" onChange={handleChange}/>
                    <input type="submit"/>
                </span>
            </form>
        </>
    )
}

export default Game