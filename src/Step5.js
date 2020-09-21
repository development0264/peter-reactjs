import React, { Component } from 'react';
import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Dropzone from 'react-dropzone';

class Step5 extends React.Component {
    constructor() {
        super();
        this.state = {
            gloceries: '',
            display_step_1: true,
            display_step_counter: 1,
            display_step_2: false,
            glosarry_exchange_change_after_load_no: false,
            glosarry_exchange_change_after_load_yes: false,
            display_step_3: false,
            clothing_personal_care: '',
            clothing_personal_load_no: false,
            clothing_personal_load_yes: false,
            display_step_4: false,
            new_clothing_care_after_loan: '',
            display_step_5: false,
            tel_tv_internet: '',
            tv_mobile_expance_loan_no: false,
            tv_mobile_expance_loan_yes: false,
            display_step_6: false,
            tel_tv: '',
            display_step_7: false,
            transport_vahicle_loan: '',
            transport_vahicle_loan_yes: false,
            transport_vahicle_loan_no: false,
            transport_vahicle_loan_new: '',
            display_step_8: false,
            recreation_entertainment: '',
            display_step_9: false,
            recreation_entertainment_yes: false,
            recreation_entertainment_no: false,
            recreation_entertainment_new: '',
            display_step_10: false,
            display_step_11: false,
            medical_health: '',
            medical_health_yes: false,
            medical_health_no: false,
            utility_rates: '',
            display_step_12: false,
            utility_rates_yes: false,
            utility_rates_no: false,
            insurance: '',
            display_step_13: false,
            insurance_yes: false,
            insurance_no: false,
            display_step_14: false,
            new_insurance: '',
            display_step_15: false,
            education: '',
            education_yes: false,
            education_no: false,
            new_education: '',
            display_step_16: false,
            display_step_17: false,
            child_care: '',
            child_care_yes: false,
            child_care_no: false,
            display_step_18: false,
            child_maintainance: '',
            rent: '',
            display_step_19: false,
            rent_yes: false,
            rent_no: false

        };

    }

    display_step_2(value) {
        this.setState({
            gloceries: value
        });

        if (this.state.gloceries != '') {
            this.setState({
                display_step_2: true
            });
        }

    }

    display_step_3(value) {
        this.setState({
            clothing_personal_care: value
        });
        if (this.state.gloceries != '') {
            this.setState({
                display_step_3: true
            });
        }




    }

    display_step_4(value) {
        this.setState({
            clothing_personal_care: value
        });
        if (this.state.clothing_personal_care != '') {
            this.setState({
                display_step_4: true
            });
        }
    }

    display_step_5(value) {
        this.setState({
            tel_tv_internet: value
        });

        if (this.state.tel_tv_internet != '') {
            this.setState({
                display_step_5: true
            });
        }
    }

    display_step_6(value) {
        this.setState({
            tel_tv: value
        });

        if (this.state.tel_tv != '') {
            this.setState({
                display_step_6: true
            });
        }

    }

    display_step_7(value) {
        this.setState({
            transport_vahicle_loan: value
        });

        if (this.state.transport_vahicle_loan != '') {
            this.setState({
                display_step_7: true
            });
        }
    }

    display_step_8(value) {
        this.setState({
            transport_vahicle_loan_new: value
        });

        if (this.state.transport_vahicle_loan_new != '') {
            this.setState({
                display_step_8: true
            });
        }

    }

    display_step_9(value) {
        this.setState({
            recreation_entertainment: value
        });

        if (this.state.recreation_entertainment != '') {
            this.setState({
                display_step_9: true
            });
        }

    }

    display_step_10(value) {
        this.setState({
            recreation_entertainment_new: value
        });

        if (this.state.recreation_entertainment_new != '') {
            this.setState({
                display_step_10: true
            });
        }

    }
    display_step_11(value) {
        this.setState({
            medical_health: value
        });

        if (this.state.medical_health != '') {
            this.setState({
                display_step_11: true
            });
        }

    }

    display_step_12(value) {
        this.setState({
            utility_rates: value
        });

        if (this.state.utility_rates != '') {
            this.setState({
                display_step_12: true
            });
        }

    }

    display_step_13(value) {
        this.setState({
            insurance: value
        });

        if (this.state.utility_rates != '') {
            this.setState({
                display_step_13: true
            });
        }

    }

    display_step_14(value) {
        this.setState({
            new_insurance: value
        });

        if (this.state.new_insurance != '') {
            this.setState({
                display_step_14: true
            });
        }
    }

