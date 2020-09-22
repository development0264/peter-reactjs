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
                employee_type_error: '',
                employee_basis: '',
                employee_basis_error: '',
                employee_occupation: '',
                employee_occupation_error: '',
                employee_gross_salary: '',
                employee_gross_salary_error: '',
                employee_extra_income: '',
                employee_extra_income_error: '',
                employee_commencement_day: '',
                employee_commencement_day_error: '',
                employee_commencement_month: '',
                employee_commencement_month_error: '',
                employee_commencement_year: '',
                employee_commencement_year_error: '',
                file: [],
                count: 1,
            }],
            income_forms: [{
                income_type: '',
                other_income_description: '',
                other_income_monthly: '',
                count: 1
            }]
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
                employee_type_error: '',
                employee_basis: '',
                employee_basis_error: '',
                employee_occupation: '',
                employee_occupation_error: '',
                employee_gross_salary: '',
                employee_gross_salary_error: '',
                employee_extra_income: '',
                employee_extra_income_error: '',
                employee_commencement_day: '',
                employee_commencement_day_error: '',
                employee_commencement_month: '',
                employee_commencement_month_error: '',
                employee_commencement_year: '',
                employee_commencement_year_error: '',
                file: [],
                count: this.state.count + 1,
            });

            this.setState({
                count: this.state.count + 1,
                employee_forms: this.state.employee_forms
            });
        }
    }

    addAnotherIncome(e, index) {
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
                other_income_description: '',
                other_income_monthly: '',
                count: this.state.income_count + 1
            });

            this.setState({
                income_count: this.state.income_count + 1,
                income_forms: this.state.income_forms
            });
        }
    }

    handleTextChange(event, index, col) {
        console.log('event', event);
        console.log('index', index);
        console.log('col', col);



        var form_property = this.state.employee_forms
        form_property[index]["" + col + ""] = event;
        this.setState({ employee_forms: form_property });

        console.log('employee_forms', this.state.employee_forms)
    }

    fileDrop = (e) => {
        console.log(e);
    }
    renderhtml() {
        var list = [];
        this.state.employee_forms.map((el, index) => {
            list.push(
                <div key={index.toString()}>
                    <Form.Group className="form-group">
                        <Form.Label className="sub_label" >{(index == 0) ? 'Primary' : 'Secondary'} employee Type<span className="text-dander">*</span></Form.Label>
                        <Form.Control as="select" name="employee_type" onChange={e => this.handleTextChange(e.target.value, index, "employee_type")}>
                            <option value="Employee (PAYG)">Employee (PAYG)</option>
                            <option value="Self employed">Self employed</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Retired">Retired</option>
                        </Form.Control>
                        {(el.employee_type_error !== '') ? (<><span className="text-danger">{el.employee_type_error}</span></>) : null}
                    </Form.Group>
                    <Form.Group className="form-group"  >
                        <Form.Label className="sub_label">{(index == 0) ? 'Primary' : 'Secondary'} employment basis<span className="text-dander">*</span></Form.Label>
                        <Form.Control as="select" name="employee_basis" onChange={e => this.handleTextChange(e.target.value, index, "employee_basis")}>
                            <option value="Full time">Full time</option>
                            <option value="Part time">Part time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Casual">Casual</option>
                            <option value="Commission only">Commission only</option>
                        </Form.Control>
                        {(el.employee_basis_error !== '') ? (<><span className="text-danger">{el.employee_basis_error}</span></>) : null}
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label className="sub_label"> {(index == 0) ? 'Primary' : 'Secondary'} employment occupation <span className="text-dander">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="employee_occupation" onChange={e => this.handleTextChange(e.target.value, index, "employee_occupation")} />
                        {(el.employee_occupation_error !== '') ? (<><span className="text-danger">{el.employee_occupation_error}</span></>) : null}
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="sub_label">{(index == 0) ? 'Primary' : 'Secondary'} income Gross salary (monthly)<span className="text-dander">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="employee_gross_salary" onChange={e => this.handleTextChange(e.target.value, index, "employee_gross_salary")} />
                        {(el.employee_gross_salary_error !== '') ? (<><span className="text-danger">{el.employee_gross_salary_error}</span></>) : null}
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="sub_label">{(index == 0) ? 'Primary' : 'Secondary'} income - bonus, commission or regular overtime (monthly)<span className="text-dander">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="employee_extra_income" onChange={e => this.handleTextChange(e.target.value, index, "employee_extra_income")} />
                        {(el.employee_extra_income_error !== '') ? (<><span className="text-danger">{el.employee_extra_income_error}</span></>) : null}
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label className="sub_label">{(index == 0) ? 'Primary' : 'Secondary'} employment commencement date <span className="text-dander">*</span></Form.Label>
                        <div className="row">
                            <div className="col-md-2">
                                <Form.Control as="select" className="w-75" name="employee_commencement_day" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_day")}>
                                    <option selected value="1">01</option>
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
                                {(el.employee_commencement_day_error !== '') ? (<><span className="text-danger">{el.employee_commencement_day_error}</span></>) : null}
                            </div>
                            <div className="col-md-2">
                                <Form.Control name="employee_commencement_month" as="select" className="w-75" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_month")}>
                                    <option selected value="1">01</option>
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
                                </Form.Control>
                                {(el.employee_commencement_month_error !== '') ? (<><span className="text-danger">{el.employee_commencement_month_error}</span></>) : null}
                            </div>
                            <div className="col-md-2">
                                <Form.Control as="select" name="employee_commencement_year" className="w-75" onChange={e => this.handleTextChange(e.target.value, index, "employee_commencement_year")}>
                                    <option selected value="2016">2016</option>
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
                                {(el.employee_commencement_year_error !== '') ? (<><span className="text-danger">{el.employee_commencement_year_error}</span></>) : null}
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>


                    </Form.Group>
                    <div className="form-group col-md-12">
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
                    <Form.Group>
                        {(index == 0) ? (
                            <>
                                <Button className="btn add_another_button border-0" onClick={e => this.addAnother(el, index)}>Add Another Employee</Button>
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

    onChangeIncome(event, index, col) {
        const form_property = this.state.income_forms;
        form_property[index]["" + col + ""] = event;
        this.setState({ income_forms: form_property });

    }

    renderIncomeHtml() {
        console.log(this.state.income_forms)
        var list = [];
        this.state.income_forms.map((el, index) => {
            list.push(
                <div key={index.toString()}>
                    <Form.Group >
                        <Form.Label><strong className="text-secondary">Other Income {el.count} Type </strong> </Form.Label>
                        <Form.Control as="select" name="income_type" onChange={(e) => this.onChangeIncome(e.target.value, index, "income_type")} >
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
                        <Form.Control type="text" placeholder="" name="other_income_description" onChange={(e) => this.onChangeIncome(e.target.value, index, "other_income_description")} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong className="text-secondary">Other income {el.count} (monthly)</strong></Form.Label>
                        <Form.Control type="text" placeholder="" name="other_income_monthly" onChange={(e) => this.onChangeIncome(e.target.value, index, "other_income_monthly")} />
                    </Form.Group>
                    {(index == 0) ? (<> <Button className="btn add_another_button border-0" onClick={e => this.addAnotherIncome(el, index)}>Add Another Income</Button></>) : null}
                </div>
            );
        })

        return list;
    }

    onSecondFromSubmit() {
        let formIsValid = true;
        var form_data = this.state.employee_forms;
        console.log('form_data', form_data)
        Object.keys(form_data).map((key, i) => {
            if (form_data[i]["employee_type"] === '') {
                form_data[i]["employee_type_error"] = "This field is required";
                formIsValid = false;
            }
            if (form_data[i]["employee_basis"] === '') {
                form_data[i]["employee_basis_error"] = "This field is required";
                formIsValid = false;
            }
            if (form_data[i]["employee_occupation"] === '') {
                form_data[i]["employee_occupation_error"] = "This field is required";
                formIsValid = false;
            }
            if (form_data[i]["employee_gross_salary"] === '') {
                form_data[i]["employee_gross_salary_error"] = "This field is required";
                formIsValid = false;
            }
            if (form_data[i]["employee_extra_income"] === '') {
                form_data[i]["employee_extra_income_error"] = "This field is required";
                formIsValid = false;
            }

            if (form_data[i]["employee_commencement_day"] === '') {
                form_data[i]["employee_commencement_day_error"] = "This field is required";
                formIsValid = false;
            }

            if (form_data[i]["employee_commencement_month"] === '') {
                form_data[i]["employee_commencement_month_error"] = "This field is required";
                formIsValid = false;
            }

            if (form_data[i]["employee_commencement_year"] === '') {
                form_data[i]["employee_commencement_month_year"] = "This field is required";
                formIsValid = false;
            }
        })

        this.setState({ employee_forms: form_data });

        if (formIsValid) {
            this.props.onNextButtonClick();
        }

    }

    render() {

        return (<div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Your Income</h4>
                </div>
            </div>

            {this.state.employee_forms.length > 0 ? this.renderhtml() : null}

            {this.state.income_forms.length > 0 ? this.renderIncomeHtml() : null}


            <div className="row">
                <div className="form-group">
                    <br />
                    {this.props.details.current_step > 1 ? (<button className="btn btn-previous  float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {this.props.details.current_step < 6 ? (<button className="btn btn-next  float-right ml-2" onClick={() => this.onSecondFromSubmit()} >Next</button>) : null}
                </div>
            </div>
        </div>)

    }

}

export default Step4;