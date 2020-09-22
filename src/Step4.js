import React, { Component } from 'react';
import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Dropzone from 'react-dropzone';
import './custom.css';

class Step4 extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 1,
            income_count: 1,
            employee_forms: [{
                employee_type: '',
                employee_basis: '',
                employee_occupation: '',
                employee_gross_salary: '',
                employee_extra_income: '',
                employee_commencement_day: '',
                employee_commencement_month: '',
                employee_commencement_year: '',
                file: [],
                count: 1,
                errors: {}
            }],
            // income_forms: [{
            //     income_type: '',
            //     other_income_description: '',
            //     other_income_monthly: '',
            //     count: 1
            // }]
        };

    }

    addAnother(e, index) {
        const Findindex = this.state.employee_forms.findIndex(item => item.count == e.count + 1)
        if (Findindex > -1) {
            const items = this.state.employee_forms.filter(item => item.count !== e.count + 1);
            const list = items.filter(item => item.count <= Findindex);
            this.setState({
                count: list.length,
                employee_forms: list
            });
        } else {
            this.state.employee_forms.push({
                employee_type: '',
                employee_basis: '',
                employee_occupation: '',
                employee_gross_salary: '',
                employee_extra_income: '',
                employee_commencement_day: '',
                employee_commencement_month: '',
                employee_commencement_year: '',
                file: [],
                count: this.state.count + 1,
            });

            this.setState({
                count: this.state.count + 1,
                employee_forms: this.state.employee_forms
            });
        }
        console.log(this.state.employee_forms)
    }

    addAnotherIncome(e, index) {
        if (index != 1) {
            const Findindex = this.state.income_forms.findIndex(item => item.count == e.count + 1)
            if (Findindex > -1) {
                const items = this.state.income_forms.filter(item => item.count !== e.count + 1);
                const list = items.filter(item => item.count <= Findindex);
                this.setState({
                    income_count: list.length,
                    income_forms: list
                });
            }
            else {
                this.state.income_forms.push({
                    income_type: '',
                    other_income_description: '111',
                    other_income_monthly: '',
                    count: this.state.income_count + 1
                });

                this.setState({
                    income_count: this.state.income_count + 1,
                    income_forms: this.state.income_forms
                });
            }
        }
        else {
            this.setState({
                income_forms: [{
                    income_type: '',
                    other_income_description: '',
                    other_income_monthly: '',
                    count: 1
                }]
            })
            // this.state.push({

            // })
        }
        console.log(this.state.income_forms)
    }

    fileDrop = (e) => {
        console.log(e);
    }
    handleKeyUp(e) {
        if (e.target.value.length < 1) {
            e.target.value = '$';
        } else if (e.target.value.indexOf('$') !== 0) {
            e.target.value = '$' + String.fromCharCode(e.which);
        }
    };
    handleTextChange(event, index, col) {
        var employee_forms = this.state.employee_forms

        employee_forms[index]["" + col + ""] = event;
        this.setState({ employee_forms: employee_forms });
        console.log(this.state.employee_forms)

    }
    onNextButtonClick() {
        console.log(this.state)
        let formIsValid = true;
        if (this.state.employee_forms[0].selectedValue != "") {
            for (var i = 0; i < this.state.employee_forms.length; i++) {
                this.state.employee_forms[i].errors = {}
                if (!this.state.employee_forms[i].employee_type) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_type"] = "This field is required";
                }
                if (!this.state.employee_forms[i].employee_basis) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_basis"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_occupation) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_occupation"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_gross_salary) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_gross_salary"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_extra_income) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_extra_income"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_commencement_day) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_commencement_day"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_commencement_month) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_commencement_month"] = "This field is required";
                } if (!this.state.employee_forms[i].employee_commencement_year) {
                    formIsValid = false;
                    this.state.employee_forms[i].errors["employee_commencement_year"] = "This field is required";
                }

            }
            if (formIsValid) {
                this.props.onNextButtonClick();
            }

            this.setState({
                employee_forms: this.state.employee_forms
            })
            console.log(this.state)
        } else {

            if (formIsValid) {
                this.props.onNextButtonClick();
            }
            console.log(this.state)
        }
    }
    renderhtml() {
        var list = [];
        this.state.employee_forms.map((el, index) => {
            list.push(
                <div key={index.toString()}>
                    <Form.Group className="form-group" >
                        <Form.Label className="sub_label" ><strong >{(index == 0) ? 'Primary' : 'Secondary'} employee Type<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control as="select" onChange={e => this.handleTextChange(e.target.value, index, "employee_type")} value={el.employee_type} >
                            <option value="">-Select-</option>
                            <option value="Employee (PAYG)">Employee (PAYG)</option>
                            <option value="Self employed">Self employed</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Retired">Retired</option>
                        </Form.Control>
                        <Form.Label ><strong className="text-danger">{el.errors ? el.errors.employee_type : null}</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label className="sub_label"><strong >{(index == 0) ? 'Primary' : 'Secondary'} employment basis<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control as="select" onChange={e => this.handleTextChange(e.target.value, index, "employee_basis")}>
                            <option value="">-Select-</option>
                            <option value="Full time">Full time</option>
                            <option value="Part time">Part time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Casual">Casual</option>
                            <option value="Commission only">Commission only</option>
                        </Form.Control>
                        <Form.Label ><strong className="text-danger">{el.errors ? el.errors.employee_basis : null}</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label className="sub_label"><strong> {(index == 0) ? 'Primary' : 'Secondary'} employment occupation <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={e => this.handleTextChange(e.target.value, index, "employee_occupation")} required />
                        <Form.Label><strong className="text-danger">{el.errors ? el.errors.employee_occupation : null}</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="sub_label"><strong>{(index == 0) ? 'Primary' : 'Secondary'} income Gross salary (monthly)<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} placeholder="" onChange={e => this.handleTextChange(e.target.value, index, "employee_gross_salary")} required />
                        <Form.Label ><strong className="text-danger">{el.errors ? el.errors.employee_gross_salary : null}</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="sub_label"><strong>{(index == 0) ? 'Primary' : 'Secondary'} income - bonus, commission or regular overtime (monthly)<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} placeholder="" onChange={e => this.handleTextChange(e.target.value, index, "employee_extra_income")} required />
                        <Form.Label><strong className="text-danger">{el.errors ? el.errors.employee_extra_income : null}</strong></Form.Label>
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label className="sub_label"><strong >{(index == 0) ? 'Primary' : 'Secondary'} employment commencement date <span className="text-danger">*</span></strong></Form.Label>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Control as="select" type="date" className="w-75" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_day")} required>
                                    <option value="">DD</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </Form.Control>
                                <Form.Label><strong className="text-danger">{el.errors ? el.errors.employee_commencement_day : null}</strong></Form.Label>
                            </div>
                            <div className="col-md-4">
                                <Form.Control as="select" className="w-75" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_month")} required>
                                    <option value="">MM</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Control>
                                <Form.Label><strong className="text-danger">{el.errors ? el.errors.employee_commencement_month : null}</strong></Form.Label>
                            </div>
                            <div className="col-md-4">
                                <Form.Control as="select" className="w-75" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_year")} required>
                                    <option value="">YYYY</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>

                                </Form.Control>
                                <Form.Label><strong className="text-danger">{el.errors ? el.errors.employee_commencement_year : null}</strong></Form.Label>
                            </div>
                        </div>


                    </Form.Group>
                    <div className="form-group">
                        <label for="add_liability_1_monthly_repayment"><strong className="text-secondary">Attach {(index == 0) ? 'primary' : 'secondary'} employment payslip (3 months pay) or last 2 years Tax returns for Self employed</strong></label>
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
                    <Form.Group className="form-group">
                        {(index == 0) ? (
                            <>
                                <Button className="btn p-3 bg-secondary text-white" onClick={e => this.addAnother(el, index)}>Add Another Employee</Button>
                            </>) : null}

                    </Form.Group>

                    <div>
                        {(el.selectedValue !== "" && el.selectedValue !== undefined) ? (<>
                            <h1>{`data is ` + el.selectedValue}</h1>
                        </>) : null}
                    </div>
                </div>
            );
        })

        return list
    }

    handleTextChangeForIncome(event, index, col) {
        var income_forms = this.state.income_forms

        income_forms[index]["" + col + ""] = event;
        this.setState({ income_forms: income_forms });
        console.log(this.state.income_forms)

    }

    renderIncomeHtml() {
        console.log(this.state.income_forms)
        var list = [];
        this.state.income_forms.map((el, index) => {
            console.log(el, index)
            list.push(
                <div>
                    <div key={index.toString()}>
                        <Form.Group >
                            <Form.Label><strong className="text-secondary">Other Income {el.count} Type </strong> </Form.Label>
                            <Form.Control as="select" onChange={e => this.handleTextChangeForIncome(e.target.value, index, "income_type")}>
                                <option value="">-Select other income type- </option>
                                <option value="Interest income">Interest income</option>
                                <option value="Foreign sourced">Foreign sourced</option>
                                <option value="Superannuation">Superannuation</option>
                                <option value="Work Allowance">Work Allowance</option>
                                <option value="Workers compensation">Workers compensation</option>
                                <option value="Child support / maintenance">Child support / maintenance</option>
                                <option value="Carer payment">Carer payment</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><strong className="text-secondary">Other income {el.count} description</strong></Form.Label>
                            <Form.Control type="text" placeholder="" name="other_income_description" onChange={e => this.handleTextChangeForIncome(e.target.value, index, "other_income_description")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><strong className="text-secondary">Other income {el.count} (monthly)</strong></Form.Label>
                            <Form.Control type="text" placeholder="" onKeyUp={e => this.handleKeyUp(e)} name="other_income_monthly" onChange={e => this.handleTextChangeForIncome(e.target.value, index, "other_income_monthly")} />
                        </Form.Group>
                        {(index == 0) ? (<> <Button className="btn p-3 bg-secondary text-white" onClick={e => this.addAnotherIncome(el, index)}>Add Another Income</Button></>) : null}
                    </div>
                </div >
            );
        })
        return list;
    }

    render() {

        return (<div>

            {this.state.employee_forms.length > 0 ? this.renderhtml() : null}

            {this.state.income_forms ? this.renderIncomeHtml() : <Button className="btn p-3 bg-secondary text-white" onClick={e => this.addAnotherIncome(e, 1)}>Add Another Income</Button>}


            <div className="row">
                <br />
                <div className="form-group">
                    {this.props.details.current_step > 1 ? (<button className="btn  btn-previous  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {this.props.details.current_step < 5 ? (<button className="btn  btn-next  btn-primary float-right ml-2" onClick={() => this.onNextButtonClick()} >Next</button>) : null}
                </div>
            </div>
        </div>)

    }

}

export default Step4;