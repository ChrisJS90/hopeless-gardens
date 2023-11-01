import locations from "../../data/story"
import {useState} from "react"

const StoryArea = ({loc}) => {
    const [location, setLocation] = useState(loc)
    // const checkLoc = loc.toLowerCase()
    // for(let i = 0; i < locations.length; i++) {
    //     console.log(`checking db location: ${locations[i]}`)
    //     console.log(typeof locations[i])
        
    //     console.log(`checking check location: ${checkLoc}`)
    //     console.log(typeof checkLoc)


    //     if(locations.location === checkLoc){
    //         setLocation(locations[i])

    //     }
    // }
    // console.log(`checking object ${location}`)



    


    return (
        <>
            <div>
                <p>{`${location.intro}`}</p>
            </div>
        </>
    )
}

export default StoryArea