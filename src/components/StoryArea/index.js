import locations from "../../data/story"
import {useState} from "react"

const StoryArea = ({loc}) => {
    // const [location, setLocation] = useState(loc)

    console.log('location is:', loc)
   
    return (
        <>
            <div>
                <p>{loc.intro}</p>
            </div>
        </>
    )
}

export default StoryArea