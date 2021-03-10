import React from 'react';
import SingleMonthOfListing from "./SingleMonthOfListing";
import ViewModelSorter from "../../ViewModelManipulation/ViewModelSorter";

class SingleListingByMonth extends React.Component {

    render() {
        return (
            <div className="data-grouping">
                <h3>{this.props.listingData.name}</h3>
                <div className={"static-data-container"}>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByMonth, this.props.index)}}>Month &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByPayout, this.props.index)}}>Total Paid &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByStays, this.props.index)}}>Total Stays &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByNights, this.props.index)}}>Total Nights &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByNightsPerBooking, this.props.index)}}>Avg. Nights/Stay &#x21D5;</div>
                    <div onClick={() => {this.props.sortViewModelBy(ViewModelSorter.orderMonthlyStatsByPricePerNight, this.props.index)}}>Avg. Price/Night &#x21D5;</div>
                </div>
                {this.props.listingData.months.map((month, index) =>
                    <SingleMonthOfListing
                        key={index}
                        year={month.year}
                        month={month.month}
                        amountPaid={month.amountPaid}
                        totalStays={month.totalStays}
                        totalNights={month.totalNights}
                        averageNightsPerGuest={month.averageNightsPerGuest}
                        averagePricePerNight={month.averagePricePerNight} />)
                }
            </div>
        )
    }

}

export default SingleListingByMonth;