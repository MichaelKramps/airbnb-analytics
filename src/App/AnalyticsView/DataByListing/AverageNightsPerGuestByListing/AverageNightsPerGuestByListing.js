import React from 'react';

class AverageNightsPerGuestByListing extends React.Component {

    render() {
        let averageNightsPerGuestByListing = this.props.averageNightsPerGuestByListing.map((listing) =>
            <div>{listing.averageNightsPerGuest} nights</div>
        );
        return (
            <div className={"staticDataContainer"}>
                <div>Average Nights Per Booking</div>
                {averageNightsPerGuestByListing}
            </div>
        )
    }

}

export default AverageNightsPerGuestByListing;