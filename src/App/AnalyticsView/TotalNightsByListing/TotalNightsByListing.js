import React from 'react';

class TotalNightsByListing extends React.Component {

    render() {
        let nightsByListing = this.props.totalNightsByListing.map((listing) =>
            <div>{listing.totalNights}</div>
        );
        return (
            <div className={"staticDataContainer"}>
                <div>Number of Nights</div>
                {nightsByListing}
            </div>
        )
    }

}

export default TotalNightsByListing;