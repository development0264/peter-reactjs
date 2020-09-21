import React, { Component } from 'react';
import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Dropzone from 'react-dropzone';

class Step6 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<>
            <div className="container">
                <h3><strong>Your summary</strong></h3>
            </div>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><strong className="text-secondary">Any additional notes you want us to know:</strong></Form.Label>
                <Form.Control as="textarea" rows="5" />
                <Form.Label><strong className="text-secondary">Please note that this is only a general guide and not an indication of the likelihood of an approval, as various elements of the financials are assessed against your personal circumstances</strong></Form.Label>
            </Form.Group>

            <div className="row">
                <div className="form-group">
                    {this.props.details.current_step > 1 ? (<button className="btn  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {/* {this.props.details.current_step < 6 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => this.props.onNextButtonClick()} >Next</button>) : null} */}
                </div>
            </div>
        </>)
    }
}

export default Step6;