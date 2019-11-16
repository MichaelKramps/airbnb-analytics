import React from 'react';
import SingleListingByMonth from "./SingleListingByMonth";

class DataByMonthAndByListing extends React.Component {

    render() {
        console.log(this.props.dataSplitByMonth);
        let dataSplitByMonth = this.props.dataSplitByMonth.map((listing) =>
            <SingleListingByMonth listingData={listing} />
        );
        return (
            <div>
                <h2>Statistics Split By Month</h2>
                {dataSplitByMonth}
            </div>
        )
    }

}

export default DataByMonthAndByListing;