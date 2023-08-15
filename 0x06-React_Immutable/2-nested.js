export default function accessImmutableObject(object, array) {
    if (typeof object !== 'object' || object === null) {
        return undefined;
    }

    let currentValue = object;
    for (const key of array) {
        if (currentValue === undefined || currentValue === null){
            return undefined;
        }

        if (currentValue instanceof Map) {
            currentValue = currentValue.get(key);

        } else if (currentValue.hasOwnProperty(key)) {
            currentValue = currentValue[key];
        } else {
            return undefined;
        }
    }

    return currentValue;

}