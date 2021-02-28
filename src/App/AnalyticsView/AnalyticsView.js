import React from 'react'
import DataByYearAndByListing from "./DataSplitByYearAndByListing/DataByYearAndByListing";
import DataByListing from "./DataByListing/DataByListing";
import DataByMonthAndByListing from "./DataSplitByMonthAndByListing/DataSplitByMonthAndByListing";

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <DataByListing dataByListing={this.props.totalStatsByListing} />
                <DataByYearAndByListing dataSplitByYear={this.props.overallStatsByYearAndByListing} />
                <DataByMonthAndByListing dataSplitByMonth={this.props.overallStatsByMonthAndByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;