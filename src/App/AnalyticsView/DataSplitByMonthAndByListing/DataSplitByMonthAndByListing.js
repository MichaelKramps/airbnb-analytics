import React from 'react';
import SingleListingByMonth from "./SingleListingByMonth";

class DataByMonthAndByListing extends React.Component {

    render() {
        let dataSplitByMonth = this.props.dataSplitByMonth.map((listing) =>
            <SingleListingByMonth listingData={listing} />
        );
        return (
            <div>
                <h2>Statistics Split By Month</h2>
                <div className={"month-filter"}>
                    <span month="January">January</span>
                    <span month="February">February</span>
                    <span month="March">March</span>
                    <span month="April">April</span>
                    <span month="May">May</span>
                    <span month="June">June</span>
                    <span month="July">July</span>
                    <span month="August">August</span>
                    <span month="September">September</span>
                    <span month="October">October</span>
                    <span month="November">November</span>
                    <span month="December">December</span>
                </div>
                {dataSplitByMonth}
            </div>
        )
    }

}

export default DataByMonthAndByListing;