    display_step_15(value) {
        this.setState({
            education: value
        });

        if (this.state.education != '') {
            this.setState({
                display_step_15: true
            });
        }
    }

    display_step_16(value) {
        this.setState({
            new_education: value
        });

        if (this.state.new_education != '') {
            this.setState({
                display_step_16: true
            });
        }
    }

    display_step_17(value) {
        this.setState({
            child_care: value
        });

        if (this.state.child_care != '') {
            this.setState({
                display_step_17: true
            });
        }
    }
    display_step_18(value) {
        this.setState({
            child_maintainance: value
        });

        if (this.state.child_maintainance != '') {
            this.setState({
                display_step_18: true
            });
        }
    }

    display_step_19(value) {
        this.setState({
            rent: value
        });

        if (this.state.rent != '') {
            this.setState({
                display_step_19: true
            });
        }
    }




    handleCheckBoxClick(status, response) {
        if (status === 1) {
            if (response) {
                this.setState({
                    glosarry_exchange_change_after_load_yes: true,
                })
            }
            else {
                this.setState({
                    glosarry_exchange_change_after_load_yes: false,
                })
            }
        }

        if (status === 2) {
            if (response) {
                this.setState({
                    glosarry_exchange_change_after_load_no: true
                })
            }
            else {
                this.setState({
                    glosarry_exchange_change_after_load_no: false,
                })
            }
        }

        if (status === 3) {
            if (response) {
                this.setState({
                    clothing_personal_load_yes: true,
                })
            }
            else {
                this.setState({
                    clothing_personal_load_yes: false,
                })
            }
        }

        if (status === 4) {
            if (response) {
                this.setState({
                    clothing_personal_load_no: true,
                })
            }
            else {
                this.setState({
                    clothing_personal_load_no: false,
                })
            }
        }

        if (status === 5) {
            if (response) {
                this.setState({
                    tv_mobile_expance_loan_yes: true,
                })
            }
            else {
                this.setState({
                    tv_mobile_expance_loan_yes: false,
                })
            }
        }

        if (status === 6) {
            if (response) {
                this.setState({
                    tv_mobile_expance_loan_no: true,
                })
            }
            else {
                this.setState({
                    tv_mobile_expance_loan_no: false,
                })
            }
        }

        if (status === 7) {
            if (response) {
                this.setState({
                    transport_vahicle_loan_yes: true,
                })
            }
            else {
                this.setState({
                    transport_vahicle_loan_yes: false,
                })
            }
        }

        if (status === 8) {
            if (response) {
                this.setState({
                    transport_vahicle_loan_no: true,
                })
            }
            else {
                this.setState({
                    transport_vahicle_loan_no: false,
                })
            }
        }
        if (status === 9) {
            if (response) {
                this.setState({
                    recreation_entertainment_yes: true,
                })
            }
            else {
                this.setState({
                    recreation_entertainment_yes: false,
                })
            }
        }
        if (status === 10) {
            if (response) {
                this.setState({
                    recreation_entertainment_no: true,
                })
            }
            else {
                this.setState({
                    recreation_entertainment_no: false,
                })
            }
        }
        if (status === 11) {
            if (response) {
                this.setState({
                    medical_health_yes: true,
                })
            }
            else {
                this.setState({
                    medical_health_yes: false,
                })
            }
        }
        if (status === 12) {
            if (response) {
                this.setState({
                    medical_health_no: true,
                })
            }
            else {
                this.setState({
                    medical_health_no: false,
                })
            }
        }
        if (status === 13) {
            if (response) {
                this.setState({
                    utility_rates_yes: true,
                })
            }
            else {
                this.setState({
                    utility_rates_yes: false,
                })
            }
        }

        if (status === 14) {
            if (response) {
                this.setState({
                    utility_rates_no: true,
                })
            }
            else {
                this.setState({
                    utility_rates_no: false,
                })
            }
        }
        if (status === 15) {
            if (response) {
                this.setState({
                    insurance_yes: true,
                })
            }
            else {
                this.setState({
                    insurance_yes: false,
                })
            }
        }
        if (status === 16) {
            if (response) {
                this.setState({
                    insurance_no: true,
                })
            }
            else {
                this.setState({
                    insurance_no: false,
                })
            }
        }

        if (status === 17) {
            if (response) {
                this.setState({
                    education_yes: true,
                })
            }
            else {
                this.setState({
                    education_yes: false,
                })
            }
        }

        if (status === 18) {
            if (response) {
                this.setState({
                    education_no: true,
                })
            }
            else {
                this.setState({
                    education_no: false,
                })
            }
        }

        if (status === 19) {
            if (response) {
                this.setState({
                    child_care_yes: true,
                })
            }
            else {
                this.setState({
                    child_care_yes: false,
                })
            }
        }

        if (status === 20) {
            if (response) {
                this.setState({
                    child_care_no: true,
                })
            }
            else {
                this.setState({
                    child_care_no: false,
                })
            }
        }

        if (status === 21) {
            if (response) {
                this.setState({
                    rent_yes: true,
                })
            }
            else {
                this.setState({
                    rent_yes: false,
                })
            }
        }

        if (status === 22) {
            if (response) {
                this.setState({
                    rent_no: true,
                })
            }
            else {
                this.setState({
                    rent_no: false,
                })
            }
        }
    }

