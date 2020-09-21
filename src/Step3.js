import React, { Component } from 'react';
import './App.css';
import Dropzone from 'react-dropzone'

class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            add_liability_1: '',
            add_liability_2: '',
            add_liability_3: '',
            add_liability_4: '',
            display_second_form: false,
            display_third_form: false,
            display_fourth_form: false
        }
        this.onLiabilityOneChange = this.onLiabilityOneChange.bind(this);
        this.onLiabilityOneChangeTwo = this.onLiabilityOneChangeTwo.bind(this);
        this.onLiabilityOneChangeThree = this.onLiabilityOneChangeThree.bind(this);
    }



    onLiabilityOneChange = (value) => {
        this.setState({
            add_liability_1: value
        })

    }

    onLiabilityOneChangeTwo = (value) => {
        this.setState({
            add_liability_2: value
        })
    }

    onLiabilityOneChangeThree = (value) => {
        this.setState({
            add_liability_3: value
        })
    }

    onLiabilityOneChangeFour = (value) => {
        this.setState({
            add_liability_4: value
        })
    }
    addRemoveSecondBox = () => {
        if (this.state.display_second_form) {
            this.setState({
                display_second_form: false,
                display_third_form: false,
                display_fourth_form: false
            })
        }
        else {
            this.setState({
                display_second_form: true
            })
        }
    }

    addRemoveThirdBox = () => {

        if (this.state.display_third_form) {
            this.setState({
                display_third_form: false,
                display_fourth_form: false
            })
        }
        else {
            this.setState({
                display_third_form: true
            })
        }

    }

    addRemoveFourthBox = () => {
        if (this.state.display_fourth_form) {
            this.setState({
                display_fourth_form: false
            })
        }
        else {
            this.setState({
                display_fourth_form: true
            })
        }


    }

    render() {
        const { add_liability_1, display_second_form, add_liability_2, add_liability_3, display_third_form, display_fourth_form, add_liability_4 } = this.state;
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Any other liabilities</h4>
                    </div>
                    <div className="col-md-12 text-right">
                        <h6><span className="text-danger">*</span>indicates a required field</h6>
                        <br />
                    </div>
                    <div className="form-group col-md-12">
                        <label for="add_liability_1">Add liability 1</label>
                        <select onChange={e => this.onLiabilityOneChange(e.target.value)} className="form-control">
                            <option value=''>-Select liability type-</option>
                            <option value='Credit card'>Credit card</option>
                            <option value='Store card'>Store card</option>
                            <option value='Personal loan (not included in assets)'>Personal loan (not included in assets)</option>
                            <option value='Hire purchase'>Hire purchase</option>
                            <option value='HECS or Student loan'>HECS or Student loan</option>
                            <option value='Other liability'>Other liability</option>
                        </select>
                    </div>
                </div>
                <div class="append_liability_1_form">
                    {(add_liability_1 !== '') ? (<div className="row">
                        <div className="form-group col-md-12">
                            <label for="add_liability_1_description">Liability 1 description (inc financial institution name) <span className="text-danger">*</span>
                            </label>
                            <input type="text" name="add_liability_1_description" className="form-control" required />
                        </div>
                        <div className="form-group col-md-12">
                            <label for="add_liability_1_amount">Amount owed on liability 1 <span className="text-danger">*</span> </label>
                            <input type="number" name="add_liability_1_amount" className="form-control" required />
                        </div>
                        { (add_liability_1 === 'Credit card' || add_liability_1 === 'Store card') ? (<>
                            <div className="form-group col-md-12">
                                <label for="add_liability_1_credit_limit">Credit limit on liability 1  <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_1_credit_limit" className="form-control" required />
                            </div>
                        </>) : null}

                        <div className="form-group col-md-12">
                            <label for="add_liability_1_monthly_repayment"> Monthly repayments on liability 1 <span className="text-danger">*</span> </label>
                            <input type="number" name="add_liability_1_monthly_repayment" className="form-control" required />
                        </div>
                        <div className="form-group col-md-12">
                            <label for="add_liability_1_monthly_repayment">Attach liability 1 statement or document (if provided)</label>
                            <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
                        <div className="form-group col-md-12">
                            <button onClick={e => { this.addRemoveSecondBox() }} className="btn btn-lg bg-secondary text-white">Add Another</button>
                        </div>
                    </div>) : null}
                    {/* =======================================Other type 2=============================================== */}

                    {(display_second_form) ? (<div className="row">

                        <div className="form-group col-md-12">
                            <label for="add_liability_2">Add liability 2</label>
                            <select onChange={e => this.onLiabilityOneChangeTwo(e.target.value)} className="form-control">
                                <option value=''>-Select liability type-</option>
                                <option value='Credit card'>Credit card</option>
                                <option value='Store card'>Store card</option>
                                <option value='Personal loan (not included in assets)'>Personal loan (not included in assets)</option>
                                <option value='Hire purchase'>Hire purchase</option>
                                <option value='HECS or Student loan'>HECS or Student loan</option>
                                <option value='Other liability'>Other liability</option>
                            </select>
                        </div>
                        { (add_liability_2 !== '') ? (<>

                            <div className="form-group col-md-12">
                                <label for="add_liability_2_description">Liability 2 description (inc financial institution name) <span className="text-danger">*</span>
                                </label>
                                <input type="text" name="add_liability_2_description" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_2_amount">Amount owed on liability 2 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_2_amount" className="form-control" required />
                            </div>
                            {(add_liability_2 === 'Credit card' || add_liability_2 === 'Store card') ? (<>
                                <div className="form-group col-md-12">
                                    <label for="add_liability_2_credit_limit">Credit limit on liability 2  <span className="text-danger">*</span> </label>
                                    <input type="number" name="add_liability_2_credit_limit" className="form-control" required />
                                </div>
                            </>) : null}

                            <div className="form-group col-md-12">
                                <label for="add_liability_2_monthly_repayment"> Monthly repayments on liability 2 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_2_monthly_repayment" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_2_monthly_repayment">Attach liability 2 statement or document (if provided)</label>
                                <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
                            <div className="form-group col-md-12">
                                <button onClick={e => { this.addRemoveThirdBox() }} className="btn btn-lg bg-secondary text-white">Add Another</button>
                            </div>
                        </>) : null}
                    </div>) : null}

                    {/* ===========================================Other Type 3=========================================== */}

                    {(display_third_form) ? (<div className="row">

                        <div className="form-group col-md-12">
                            <label for="add_liability_3">Add liability 3</label>
                            <select onChange={e => this.onLiabilityOneChangeThree(e.target.value)} className="form-control">
                                <option value=''>-Select liability type-</option>
                                <option value='Credit card'>Credit card</option>
                                <option value='Store card'>Store card</option>
                                <option value='Personal loan (not included in assets)'>Personal loan (not included in assets)</option>
                                <option value='Hire purchase'>Hire purchase</option>
                                <option value='HECS or Student loan'>HECS or Student loan</option>
                                <option value='Other liability'>Other liability</option>
                            </select>
                        </div>
                        { (add_liability_3 !== '') ? (<>

                            <div className="form-group col-md-12">
                                <label for="add_liability_3_description">Liability 3 description (inc financial institution name) <span className="text-danger">*</span>
                                </label>
                                <input type="text" name="add_liability_3_description" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_3_amount">Amount owed on liability 3 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_3_amount" className="form-control" required />
                            </div>
                            {(add_liability_3 === 'Credit card' || add_liability_3 === 'Store card') ? (<>
                                <div className="form-group col-md-12">
                                    <label for="add_liability_3_credit_limit">Credit limit on liability 3  <span className="text-danger">*</span> </label>
                                    <input type="number" name="add_liability_3_credit_limit" className="form-control" required />
                                </div>
                            </>) : null}

                            <div className="form-group col-md-12">
                                <label for="add_liability_3_monthly_repayment"> Monthly repayments on liability 3 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_3_monthly_repayment" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_3_monthly_repayment">Attach liability 3 statement or document (if provided)</label>
                                <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
                            <div className="form-group col-md-12">
                                <button onClick={e => { this.addRemoveFourthBox() }} className="btn btn-lg bg-secondary text-white">Add Another</button>
                            </div>
                        </>) : null}
                    </div>) : null}

                    {/* ===========================================Other Type 4=========================================== */}

                    {(display_fourth_form) ? (<div className="row">

                        <div className="form-group col-md-12">
                            <label for="add_liability_4">Add liability 4</label>
                            <select onChange={e => this.onLiabilityOneChangeFour(e.target.value)} className="form-control">
                                <option value=''>-Select liability type-</option>
                                <option value='Credit card'>Credit card</option>
                                <option value='Store card'>Store card</option>
                                <option value='Personal loan (not included in assets)'>Personal loan (not included in assets)</option>
                                <option value='Hire purchase'>Hire purchase</option>
                                <option value='HECS or Student loan'>HECS or Student loan</option>
                                <option value='Other liability'>Other liability</option>
                            </select>
                        </div>
                        { (add_liability_4 != '') ? (<>

                            <div className="form-group col-md-12">
                                <label for="add_liability_4_description">Liability 4 description (inc financial institution name) <span className="text-danger">*</span>
                                </label>
                                <input type="text" name="add_liability_4_description" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_4_amount">Amount owed on liability 4 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_4_amount" className="form-control" required />
                            </div>
                            {(add_liability_4 === 'Credit card' || add_liability_4 === 'Store card') ? (<>
                                <div className="form-group col-md-12">
                                    <label for="add_liability_4_credit_limit">Credit limit on liability 4  <span className="text-danger">*</span> </label>
                                    <input type="number" name="add_liability_4_credit_limit" className="form-control" required />
                                </div>
                            </>) : null}

                            <div className="form-group col-md-12">
                                <label for="add_liability_4_monthly_repayment"> Monthly repayments on liability 4 <span className="text-danger">*</span> </label>
                                <input type="number" name="add_liability_4_monthly_repayment" className="form-control" required />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="add_liability_4_monthly_repayment">Attach liability 4 statement or document (if provided)</label>
                                <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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

                        </>) : null}
                    </div>) : null}

                    {/* ===========================================Other Type 4 Over=========================================== */}

                </div>

            </div>

            <div className="row">
                <div className="form-group">
                    {this.props.details.current_step > 1 ? (<button className="btn  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {this.props.details.current_step < 6 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => this.props.onNextButtonClick()} >Next</button>) : null}
                </div>
            </div>
        </>);
    }
}

export default Step3;