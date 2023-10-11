

function interaction(input) {
    const uI = input.toLowerCase;
    let res = ""

    if(uI.includes("move")){
        // if statements for movement
    }
    else if(uI.includes("search")) {
        // if statements for seraching
    }
    else if(uI.includes("pick")) {
        // if statements for picking up
    }
    else if(uI.includes("use")) {
        // if statements for using
    }
    else if(uI.includes("examine")) {
        // if statements for examining 
    }
    else if(uI.includes("check")) {
        // if statements for checking inventory
    }
    else if(uI === "help") {
        res = "type move, search, pick up, use, examine, or check"
        return res
    }

}

export default interaction