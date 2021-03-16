class OrderHelper{
    static isOrdered(array, orderedBy){
        if (array.length === 1) {
            return true;
        }

        for (let line = 0; line < array.length - 1; line++) {
            let currentLine = array[line];
            let nextLine = array[line + 1];

            let currentEntry = parseFloat(currentLine[orderedBy]);
            let nextEntry = parseFloat(nextLine[orderedBy]);

            if (nextEntry > currentEntry) {
                return false;
            }
        }

        return true;
    }

    static isDateOrdered(array) {
        if (array.length === 1) {
            return true;
        }

        for (let line = 0; line < array.length - 1; line++) {
            let currentLine = array[line];
            let nextLine = array[line + 1];

            let currentDate = new Date();
            currentDate.setFullYear(currentLine.year);
            currentDate.setMonth(OrderHelper.setMonthFrom(currentLine.month));

            let nextDate = new Date();
            nextDate.setFullYear(nextLine.year);
            nextDate.setMonth(OrderHelper.setMonthFrom(nextLine.month));

            if (nextDate > currentDate) {
                return false;
            }
        }

        return true;
    }

    static setMonthFrom(monthString) {
        switch(monthString.toLowerCase()) {
            case "january":
                return 0;
            case "february":
                return 1;
            case "march":
                return 2;
            case "april":
                return 3;
            case "may":
                return 4;
            case "june":
                return 5;
            case "july":
                return 6;
            case "august":
                return 7;
            case "september":
                return 8;
            case "october":
                return 9;
            case "november":
                return 10;
            case "december":
                return 11;
            default:
                return 0;
        }
    }
}

export default OrderHelper;