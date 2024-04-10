import locations from "../../data/story"
import {useState} from "react"
import { Typewriter } from "react-simple-typewriter"

const StoryArea = ({loc}) => {
    // const [location, setLocation] = useState(loc)

    console.log('location is:', loc)

    const text = [loc.intro]
   
    return (
        <>
            <div>
                {/* <p>{loc.intro}</p> */}
                <Typewriter
                words={text}
                loop={1}
                cursor={true}
                typeSpeed={80}
                />

            </div>
        </>
    )
}

export default StoryArea