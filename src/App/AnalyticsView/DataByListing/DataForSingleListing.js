import React from 'react';

class DataForSingleListing extends React.Component {

    render() {
        return (
            <div className={"static-data-container"}>
                <div>{this.props.name}</div>
                <div>{this.props.totalPaid}</div>
                <div>{this.props.totalStays}</div>
                <div>{this.props.totalNights}</div>
                <div>{this.props.averageNightsPerGuest}</div>
                <div>{this.props.averagePricePerNight}</div>
            </div>
        )
    }

}

export default DataForSingleListing;