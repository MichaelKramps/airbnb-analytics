class TitleIndexer{

    static get staticIndexes() {
        return {
            startDateIndex: 0,
            endDateIndex: 1,
            bookDateIndex: 2,
            paymentDateIndex: 3,
            statusIndex: 4,
            numberNightsIndex: 5,
            rowTypeIndex: 6,
            listingNameIndex: 7,
            amountPaidIndex: 8,
            paidOutIndex: 9,
            hostFeeIndex: 10,
            cleaningFeeIndex: 11,
            confirmationCodeIndex: 12
        }
    }

    static getTitleIndexes(titleRow){
        let titleIndexes = {};

        for (let i = 0; i < titleRow.length; i++){
            let thisTitle = titleRow[i].toLowerCase();
            switch(thisTitle.trim()){
                case "start date":
                    titleIndexes.startDateIndex = i;
                    break;
                case "end date":
                    titleIndexes.endDateIndex = i;
                    break;
                case "booked":
                    titleIndexes.bookDateIndex = i;
                    break;
                case "date":
                    titleIndexes.paymentDateIndex = i;
                    break;
                case "status":
                    titleIndexes.statusIndex = i;
                    break;
                case "nights":
                case "# of nights":
                    titleIndexes.numberNightsIndex = i;
                    break;
                case "type":
                    titleIndexes.rowTypeIndex = i;
                    break;
                case "listing":
                    titleIndexes.listingNameIndex = i;
                    break;
                case "amount":
                case "earnings":
                    titleIndexes.amountPaidIndex = i;
                    break;
                case "paid out":
                    titleIndexes.paidOutIndex = i;
                    break;
                case "host fee":
                    titleIndexes.hostFeeIndex = i;
                    break;
                case "cleaning fee":
                    titleIndexes.cleaningFeeIndex = i;
                    break;
                case "confirmation code":
                    titleIndexes.confirmationCodeIndex = i;
                    break;
                default:
                    break;
            }
        }
        return titleIndexes
    }
}

export default TitleIndexer;