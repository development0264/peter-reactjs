import React, { Component, useState, Fragment } from 'react';
import Dropzone from "react-dropzone";
import './custom.css';

class Step3 extends Component {

    constructor() {
        super();
        this.state = {
            count: 1,
            form_property: [{
                liability: "",
                liability_error: "",
                liability_description: "",
                liability_description_error: '',
                amount_owed_on_liability: "",
                amount_owed_on_liability_error: '',
                credit_limit_on_liability: "",
                credit_limit_on_liability_error: '',
                monthly_replayment_liability: "",
                monthly_replayment_liability_error: '',
                atteched_files: {},
                atteched_files_errors: "",
                count: 1
            }]
        }
    }

    handleTextChange(event, index, col) {
        var form_property = this.state.form_property
        form_property[index]["" + col + ""] = event;
        this.setState({ form_property: form_property });
        console.log(this.state.form_property)
    }

    fileDrop(e, index, col) {
        console.log(e)
    }

    addAnother(e, index) {
        const Findindex = this.state.form_property.findIndex(item => item.count == e.count + 1)
        if (Findindex > -1) {
            const items = this.state.form_property.filter(item => item.count !== e.count + 1);
            const list = items.filter(item => item.count <= Findindex);
            this.setState({
                count: list.length,
                form_property: list
            });
        } else {
            this.state.form_property.push({
                liability: "",
                liability_error: "",
                liability_description: "",
                liability_description_error: '',
                amount_owed_on_liability: "",
                amount_owed_on_liability_error: '',
                credit_limit_on_liability: "",
                credit_limit_on_liability_error: '',
                monthly_replayment_liability: "",
                monthly_replayment_liability_error: '',
                atteched_files: {},
                atteched_files: "",
                count: this.state.count + 1,
            });
            this.setState({
                count: this.state.count + 1,
                form_property: this.state.form_property,
            });
        }
    }

