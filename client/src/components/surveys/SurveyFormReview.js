// show user form input before sending
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name} className="container" >
                <lable style={{ fontSize: '20px' }} >{field.label}</lable>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });



    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-1 white-text btn-flat " onClick={onCancel}
            >
                Back
            </button>
            <button
                className="green white-text btn-flat right"
                onClick={() => submitSurvey(formValues, history)} //arrow func so it runs onlt on click
            >
                Send
            <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {

    return { formValues: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));