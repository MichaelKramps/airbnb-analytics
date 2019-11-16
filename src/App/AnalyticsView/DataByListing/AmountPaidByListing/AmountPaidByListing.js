import React from 'react';

class AmountPaidByListing extends React.Component {

    render() {
        let paidOutByListing = this.props.amountPaidByListing.map((listing) =>
            <div>${listing.amountPaid}</div>
        );
        return (
            <div className={"staticDataContainer"}>
                <div>Total Paid</div>
                {paidOutByListing}
            </div>
        )
    }

}

export default AmountPaidByListing;