    render() {
        return (<>

            <div className="container">
                <h3>Your monthly expenses</h3>
                <h6>We capture your expenses So that we can see if you can repay the are in a position to make sure understand if there are any changes in expenses after taking the loan.</h6>
                <div className="w-100">
                    <h6 className="float-right"><span className="text-danger">*</span> indicates a required field</h6>
                </div>
                <Form.Group>
                    <Form.Label><strong>Groceries<span className="text-danger">*</span></strong></Form.Label>
                    <Form.Control type="number" placeholder="$" onChange={e => { this.display_step_2(e.target.value) }} />
                </Form.Group>
                {(this.state.display_step_2) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will groceries expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(1, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(2, e.target.checked) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.glosarry_exchange_change_after_load_no || this.state.glosarry_exchange_change_after_load_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New groceries expense after loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Clothing & Personal Care  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { this.display_step_3(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_3) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Clothing & Personal Care expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(3, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(4, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.clothing_personal_load_no || this.state.clothing_personal_load_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Clothing & Personal Care after loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { this.display_step_4(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_4) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Telephone, Internet & Pay TV <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_5(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_5) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Telephone, Internet & Pay TV expense change after the loan  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(5, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(6, e.target.checked) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.tv_mobile_expance_loan_no || this.state.tv_mobile_expance_loan_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Telephone, Internet & Pay TV after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_6(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_6) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Transport / vehicle <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_7(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_6) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Transport / vehicle expense change after the loan  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(7, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(8, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.transport_vahicle_loan_yes || this.state.transport_vahicle_loan_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Transport / vehicle after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_8(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_8) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Recreation & Entertainment <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_9(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_9) ? (<>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Recreation & Entertainment expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(9, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(10, e.target.checked) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.tv_mobile_expance_loan_no || this.state.tv_mobile_expance_loan_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Recreation & Entertainment after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_10(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_10) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Medical & Health<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_11(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_11) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Recreation & Entertainment expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(11, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(12, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.medical_health_yes || this.state.medical_health_no) ? (<>

                    <Form.Group>
                        <Form.Label><strong>Utilities & Rates<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_12(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_12) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Utilities & Rates expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(13, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(14, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.utility_rates_yes || this.state.utility_rates_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Insurance<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_13(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_13) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Insurance expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(15, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(16, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.insurance_yes || this.state.insurance_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Insurance expense after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_14(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_14) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Education<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_15(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_15) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Education expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(17, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(18, e.target.checked) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.education_no || this.state.education_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Education expense after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_16(e.target.value) }} />
                    </Form.Group>


                </>) : null}

                {(this.state.display_step_16) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Childcare<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_17(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_17) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Childcare expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(19, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(20, e.target.checked) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.child_care_yes || this.state.child_care_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Childcare<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_18(e.target.value) }} />
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_18) ? (<>

                    <Form.Group>
                        <Form.Label><strong>Rent<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { this.display_step_19(e.target.value) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_19) ? (<>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Rent change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="checkbox" label="Yes" onChange={(e) => { this.handleCheckBoxClick(21, e.target.checked) }} />
                        <Form.Check type="checkbox" label="No" onChange={(e) => { this.handleCheckBoxClick(22, e.target.checked) }} />
                    </Form.Group>

                </>) : null}

                {(this.state.rent_yes || this.state.rent_no) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><h3>Total current expenses</h3></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { }} />
                        <Form.Label><h3>Total future expenses</h3></Form.Label>
                        <Form.Control type="number" placeholder="$" onChange={(e) => { }} />
                    </Form.Group>

                </>) : null}


            </div>

            <div className="row">
                <div className="form-group">
                    {this.props.details.current_step > 1 ? (<button className="btn  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {this.props.details.current_step < 6 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => this.props.onNextButtonClick()} >Next</button>) : null}
                </div>
            </div>

        </>)
    }

}

export default Step5;