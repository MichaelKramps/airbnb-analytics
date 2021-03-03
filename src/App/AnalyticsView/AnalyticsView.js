import React from 'react'
import DataByYearAndByListing from "./DataSplitByYearAndByListing/DataByYearAndByListing";
import DataByListing from "./DataByListing/DataByListing";
import DataByMonthAndByListing from "./DataSplitByMonthAndByListing/DataSplitByMonthAndByListing";

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <h2>Data Filters:</h2>
                <div className="main-filter filter">
                    <div className="active" filters="all-time">All Time</div>
                    <div filters="by-year">By Year</div>
                    <div filters="by-month">By Month</div>
                </div>
                <p>*Some data is automatically removed, including bookings that were cancelled</p>
                <DataByListing dataByListing={this.props.totalStatsByListing} />
                <DataByYearAndByListing dataSplitByYear={this.props.overallStatsByYearAndByListing} />
                <DataByMonthAndByListing dataSplitByMonth={this.props.overallStatsByMonthAndByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;