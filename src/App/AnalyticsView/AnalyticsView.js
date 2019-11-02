import React from 'react'
import TotalStaysByListing from './TotalStaysByListing/TotalStaysByListing'
import TotalNightsByListing from "./TotalNightsByListing/TotalNightsByListing";

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <TotalStaysByListing totalStaysByListing={this.props.totalStaysByListing} />
                <TotalNightsByListing totalNightsByListing={this.props.totalNightsByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;