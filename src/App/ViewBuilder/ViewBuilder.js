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
                case "Start date":
                    titleIndexes.startDateIndex = i;
                    break;
                case "End date":
                    titleIndexes.endDateIndex = i;
                    break;
                case "Booked":
                    titleIndexes.bookDateIndex = i;
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