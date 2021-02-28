import React from 'react';

class TotalNightsByListing extends React.Component {

    render() {
        let nightsByListing = this.props.totalNightsByListing.map((listing) =>
            <div>{listing.totalNights} nights</div>
        );
        return (
            <div className={"static-data-container"}>
                <div>Number of Nights</div>
                {nightsByListing}
            </div>
        )
    }

}

export default TotalNightsByListing;