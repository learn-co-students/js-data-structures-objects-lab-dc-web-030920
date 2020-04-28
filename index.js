// Write your solution in this file!

let driver = {

    name: "Sam"
}

const updateDriverWithKeyAndValue = (obj, key, value) => {
    const newObj = Object.assign({}, obj);
    newObj[key] = value
    return newObj
}


const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {

    obj[key] = value
    return obj
}

const deleteFromDriverByKey = (obj, key) => {
 
    const newObj = Object.assign({}, obj);
    
    delete newObj[key];
    return newObj
    
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {

    delete obj[key]
    return obj
}