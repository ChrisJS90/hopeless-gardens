import locations from "../../data/story"
import {useState} from "react"

const StoryArea = (loc) => {
    const [location, setLocation] = useState()
    const checkLoc = loc.toLowerCase
    for(let i = 0; i < locations.length; i++) {
        if(locations.location === checkLoc){
            setLocation(checkLoc)
        }
    }

    


    return (
        <>
            <p></p>
        </>
    )
}

export default StoryArea