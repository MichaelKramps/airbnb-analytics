class OrderHelper{
    static isOrdered(array, orderedBy){
        if (array.length === 1) {
            return true;
        }

        for (let line = 0; line < array.length - 1; line++) {
            let currentLine = array[line];
            let nextLine = array[line + 1];

            let currentEntry = currentLine[orderedBy];
            let nextEntry = nextLine[orderedBy];

            if (nextEntry > currentEntry) {
                return false;
            }
        }

        return true;
    }
}

export default OrderHelper;