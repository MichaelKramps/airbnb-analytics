import React from 'react';
import SingleYearOfListing from "./SingleYearOfListing";
import ViewModelSorter from "../../ViewModelManipulation/ViewModelSorter";

class SingleListingByYear extends React.Component {

    render() {
        return (
            <div className="data-grouping">
                <h3>{this.props.listingData.name}</h3>
                <div className={"static-data-container"}>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByYear, this.props.index)}}>Year &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByPayout, this.props.index)}}>Total Paid &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByStays, this.props.index)}}>Total Stays &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByNights, this.props.index)}}>Total Nights &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByNightsPerBooking, this.props.index)}}>Avg. Nights/Stay &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderYearlyStatsByPricePerNight, this.props.index)}}>Avg. Price/Night &#x21D5;</div>
                </div>
                {this.props.listingData.years.map((year, index) =>
                    <SingleYearOfListing
                        key={index}
                        year={year.year}
                        amountPaid={year.amountPaid}
                        totalStays={year.totalStays}
                        totalNights={year.totalNights}
                        averageNightsPerGuest={year.averageNightsPerGuest}
                        averagePricePerNight={year.averagePricePerNight} />)
                }
                <div className={"static-data-container average-row"}>
                    <div>Yearly Average</div>
                    <div>{this.props.listingData.averagePaid}</div>
                    <div>{this.props.listingData.averageStays}</div>
                    <div>{this.props.listingData.averageNights}</div>
                    <div>{this.props.listingData.averageNightsPerGuest}</div>
                    <div>{this.props.listingData.averagePricePerNight}</div>
                </div>
            </div>
        )
    }

}

export default SingleListingByYear;