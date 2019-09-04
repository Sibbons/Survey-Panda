import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {

    render() {
        return (
            <StripeCheckout
                name="SurveyPanda"
                description="Pay $5 for 5 "
                amount={500}  // amount in cents
                token={token => this.props.handleToken(token)} // recieve a callback function
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);