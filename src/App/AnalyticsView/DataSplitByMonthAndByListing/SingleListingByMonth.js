import React from 'react';
import SingleMonthOfListing from "./SingleMonthOfListing";

class SingleListingByMonth extends React.Component {

    render() {
        return (
            <div className="data-grouping">
                <h3>{this.props.listingData.name}</h3>
                <div className={"static-data-container"}>
                    <div>Month</div>
                    <div>Total Paid</div>
                    <div>Total Stays</div>
                    <div>Total Nights</div>
                    <div>Average Nights/Guest</div>
                    <div>Average Price/Night</div>
                </div>
                {this.props.listingData.months.map(month =>
                    <SingleMonthOfListing
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