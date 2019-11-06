class TitleIndexer{

    static getTitleIndexes(titleRow){
        let titleIndexes = {};

        for (let i = 0; i < titleRow.length; i++){
            let thisTitle = titleRow[i];
            switch(thisTitle){
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
                case "nights":
                    titleIndexes.numberNightsIndex = i;
                    break;
                case "type":
                    titleIndexes.rowTypeIndex = i;
                    break;
                case "listing":
                    titleIndexes.listingNameIndex = i;
                    break;
                case "amount":
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