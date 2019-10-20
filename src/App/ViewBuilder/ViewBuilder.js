var DateDiff = require('date-diff');

class ViewBuilder {
    constructor(){
        this.createViewModel.bind(this);
        this.getTitleIndexes.bind(this);
        this.viewModel = {};
    }

    createViewModel(data){
        let titleRow = data[0];

        this.addBookingPlanning(data, this.getTitleIndexes(titleRow));

        return this.viewModel;
    }

    getTitleIndexes(titleRow){
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
                    titleIndexes.amountPerNightIndex = i;
                    break;
                case "paid out":
                    titleIndexes.amountPaidOutIndex = i;
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

    addBookingPlanning(data, titleIndexes){
        this.viewModel.oneDayBefore = 0;
        this.viewModel.oneWeekBefore = 0;
        this.viewModel.oneMonthBefore = 0;
        this.viewModel.moreThanOneMonthBefore = 0;

        for (let i = 1; i < data.length; i++) {
            let thisBooking = data[i];
            let thisStartDate = new Date(thisBooking[titleIndexes.startDateIndex]);
            let thisBookDate = new Date(thisBooking[titleIndexes.bookDateIndex]);
            let dateDiff = new DateDiff(thisStartDate, thisBookDate);

            console.log(thisStartDate + " | " + thisBookDate + " : " + dateDiff.days());

            if (dateDiff.days() <=1) {
                this.viewModel.oneDayBefore += 1;
            } else if (dateDiff.days() <=7) {
                this.viewModel.oneWeekBefore += 1;
            } else if (dateDiff.days() <= 30) {
                this.viewModel.oneMonthBefore += 1;
            } else if (dateDiff.days() > 30) {
                this.viewModel.moreThanOneMonthBefore += 1;
            }
        }
    }
}

export default ViewBuilder;