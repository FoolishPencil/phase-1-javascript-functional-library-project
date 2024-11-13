// myEach - Executes the given function on each element of the collection (array or object)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection; // Ensures the original collection is returned
}

// myMap - Creates a new array populated with the results of calling a provided function on every element in the calling array or object
function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key, collection));
        }
    }
    return result;
}

// myReduce - Applies a function to each element in the collection, accumulating the result into a single output
function myReduce(collection, callback, accumulator) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        let i = 0;

        // If no accumulator is provided, set it to the first element
        if (accumulator === undefined) {
            accumulator = collection[0];
            i = 1;
        }

        // Loop through the array and apply the callback
        for (; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], i, collection);
        }
    }
    // Check if the collection is an object (excluding null)
    else if (typeof collection === 'object' && collection !== null) {
        let keys = Object.keys(collection);
        let i = 0;

        // If no accumulator is provided, set it to the first object's value
        if (accumulator === undefined) {
            accumulator = collection[keys[i]];
            i = 1;
        }

        // Loop through the object's keys and apply the callback
        for (; i < keys.length; i++) {
            accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
        }
    }

    return accumulator;
}


// myFind - Returns the first element in the collection that passes the test implemented by the provided function
function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
            return collection[i];
        }
    }
    return undefined;
}

// myFilter - Creates a new array with all elements that pass the test implemented by the provided function
function myFilter(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
            result.push(collection[i]);
        }
    }
    return result;
}

// mySize - Returns the size of the collection (number of items for arrays, number of keys for objects)
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// myFirst - Returns the first element(s) from an array. Optionally, can return the first `n` elements
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast - Returns the last element(s) from an array. Optionally, can return the last `n` elements
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys - Returns an array of an object's own enumerable property names
function myKeys(object) {
    return Object.keys(object);
}

// myValues - Returns an array of an object's own enumerable property values
function myValues(object) {
    return Object.values(object);
}
