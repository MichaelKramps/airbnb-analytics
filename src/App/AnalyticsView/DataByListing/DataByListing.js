import React from 'react'
import DataForSingleListing from "./DataForSingleListing";
import ViewModelSorter
    from "../../ViewModelManipulation/ViewModelSorter";

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
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderTotalStatsByPayout)}}>Total Paid &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderTotalStatsByStays)}}>Total Stays &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderTotalStatsByNights)}}>Total Nights &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderTotalStatsByNightsPerBooking)}}>Avg. Nights/Stay &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderTotalStatsByPricePerNight)}}>Avg. Price/Night &#x21D5;</div>
                </div>
                {dataSplitByListing}
            </div>
        )
    };
}

export default DataByListing;