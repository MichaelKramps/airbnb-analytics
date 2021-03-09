import React from 'react'
import DataForSingleListing from "./DataForSingleListing";

class DataByListing extends React.Component {

    render() {
        let dataSplitByListing = this.props.dataByListing.map((listing, index) =>
            <DataForSingleListing
                key={index}
                name={listing.name}
                totalStays={listing.totalStays}
                totalNights={listing.totalNights}
                averageNightsPerGuest={listing.averageNightsPerGuest}
                totalPaid={listing.totalPaid}
                averagePricePerNight={listing.averagePricePerNight}
            />
        );
        return(
            <div className="main-group active data-grouping" filtergroup="all-time">
                <div className="static-data-container">
                    <div>Listing</div>
                    <div onClick={this.props.sortByPayout}>Total Paid</div>
                    <div>Total Stays</div>
                    <div>Total Nights</div>
                    <div>Average Nights/Booking</div>
                    <div>Average Price/Night</div>
                </div>
                {dataSplitByListing}
            </div>
        )
    };
}

export default DataByListing;