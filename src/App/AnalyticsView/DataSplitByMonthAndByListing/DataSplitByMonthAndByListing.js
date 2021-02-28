import React from 'react';
import SingleListingByMonth from "./SingleListingByMonth";

class DataByMonthAndByListing extends React.Component {

    render() {
        let dataSplitByMonth = this.props.dataSplitByMonth.map((listing) =>
            <SingleListingByMonth listingData={listing} />
        );
        return (
            <div className="main-group" filterGroup="by-month">
                <div className="filter">
                    <div month="January" filters="january">January</div>
                    <div month="February" filters="january">February</div>
                    <div month="March" filters="january">March</div>
                    <div month="April" filters="january">April</div>
                    <div month="May" filters="january">May</div>
                    <div month="June" filters="january">June</div>
                    <div month="July" filters="january">July</div>
                    <div month="August" filters="january">August</div>
                    <div month="September" filters="january">September</div>
                    <div month="October" filters="january">October</div>
                    <div month="November" filters="january">November</div>
                    <div month="December" filters="january">December</div>
                </div>
                {dataSplitByMonth}
            </div>
        )
    }

}

export default DataByMonthAndByListing;