import locations from "../data/story";


function interaction(input, locat) {
    const uI = input.toLowerCase();
    const interactables = locat.poi.map((e) => e.id)
    const areas = locations.map((e) => e.location)
    console.log(interactables)
    let res = ""

    function sliceNoun(text) {
        let noun = "";
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if (count > 0) {
                noun = noun + text[i]
            }
            if (text[i] === " ") {
                count++
            }
        }
        return noun
    }


    if (uI.includes("move")) {
        // if statements for movement
        const noun = sliceNoun(uI);
        if(areas.includes(noun)){
            res = `You move to ${noun}`
        } else {
            res = `${noun} not found`
        }

    }
    else if (uI.includes("search")) {
        // if statements for seraching
    }
    else if (uI.includes("pick")) {
        // if statements for picking up
    }
    else if (uI.includes("use")) {
        // if statements for using
    }
    else if (uI.includes("examine")) {
        // if statements for examining 
        const noun = sliceNoun(uI);
        console.log(typeof noun)
        console.log(noun)
        if(interactables.includes(noun)) {
            const item = locat.poi.find((e) => e.id === noun);
            console.log(item)
            res = item.initial
        } else {
            res = `You do not find ${noun}`
        }
    }
    else if (uI.includes("check")) {
        // if statements for checking inventory
    }
    else if (uI === "help") {
        res = "type move, search, pick up, use, examine, or check"
    }
    return res
}

export default interaction