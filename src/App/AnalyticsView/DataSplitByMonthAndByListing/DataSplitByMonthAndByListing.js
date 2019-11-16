import React from 'react';
import SingleListingByMonth from "./SingleListingByMonth";
import DataByMonthClickFilter from "./DataByMonthClickFilter";

class DataByMonthAndByListing extends React.Component {

    render() {
        let dataSplitByMonth = this.props.dataSplitByMonth.map((listing) =>
            <SingleListingByMonth listingData={listing} />
        );
        return (
            <div>
                <h2>Statistics Split By Month</h2>
                {dataSplitByMonth}
                <DataByMonthClickFilter />
            </div>
        )
    }

}

export default DataByMonthAndByListing;