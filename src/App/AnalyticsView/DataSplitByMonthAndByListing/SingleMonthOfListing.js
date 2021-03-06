import React from 'react';

class SingleMonthOfListing extends React.Component {

    render() {
        return (
            <div filtergroup={this.props.month} className={"static-data-container month-data active"}>
                <div>{this.props.year} {this.props.month}</div>
                <div>{this.props.amountPaid}</div>
                <div>{this.props.totalStays}</div>
                <div>{this.props.totalNights}</div>
                <div>{this.props.averageNightsPerGuest}</div>
                <div>{this.props.averagePricePerNight}</div>
            </div>
        )
    }

}

export default SingleMonthOfListing;