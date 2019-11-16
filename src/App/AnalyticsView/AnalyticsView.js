import React from 'react'
import DataByYearAndByListing from "./DataSplitByYearAndByListing/DataByYearAndByListing";
import DataByListing from "./DataByListing/DataByListing";

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <DataByListing
                    totalStaysByListing={this.props.totalStaysByListing}
                    totalNightsByListing={this.props.totalNightsByListing}
                    averageNightsPerGuestByListing={this.props.averageNightsPerGuestByListing}
                    amountPaidByListing={this.props.amountPaidByListing}
                    averagePricePerNightByListing={this.props.averagePricePerNightByListing} />

                <DataByYearAndByListing dataSplitByYear={this.props.overallStatsByYearAndByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;