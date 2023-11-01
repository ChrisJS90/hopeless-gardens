import locations from "../../data/story"
import {useState} from "react"

const StoryArea = ({loc}) => {
    const [location, setLocation] = useState(loc)
   
    return (
        <>
            <div>
                <p>{`${location.intro}`}</p>
            </div>
        </>
    )
}

export default StoryArea