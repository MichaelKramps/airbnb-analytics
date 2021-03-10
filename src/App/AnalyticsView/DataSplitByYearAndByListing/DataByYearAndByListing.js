import React from 'react';
import SingleListingByYear from "./SingleListingByYear";

class DataByYearAndByListing extends React.Component {

    render() {
        let dataSplitByYear = this.props.dataSplitByYear.map((listing, index) =>
            <SingleListingByYear
                key={index}
                index={index}
                listingData={listing}
                sortViewModelBy={this.props.sortViewModelBy} />
        );
        return (
            <div className="main-group" filtergroup="by-year">
                {dataSplitByYear}
            </div>
        )
    }

}

export default DataByYearAndByListing;