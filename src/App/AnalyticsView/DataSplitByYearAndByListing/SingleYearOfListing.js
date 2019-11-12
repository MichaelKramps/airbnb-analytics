import React from 'react';

class SingleListingByYear extends React.Component {

    render() {
        return (
            <div className={"staticDataContainer"}>
                <div>{this.props.year}</div>
                <div>{this.props.amountPaid}</div>
                <div>{this.props.totalStays}</div>
                <div>{this.props.totalNights}</div>
                <div>{this.props.averageNightsPerGuest}</div>
                <div>{this.props.averagePricePerNight}</div>
            </div>
        )
    }

}

export default SingleListingByYear;