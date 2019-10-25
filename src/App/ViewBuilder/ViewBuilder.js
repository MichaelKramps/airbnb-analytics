import TitleIndexer from './TitleIndexer/TitleIndexer'
var DateDiff = require('date-diff');

class ViewBuilder {
    constructor(){
        this.createViewModel.bind(this);
        this.viewModel = {};
    }

    createViewModel(data){

        return this.viewModel;
    }
}

export default ViewBuilder;