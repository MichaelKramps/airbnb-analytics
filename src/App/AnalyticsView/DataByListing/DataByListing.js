import React from 'react'
import TotalStaysByListing from './TotalStaysByListing/TotalStaysByListing'
import TotalNightsByListing from "./TotalNightsByListing/TotalNightsByListing";
import AmountPaidByListing from "./AmountPaidByListing/AmountPaidByListing";
import AveragePricePerNightByListing from "./AveragePricePerNightByListing/AveragePricePerNightByListing";
import AverageNightsPerGuestByListing from "./AverageNightsPerGuestByListing/AverageNightsPerGuestByListing";

class DataByListing extends React.Component {

    render() {
        return(
            <div>
                <h2>Overall Data Split By Listing</h2>
                <TotalStaysByListing totalStaysByListing={this.props.totalStaysByListing} />
                <TotalNightsByListing totalNightsByListing={this.props.totalNightsByListing} />
                <AverageNightsPerGuestByListing averageNightsPerGuestByListing={this.props.averageNightsPerGuestByListing} />
                <AmountPaidByListing amountPaidByListing={this.props.amountPaidByListing} />
                <AveragePricePerNightByListing averagePricePerNightByListing={this.props.averagePricePerNightByListing} />
            </div>
        )
    };
}

export default DataByListing;