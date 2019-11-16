import React from 'react';

class AveragePricePerNightByListing extends React.Component {

    render() {
        let averagePricePerNightByListing = this.props.averagePricePerNightByListing.map((listing) =>
            <div>${listing.averagePricePerNight}</div>
        );
        return (
            <div className={"staticDataContainer"}>
                <div>Average Price Per Night</div>
                {averagePricePerNightByListing}
            </div>
        )
    }

}

export default AveragePricePerNightByListing;