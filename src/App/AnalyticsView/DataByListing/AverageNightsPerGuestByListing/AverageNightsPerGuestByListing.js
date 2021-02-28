import React from 'react';

class AverageNightsPerGuestByListing extends React.Component {

    render() {
        let averageNightsPerGuestByListing = this.props.averageNightsPerGuestByListing.map((listing) =>
            <div>{listing.averageNightsPerGuest} nights</div>
        );
        return (
            <div className={"static-data-container"}>
                <div>Average Nights Per Booking</div>
                {averageNightsPerGuestByListing}
            </div>
        )
    }

}

export default AverageNightsPerGuestByListing;