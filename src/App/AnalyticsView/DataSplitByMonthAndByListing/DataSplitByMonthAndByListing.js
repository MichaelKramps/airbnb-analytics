import React from 'react';
import SingleListingByMonth from "./SingleListingByMonth";

class DataByMonthAndByListing extends React.Component {

    render() {
        let dataSplitByMonth = this.props.dataSplitByMonth.map((listing, index) =>
            <SingleListingByMonth
                key={index}
                index={index}
                listingData={listing}
                sortViewModelBy={this.props.sortViewModelBy} />
        );
        return (
            <div className="main-group" filtergroup="by-month">
                <div className="filter">
                    <div month="January" filters="January">January</div>
                    <div month="February" filters="February">February</div>
                    <div month="March" filters="March">March</div>
                    <div month="April" filters="April">April</div>
                    <div month="May" filters="May">May</div>
                    <div month="June" filters="June">June</div>
                    <div month="July" filters="July">July</div>
                    <div month="August" filters="August">August</div>
                    <div month="September" filters="September">September</div>
                    <div month="October" filters="October">October</div>
                    <div month="November" filters="November">November</div>
                    <div month="December" filters="December">December</div>
                </div>
                {dataSplitByMonth}
            </div>
        )
    }

}

export default DataByMonthAndByListing;