    renderhtml() {
        var list = [];
        this.state.form_property.map((el, index) => {
            console.log('render html ', el)
            list.push(
                <div key={index.toString()}>
                    <div className="form-group col-md-12">
                        <label for="add_liability_1" className="sub_label">Add liability {el.count}</label>
                        <select name="liability" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "liability")}>
                            <option value=''>-Select liability type-</option>
                            <option value='Credit card'>Credit card</option>
                            <option value='Store card'>Store card</option>
                            <option value='Personal loan (not included in assets)'>Personal loan (not included in assets)</option>
                            <option value='Hire purchase'>Hire purchase</option>
                            <option value='HECS or Student loan'>HECS or Student loan</option>
                            <option value='Other liability'>Other liability</option>
                        </select>
                    </div>
                    {(el.liability !== '') ? (<>
                        <div className="form-group col-md-12">
                            <label className="sub_label" for="liability_description">Liability 1 description (inc financial institution name) <span className="text-danger">*</span>
                            </label>
                            <input type="text" name="liability_description" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "liability_description")} required />
                            {(el.liability_description_error !== '') ? (<><span className="text-danger">{el.liability_description_error}</span></>) : null}
                        </div>
                        <div className="form-group col-md-12">
                            <label className="sub_label" for="amount_owed_on_liability">Amount owed on liability 1 <span className="text-danger">*</span> </label>
                            <input type="text" name="amount_owed_on_liability" onChange={e => this.handleTextChange(e.target.value, index, "amount_owed_on_liability")} className="form-control" required />
                            {(el.amount_owed_on_liability_error !== '') ? (<><span className="text-danger">{el.amount_owed_on_liability_error}</span></>) : null}
                        </div>
                        {(el.liability == 'Credit card' || el.liability == 'Store card') ?
                            <div className="form-group col-md-12">
                                <label className="sub_label" for="credit_limit_on_liability">Credit limit on liability 1  <span className="text-danger">*</span> </label>
                                <input type="text" name="credit_limit_on_liability" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "credit_limit_on_liability")} required />
                                {(el.credit_limit_on_liability_error !== '') ? (<><span className="text-danger">{el.credit_limit_on_liability_error}</span></>) : null}

                            </div> : null}
                        <div className="form-group col-md-12">
                            <label className="sub_label" for="monthly_replayment_liability"> Monthly repayments on liability 1 <span className="text-danger">*</span> </label>
                            <input type="text" name="monthly_replayment_liability" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "monthly_replayment_liability")} required />
                            {(el.monthly_replayment_liability_error !== '') ? (<><span className="text-danger">{el.monthly_replayment_liability_error}</span></>) : null}

                        </div>
                        <div className="form-group col-md-12">
                            <label className="sub_label" for="add_liability_1_monthly_repayment">Attach liability 1 statement or document (if provided)</label>
                            <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                <Dropzone onDrop={e => this.fileDrop(e, index, "property_filename")}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                        </div>


                    </>) : <div>
                            {(index != 0) ?
                                <div>
                                    <div className="form-group col-md-12">
                                        <label className="sub_label" for="liability_description">Liability 1 description (inc financial institution name) <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" name="liability_description" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "liability_description")} required />
                                        {(el.liability_description_error !== '') ? (<><span className="text-danger">{el.liability_description_error}</span></>) : null}
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label className="sub_label" for="amount_owed_on_liability">Amount owed on liability 1 <span className="text-danger">*</span> </label>
                                        <input type="text" name="amount_owed_on_liability" onChange={e => this.handleTextChange(e.target.value, index, "amount_owed_on_liability")} className="form-control" required />
                                        {(el.amount_owed_on_liability_error !== '') ? (<><span className="text-danger">{el.amount_owed_on_liability_error}</span></>) : null}
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label className="sub_label" for="monthly_replayment_liability"> Monthly repayments on liability 1 <span className="text-danger">*</span> </label>
                                        <input type="text" name="monthly_replayment_liability" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "monthly_replayment_liability")} required />
                                        {(el.monthly_replayment_liability_error !== '') ? (<><span className="text-danger">{el.monthly_replayment_liability_error}</span></>) : null}

                                    </div>
                                    <div className="form-group col-md-12">
                                        <label className="sub_label" for="add_liability_1_monthly_repayment">Attach liability 1 statement or document (if provided)</label>
                                        <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                            <Dropzone onDrop={e => this.fileDrop(e, index, "property_filename")}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <section>
                                                        <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                                        </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </div>
                                    </div>
                                </div> : null}
                        </div>}
                    {(index < 3) ? (<>
                        <div className="from-group">
                            <button className="btn add_another_button" onClick={e => this.addAnother(el, index)}>Add Another</button>
                        </div>
                    </>) : null}
                </div>)
        });
        return list;
    }

    onSecondFromSubmit() {
        let formIsValid = true;

        var form_data = this.state.form_property;

        Object.keys(form_data).map((key, i) => {
            if (form_data[i]["liability"] !== '') {
                if (form_data[i]["liability_description"] === '') {
                    form_data[i]["liability_description_error"] = "This field is required";
                    formIsValid = false;
                }
                if (form_data[i]["amount_owed_on_liability"] === '') {
                    form_data[i]["amount_owed_on_liability_error"] = "This field is required";
                    formIsValid = false;
                }
                if (form_data[i]["credit_limit_on_liability"] === '') {
                    form_data[i]["credit_limit_on_liability_error"] = "This field is required";
                    formIsValid = false;
                }
                if (form_data[i]["monthly_replayment_liability"] === '') {
                    form_data[i]["monthly_replayment_liability_error"] = "This field is required";
                    formIsValid = false;
                }
            }

        })

        this.setState({ form_property: form_data });

        if (formIsValid) {
            this.props.onNextButtonClick();
        }

    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Add other liabilities</h4>
                        </div>
                    </div>


                    {this.state.form_property.length > 0 ? this.renderhtml() : null}


                    <div className="row">

                        <div className="form-group">
                            <br />
                            <br />
                            {this.props.details.current_step > 1 ? (<button className="btn btn-previous  float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                            {this.props.details.current_step < 5 ? (<button className="btn btn-next  float-right ml-2" onClick={() => this.onSecondFromSubmit()} >Next</button>) : null}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Step3