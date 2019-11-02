import React from 'react';

class TotalStaysByListing extends React.Component {

    render() {
        console.log(this.props);
        let staysByListing = this.props.totalStaysByListing.map((listing) =>
            <div>
                <h3>{listing.name}</h3>
                <p>Number of stays: {listing.totalStays}</p>
            </div>
        );
        return (
            <div>
                {staysByListing}
            </div>
        )
    }

}

export default TotalStaysByListing;