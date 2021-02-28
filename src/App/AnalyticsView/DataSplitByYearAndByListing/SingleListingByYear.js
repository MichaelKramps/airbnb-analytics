import React from 'react';
import SingleYearOfListing from "./SingleYearOfListing";

class SingleListingByYear extends React.Component {

    render() {
        return (
            <div className="data-grouping">
                <h3>{this.props.listingData.name}</h3>
                <div className={"static-data-container"}>
                    <div>Year</div>
                    <div>Total Paid</div>
                    <div>Total Stays</div>
                    <div>Total Nights</div>
                    <div>Average Nights/Guest</div>
                    <div>Average Price/Night</div>
                </div>
                {this.props.listingData.years.map(year =>
                    <SingleYearOfListing
                        year={year.year}
                        amountPaid={year.amountPaid}
                        totalStays={year.totalStays}
                        totalNights={year.totalNights}
                        averageNightsPerGuest={year.averageNightsPerGuest}
                        averagePricePerNight={year.averagePricePerNight} />)
                }
            </div>
        )
    }

}

export default SingleListingByYear;