import React from 'react'
import TotalStaysByListing from './TotalStaysByListing/TotalStaysByListing'
import TotalNightsByListing from "./TotalNightsByListing/TotalNightsByListing";
import AmountPaidByListing from "./AmountPaidByListing/AmountPaidByListing";
import AveragePricePerNightByListing from "./AveragePricePerNightByListing/AveragePricePerNightByListing";
import AverageNightsPerGuestByListing from "./AverageNightsPerGuestByListing/AverageNightsPerGuestByListing";
import DataByYearAndByListing from "./DataSplitByYearAndByListing/DataByYearAndByListing";

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <TotalStaysByListing totalStaysByListing={this.props.totalStaysByListing} />
                <TotalNightsByListing totalNightsByListing={this.props.totalNightsByListing} />
                <AverageNightsPerGuestByListing averageNightsPerGuestByListing={this.props.averageNightsPerGuestByListing} />
                <AmountPaidByListing amountPaidByListing={this.props.amountPaidByListing} />
                <AveragePricePerNightByListing averagePricePerNightByListing={this.props.averagePricePerNightByListing} />

                <DataByYearAndByListing dataSplitByYear={this.props.overallStatsByYearAndByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;