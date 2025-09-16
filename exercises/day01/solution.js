export function normalizeUrl (base, path) {
    let baseParsed = base.split(":")[0] + "://" + base.split(":")[1].replaceAll("/","")
    let pathParsed = path.replaceAll("/", "")
    let result = ""
    if(pathParsed === ""){
        result = baseParsed
    }
    else{
        result = baseParsed + "/" +  pathParsed
    }
    return result
}

export function pickHeaders( inputObj = {}) {
    let pickedHeaders = {age: 0, "xCache": "BYPASS"}
    for(let key in inputObj){
        if(key.toLowerCase() === "age"){
            pickedHeaders.age =  Number(inputObj[key].toString())
        }
        else{
            if(key.toLowerCase() === "x-cache" || key.toLowerCase() === "xcache"){
                pickedHeaders.xCache =  inputObj[key].toString().toUpperCase()
            }
        }
    }
    return pickedHeaders
}