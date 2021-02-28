import React from 'react';
import SingleListingByYear from "./SingleListingByYear";

class DataByYearAndByListing extends React.Component {

    render() {
        let dataSplitByYear = this.props.dataSplitByYear.map((listing) =>
            <SingleListingByYear listingData={listing} />
        );
        return (
            <div className="main-group" filterGroup="by-year">
                {dataSplitByYear}
            </div>
        )
    }

}

export default DataByYearAndByListing;