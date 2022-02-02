// code your solution here
let superbowlWin = (arr) =>{
    let win = arr.find(finder);
    if (win != undefined){
        return win["year"];
    }else{
        return undefined;
    }
}
function finder(arr){
    return arr.result === "W";
}

