import React from 'react';
import SingleListingByYear from "./SingleListingByYear";

class DataByYearAndByListing extends React.Component {

    render() {
        let dataSplitByYear = this.props.dataSplitByYear.map((listing) =>
            <SingleListingByYear listingData={listing} />
        );
        return (
            <div>
                <h2>Statistics Split By Year</h2>
                {dataSplitByYear}
            </div>
        )
    }

}

export default DataByYearAndByListing;