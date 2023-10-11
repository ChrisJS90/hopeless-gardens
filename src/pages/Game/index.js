import { useState } from "react";
import StoryArea from "../../components/StoryArea"
import TypeArea from "../../components/TypeArea";
import interaction from "../../logic/userInteraction"; 
import locations from "../../data/story";

const Game = () => {

const [location, setLocation] = useState("opening")
const [storyBeat, setStoryBeat] = useState();
const [textInput, setTextInput] = useState()

function handleChange(e) {
    setTextInput(e.target.value)
}

function handleSubmit(e) {
    setStoryBeat()
}

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