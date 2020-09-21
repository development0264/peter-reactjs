import React, { Component } from 'react';
import './App.css';
class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            email_validate_visible_section: false,
            share_financial_details_to_me: false,
            share_financial_details_to_public: false,
            error_status: true
        }
        //  this.onEmailChange = this.onEmailChange.bind(this);
    }

    // onEmailChange = (email) => {
    //     if (email != '') {
    //         this.setState({
    //             email_validate_visible_section: true
    //         });
    //     }
    //     else {
    //         this.setState({
    //             email_validate_visible_section: false
    //         });
    //     }
    // }

    onSharedWithMeClick = () => {
        if (this.state.share_financial_details_to_me == true) {
            this.setState({
                share_financial_details_to_me: false
            })
        }
        else {
            this.setState({
                share_financial_details_to_me: true
            })
        }
    }

    onSharedWithPublicClick = () => {
        if (this.state.share_financial_details_to_public == true) {
            this.setState({
                share_financial_details_to_public: false
            })
        }
        else {
            this.setState({
                share_financial_details_to_public: true
            })
        }
    }


    render() {
        var onEmailChangeValidation = this.props.onEmailChangeValidation;
        var onNextButtonClick = this.props.onNextButtonClick;

        const { email_validate_visible_section, share_financial_details_to_me, share_financial_details_to_public } = this.state;
        return (<>
            <div className="container">

                <div className="form-group">
                    <label for="email" className="text-secondary"><strong>To continue please provide your email used for this application <span className='text-danger'>*</span></strong> </label>
                    <input onChange={e => onEmailChangeValidation(e.target.value)} type="email" name="email" className="form-control" required />
                    <label className="text-danger"><strong>{this.props.details.email_error}</strong></label>
                </div>
                {this.props.details.email !== '' ? (<div>
                    <label className="text-secondary"><strong>Are the following financial details just for you, or are they shared with your partner or spouse?</strong></label>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="email_validate_option_one_section bg-secondary text-white rounded">
                                <a onClick={e => this.onSharedWithMeClick()} className="box text-center text-white text-decoration-none" >
                                    <p><strong>Just Mine</strong></p>
                                    <p><strong>the following relates just to <br /> me</strong>
                                    </p>

                                    <center>{share_financial_details_to_me ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="email_validate_option_two_section bg-secondary text-white rounded">
                                <a onClick={e => this.onSharedWithPublicClick()} className="box text-center text-white text-decoration-none">
                                    <p><strong>Shared</strong></p>
                                    <p><strong>the following is shared with my partner or spouse</strong></p>
                                    <center>{share_financial_details_to_public ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>) : null}
                <br />
                <div className="row">
                    <div className="form-group">
                        {this.props.details.current_step > 1 ? (<button className="btn  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                        {this.props.details.current_step < 6 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => onNextButtonClick()} >Next</button>) : null}
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Step1;