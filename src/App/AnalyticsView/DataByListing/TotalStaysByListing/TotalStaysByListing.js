import React from 'react';

class TotalStaysByListing extends React.Component {

    render() {
        let listingNames = this.props.totalStaysByListing.map((listing) =>
            <div>{listing.name}</div>
        );
        let staysByListing = this.props.totalStaysByListing.map((listing) =>
            <div>{listing.totalStays} stays</div>
        );
        return (
            <React.Fragment>
                <div className={"static-data-container"}>
                    <div>Category</div>
                    {listingNames}
                </div>
                <div className={"static-data-container"}>
                    <div>Number of Stays</div>
                    {staysByListing}
                </div>
            </React.Fragment>
        )
    }

}

export default TotalStaysByListing;