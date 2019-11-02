import React from 'react'
import TotalStaysByListing from './TotalStaysByListing/TotalStaysByListing'

class AnalyticsView extends React.Component {

    render() {
        return(
            <React.Fragment>
                <TotalStaysByListing totalStaysByListing={this.props.totalStaysByListing} />
            </React.Fragment>
        )
    };
}

export default AnalyticsView;