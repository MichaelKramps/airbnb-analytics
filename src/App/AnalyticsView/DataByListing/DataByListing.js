import React from 'react'
import DataForSingleListing from "./DataForSingleListing";

class DataByListing extends React.Component {

    render() {
        let dataSplitByListing = this.props.dataByListing.map((listing) =>
            <DataForSingleListing
                name={listing.name}
                totalStays={listing.totalStays}
                totalNights={listing.totalNights}
                averageNightsPerGuest={listing.averageNightsPerGuest}
                totalPaid={listing.totalPaid}
                averagePricePerNight={listing.averagePricePerNight}
            />
        );
        return(
            <div>
                <h2>All Time Stats Split By Listing</h2>
                <div className="static-data-container">
                    <div>Listing</div>
                    <div>Number of Stays</div>
                    <div>Number of Nights</div>
                    <div>Average Nights Per Booking</div>
                    <div>Total Paid</div>
                    <div>Average Price Per Night</div>
                </div>
                {dataSplitByListing}
            </div>
        )
    };
}

export default DataByListing;