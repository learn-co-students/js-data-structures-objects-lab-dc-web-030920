// function completeTask() {
    
// }

// const driver = {


// }

// updateDriverWithKeyAndValue(driver, key, value)
// ✓ returns a driver with the original key value pairs and the new key value pair
// ✓ it does not modify the original driver, but rather returns a clone with the new data

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value });
}

const driver = {}

const newDriver = updateDriverWithKeyAndValue(obj, key, value);

newDrivers;
drivers; 


// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
// ✓ updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}


///
// deleteFromDriverByKey(driver, key)
// ✓ deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// ✓ does not modify the original driver (it is non-destructive)

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key]
    return newDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver; 

}