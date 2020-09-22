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
            new_gloceries: '',
            glosarry_exchange_change_after_load_no: false,
            glosarry_exchange_change_after_load_yes: false,
            display_step_3: false,
            clothing_personal_care: '',
            new_clothing_personal_care: '',
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
            new_medical_health: "",
            utility_rates: '',
            display_step_12: false,
            utility_rates_yes: false,
            utility_rates_no: false,
            new_utility_rates: '',
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
            child_maintainance_care_yes: false,
            child_maintainance_care_no: false,
            child_maintainance: '',
            rent: '',
            new_child_maintainance: '',
            display_step_19: false,
            rent_yes: false,
            rent_no: false,
            new_rent: '',
            total_current_expenses: '',
            total_future_expenses: '',
            errors: {}
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
        // glosarry_exchange_change_after_load_yes{}
        this.setState({
            clothing_personal_care: value
        });
        if (this.state.gloceries != '') {
            this.setState({
                display_step_3: true
            });
        }
    }
    display_step_3_yes(value) {
        this.setState({
            new_gloceries: value
        });
        if (this.state.gloceries != '') {
            this.setState({
                glosarry_exchange_change_after_load_no: true,
            });
        }




    }

    display_step_4(value) {
        this.setState({
            new_clothing_personal_care: value,
            //display_step_4: false
        });
        if (this.state.new_clothing_personal_care != '') {
            this.setState({
                display_step_4: true
            });
        }
    }

    display_step_5(value) {
        this.setState({
            tel_tv_internet: value,
            //clothing_personal_load_yes: false
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
    display_step_10_health_yes(value) {
        this.setState({
            new_medical_health: value
        });

        if (this.state.new_medical_health != '') {
            this.setState({
                medical_health_no: true
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
    display_step_13_yes(value) {
        this.setState({
            new_utility_rates: value
        });

        if (this.state.utility_rates != '') {
            this.setState({
                utility_rates_no: true
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
            child_maintainance: value
        });

        if (this.state.child_maintainance != '') {
            this.setState({
                display_step_19: true
            });
        }
    }
    display_step_19_yes(value) {
        this.setState({
            new_child_maintainance: value
        });

        if (this.state.new_child_maintainance != '') {
            this.setState({
                child_maintainance_care_no: true
            });
        }
    }
    display_step_20(value) {
        this.setState({
            rent: value
        });

        if (this.state.rent != '') {
            this.setState({
                display_step_20: true
            });
        }
    }
    display_step_20_yes(value) {
        this.setState({
            new_rent: value
        });

        if (this.state.new_rent != '') {
            this.setState({
                rent_no: true
            });
        }
    }



    handleCheckBoxClick(status, response) {
        if (status === 1) {
            if (response) {
                this.setState({
                    glosarry_exchange_change_after_load_yes: true,
                    glosarry_exchange_change_after_load_no: false,
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
                    glosarry_exchange_change_after_load_no: true,
                    glosarry_exchange_change_after_load_yes: false,
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
                    clothing_personal_load_no: false,
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
                    clothing_personal_load_yes: false,
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
                    tv_mobile_expance_loan_no: false,
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
                    tv_mobile_expance_loan_yes: false,
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
                    transport_vahicle_loan_no: false,
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
                    transport_vahicle_loan_yes: false,
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
                    recreation_entertainment_no: false,
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
                    recreation_entertainment_yes: false,
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
                    medical_health_no: false,
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
                    medical_health_yes: false,
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
                    utility_rates_no: false,
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
                    utility_rates_yes: false,
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
                    insurance_no: false,
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
                    insurance_yes: false,
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
                    education_no: false,
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
                    education_yes: false,
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
                    child_care_no: false,
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
                    child_care_yes: false,
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
                    rent_no: false,
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
                    rent_yes: false,
                })
            }
            else {
                this.setState({
                    rent_no: false,
                })
            }
        }
        if (status === 23) {
            if (response) {
                this.setState({
                    child_maintainance_care_yes: true,
                    child_maintainance_care_no: false,
                })
            }
            else {
                this.setState({
                    child_maintainance_care_yes: false,
                })
            }
        }

        if (status === 24) {
            if (response) {
                this.setState({
                    child_maintainance_care_no: true,
                    child_maintainance_care_yes: false,
                })
            }
            else {
                this.setState({
                    child_maintainance_care_no: false,
                })
            }
        }
    }
    handleKeyUp(e) {
        if (e.target.value.length <= 1) {
            e.target.value = '$';
        } else if (e.target.value.indexOf('$') !== 0) {
            e.target.value = '$' + String.fromCharCode(e.which);
        }
        console.log(this.state)
    };
    updateInputValue(e, param) {
        if (param == 'future') {
            this.setState({
                total_future_expenses: '$NaN'
            })
        } else {
            if (e.target.value.length <= 1) {
                e.target.value = '$';
            } else if (e.target.value.indexOf('$') !== 0) {
                e.target.value = '$' + String.fromCharCode(e.which);
                this.setState({
                    total_future_expenses: '$NaN'
                })
            }
        }

    }
    // onNextButtonClick() {
    //     this.state.errors = {}
    //     let formIsValid = true;
    //     if (this.state.gloceries == '') {
    //         formIsValid = false;
    //         this.state.errors["gloceries"] = "This field is required";
    //     } else {
    //         if (this.state.display_step_2 && (this.state.glosarry_exchange_change_after_load_yes || this.state.glosarry_exchange_change_after_load_no)) {
    //             this.state.errors = {}
    //             if (!this.state.new_gloceries) {
    //                 console.log("hhjhkj")
    //                 formIsValid = false;
    //                 this.state.errors["newgloceries"] = "This field is required";
    //             }
    //             if (!this.state.clothing_personal_care) {
    //                 formIsValid = false;
    //                 this.state.errors["clothing"] = "This field is required";
    //             }
    //             if (this.state.display_step_3 && (this.state.clothing_personal_load_yes || this.state.clothing_personal_load_no)) {
    //                 if (!this.state.new_clothing_personal_care) {
    //                     formIsValid = false;
    //                     this.state.errors["newclothing"] = "This field is required";
    //                 }
    //                 if (!this.state.tel_tv_internet) {
    //                     formIsValid = false;
    //                     this.state.errors["telephone"] = "This field is required";
    //                 }
    //                 if (this.state.display_step_5 && (this.state.tv_mobile_expance_loan_yes || this.state.tv_mobile_expance_loan_no)) {
    //                     if (!this.state.tel_tv) {
    //                         formIsValid = false;
    //                         this.state.errors["tel_tv"] = "This field is required";
    //                     }
    //                     if (!this.state.transport_vahicle_loan) {
    //                         formIsValid = false;
    //                         this.state.errors["transport_vahicle_loan"] = "This field is required";
    //                     }
    //                     if (this.state.display_step_7 && (this.state.transport_vahicle_loan_yes || this.state.transport_vahicle_loan_no)) {
    //                         if (!this.state.transport_vahicle_loan_new) {
    //                             formIsValid = false;
    //                             this.state.errors["transport_vahicle_loan_new"] = "This field is required";
    //                         }
    //                         if (!this.state.recreation_entertainment) {
    //                             formIsValid = false;
    //                             this.state.errors["recreation_entertainment"] = "This field is required";
    //                         }
    //                         if (this.state.display_step_9 && (this.state.recreation_entertainment_yes || this.state.recreation_entertainment_no)) {
    //                             if (!this.state.recreation_entertainment_new) {
    //                                 formIsValid = false;
    //                                 this.state.errors["recreation_entertainment_new"] = "This field is required";
    //                             }
    //                             if (!this.state.medical_health) {
    //                                 formIsValid = false;
    //                                 this.state.errors["medical_health"] = "This field is required";
    //                             }

    //                             if (this.state.display_step_11 && (this.state.medical_health_yes || this.state.medical_health_no)) {
    //                                 if (!this.state.new_medical_health) {
    //                                     formIsValid = false;
    //                                     this.state.errors["new_medical_health"] = "This field is required";
    //                                 }
    //                                 if (!this.state.utility_rates) {
    //                                     formIsValid = false;
    //                                     this.state.errors["utility_rates"] = "This field is required";
    //                                 }
    //                                 if (this.state.display_step_12 && (this.state.utility_rates_yes || this.state.utility_rates_no)) {
    //                                     if (!this.state.new_utility_rates) {
    //                                         formIsValid = false;
    //                                         this.state.errors["new_utility_rates"] = "This field is required";
    //                                     }
    //                                     if (!this.state.insurance) {
    //                                         formIsValid = false;
    //                                         this.state.errors["insurance"] = "This field is required";
    //                                     }
    //                                     if (this.state.display_step_13 && (this.state.insurance_yes || this.state.insurance_no)) {
    //                                         if (!this.state.new_insurance) {
    //                                             formIsValid = false;
    //                                             this.state.errors["new_insurance"] = "This field is required";
    //                                         }
    //                                         if (!this.state.education) {
    //                                             formIsValid = false;
    //                                             this.state.errors["education"] = "This field is required";
    //                                         }
    //                                         if (this.state.display_step_15 && (this.state.education_yes || this.state.education_no)) {
    //                                             if (!this.state.new_education) {
    //                                                 formIsValid = false;
    //                                                 this.state.errors["new_education"] = "This field is required";
    //                                             }
    //                                             if (!this.state.child_care) {
    //                                                 formIsValid = false;
    //                                                 this.state.errors["child_care"] = "This field is required";
    //                                             }
    //                                             if (this.state.display_step_17 && (this.state.child_care_yes || this.state.child_care_no)) {
    //                                                 if (!this.state.child_maintainance) {
    //                                                     formIsValid = false;
    //                                                     this.state.errors["child_maintainance"] = "This field is required";
    //                                                 }
    //                                                 if (!this.state.child_maintainance) {
    //                                                     formIsValid = false;
    //                                                     this.state.errors["child_maintainance"] = "This field is required";
    //                                                 }
    //                                                 if (this.state.display_step_19 && (this.state.child_maintainance_care_yes || this.state.child_maintainance_care_no)) {
    //                                                     if (!this.state.new_child_maintainance) {
    //                                                         formIsValid = false;
    //                                                         this.state.errors["new_child_maintainance"] = "This field is required";
    //                                                     }
    //                                                     if (!this.state.rent) {
    //                                                         formIsValid = false;
    //                                                         this.state.errors["rent"] = "This field is required";
    //                                                     }
    //                                                     if (this.state.display_step_20 && (this.state.rent_yes || this.state.rent_no)) {
    //                                                         if (!this.state.new_rent) {
    //                                                             formIsValid = false;
    //                                                             this.state.errors["new_rent"] = "This field is required";
    //                                                         } else {
    //                                                             formIsValid = true;
    //                                                         }

    //                                                     } else {
    //                                                         formIsValid = false;
    //                                                         this.state.errors["radio12"] = "This field is required";
    //                                                     }
    //                                                 } else {
    //                                                     formIsValid = false;
    //                                                     this.state.errors["radio11"] = "This field is required";
    //                                                 }
    //                                             } else {
    //                                                 formIsValid = false;
    //                                                 this.state.errors["radio10"] = "This field is required";
    //                                             }
    //                                         } else {
    //                                             formIsValid = false;
    //                                             this.state.errors["radio9"] = "This field is required";
    //                                         }
    //                                     } else {
    //                                         formIsValid = false;
    //                                         this.state.errors["radio8"] = "This field is required";
    //                                     }
    //                                 } else {
    //                                     formIsValid = false;
    //                                     this.state.errors["radio7"] = "This field is required";
    //                                 }
    //                             } else {
    //                                 formIsValid = false;
    //                                 this.state.errors["radio6"] = "This field is required";
    //                             }
    //                         } else {
    //                             formIsValid = false;
    //                             this.state.errors["radio5"] = "This field is required";
    //                         }
    //                     } else {
    //                         formIsValid = false;
    //                         this.state.errors["radio4"] = "This field is required";
    //                     }
    //                 } else {
    //                     formIsValid = false;
    //                     this.state.errors["radio3"] = "This field is required";
    //                 }
    //             } else {
    //                 formIsValid = false;
    //                 this.state.errors["radio2"] = "This field is required";
    //             }
    //         } else {
    //             formIsValid = false;
    //             this.state.errors["radio1"] = "This field is required";
    //         }
    //     }
    //     this.setState({
    //         errors: this.state.errors
    //     })
    //     console.log(this.state)
    //     if (formIsValid) {
    //         this.props.onNextButtonClick();
    //     }
    // }
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
                    <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={e => { this.display_step_2(e.target.value) }} />

                    {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.gloceries} </strong></Form.Label> : null}
                </Form.Group>
                {(this.state.display_step_2) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will groceries expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio1" label="Yes" onChange={(e) => { this.handleCheckBoxClick(1, e.target.checked) }} />
                        <Form.Check type="radio" name="radio1" label="No" onChange={(e) => { this.handleCheckBoxClick(2, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio1} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {/* {(this.state.glosarry_exchange_change_after_load_no || this.state.glosarry_exchange_change_after_load_yes) ? (<> */}
                {this.state.glosarry_exchange_change_after_load_yes ?
                    <Form.Group>
                        <Form.Label><strong>New groceries expense after loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { this.display_step_3_yes(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.newgloceries} </strong></Form.Label> : null}
                    </Form.Group>
                    : null}
                {this.state.glosarry_exchange_change_after_load_no ?
                    <Form.Group>
                        <Form.Label><strong>Clothing & Personal Care  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { this.display_step_3(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.clothing} </strong></Form.Label> : null}
                    </Form.Group>
                    : null}
                {/* </>) : null} */}

                {(this.state.display_step_3) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Clothing & Personal Care expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio2" label="Yes" onChange={(e) => { this.handleCheckBoxClick(3, e.target.checked) }} />
                        <Form.Check type="radio" name="radio2" label="No" onChange={(e) => { this.handleCheckBoxClick(4, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio2} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {/* {(this.state.clothing_personal_load_no || this.state.clothing_personal_load_yes) ? (<> */}
                {(this.state.clothing_personal_load_yes) ?
                    <Form.Group>
                        <Form.Label><strong>New Clothing & Personal Care after loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { this.display_step_4(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.newclothing} </strong></Form.Label> : null}
                    </Form.Group>
                    : null}
                {/*   */}
                {(this.state.display_step_4) || (this.state.clothing_personal_load_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Telephone, Internet & Pay TV <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_5(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.telephone} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}
                {/* </>) : null} */}



                {(this.state.display_step_5) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Telephone, Internet & Pay TV expense change after the loan  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio3" label="Yes" onChange={(e) => { this.handleCheckBoxClick(5, e.target.checked) }} />
                        <Form.Check type="radio" name="radio3" label="No" onChange={(e) => { this.handleCheckBoxClick(6, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio3} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.tv_mobile_expance_loan_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Telephone, Internet & Pay TV after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_6(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.tel_tv} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.tv_mobile_expance_loan_no) || (this.state.display_step_6) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Transport / vehicle <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_7(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.transport_vahicle_loan} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_7) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Transport / vehicle expense change after the loan  <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio4" label="Yes" onChange={(e) => { this.handleCheckBoxClick(7, e.target.checked) }} />
                        <Form.Check type="radio" name="radio4" label="No" onChange={(e) => { this.handleCheckBoxClick(8, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio4} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.transport_vahicle_loan_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Transport / vehicle after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_8(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.transport_vahicle_loan_new} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_8) || (this.state.transport_vahicle_loan_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Recreation & Entertainment <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_9(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.recreation_entertainment} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_9) ? (<>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Recreation & Entertainment expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio5" label="Yes" onChange={(e) => { this.handleCheckBoxClick(9, e.target.checked) }} />
                        <Form.Check type="radio" name="radio5" label="No" onChange={(e) => { this.handleCheckBoxClick(10, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio5} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {/* this.state.tv_mobile_expance_loan_no || */}
                {(this.state.recreation_entertainment_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Recreation & Entertainment after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_10(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.recreation_entertainment_new} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_10) || (this.state.recreation_entertainment_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Medical & Health<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_11(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.medical_health} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_11) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Medical & Health expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio6" label="Yes" onChange={(e) => { this.handleCheckBoxClick(11, e.target.checked) }} />
                        <Form.Check type="radio" name="radio6" label="No" onChange={(e) => { this.handleCheckBoxClick(12, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio6} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.medical_health_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Medical & Health after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_10_health_yes(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_medical_health} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.medical_health_no) ? (<>

                    <Form.Group>
                        <Form.Label><strong>Utilities & Rates<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_12(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.utility_rates} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_12) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Utilities & Rates expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio7" label="Yes" onChange={(e) => { this.handleCheckBoxClick(13, e.target.checked) }} />
                        <Form.Check type="radio" name="radio7" label="No" onChange={(e) => { this.handleCheckBoxClick(14, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio7} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.utility_rates_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Utilities & Rates after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_13_yes(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_utility_rates} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}
                {(this.state.utility_rates_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Insurance<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_13(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.insurance} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_13) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Insurance expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio8" label="Yes" onChange={(e) => { this.handleCheckBoxClick(15, e.target.checked) }} />
                        <Form.Check type="radio" name="radio8" label="No" onChange={(e) => { this.handleCheckBoxClick(16, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio8} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.insurance_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Insurance expense after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_14(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_insurance} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_14) || (this.state.insurance_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Education<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_15(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.education} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_15) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Education expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio9" label="Yes" onChange={(e) => { this.handleCheckBoxClick(17, e.target.checked) }} />
                        <Form.Check type="radio" name="radio9" label="No" onChange={(e) => { this.handleCheckBoxClick(18, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio9} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.education_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Education expense after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_16(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_education} </strong></Form.Label> : null}
                    </Form.Group>


                </>) : null}

                {(this.state.display_step_16) || (this.state.education_no) ? (<>
                    <Form.Group>
                        <Form.Label><strong>Childcare<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_17(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.child_care} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.display_step_17) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Childcare expense change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio10" label="Yes" onChange={(e) => { this.handleCheckBoxClick(19, e.target.checked) }} />
                        <Form.Check type="radio" name="radio10" label="No" onChange={(e) => { this.handleCheckBoxClick(20, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio10} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.child_care_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Childcare expense after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_18(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.child_maintainance} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.display_step_18) || (this.state.child_care_no) ? (<>

                    <Form.Group>
                        <Form.Label><strong>Child maintenance<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_19(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.child_maintainance} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}


                {(this.state.display_step_19) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Childcare maintenance change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio11" label="Yes" onChange={(e) => { this.handleCheckBoxClick(23, e.target.checked) }} />
                        <Form.Check type="radio" name="radio11" label="No" onChange={(e) => { this.handleCheckBoxClick(24, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio11} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.child_maintainance_care_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Child maintenance after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_19_yes(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_child_maintainance} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.child_maintainance_care_no) ? (<>

                    <Form.Group>
                        <Form.Label><strong>Rent<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_20(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.rent} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}


                {(this.state.display_step_20) ? (<>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><strong>Will Rent change after the loan <span className="text-danger">*</span></strong></Form.Label>
                        <Form.Check type="radio" name="radio12" label="Yes" onChange={(e) => { this.handleCheckBoxClick(21, e.target.checked) }} />
                        <Form.Check type="radio" name="radio12" label="No" onChange={(e) => { this.handleCheckBoxClick(22, e.target.checked) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.radio12} </strong></Form.Label> : null}
                    </Form.Group>

                </>) : null}

                {(this.state.rent_yes) ? (<>
                    <Form.Group>
                        <Form.Label><strong>New Rent after the loan<span className="text-danger">*</span></strong></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.display_step_20_yes(e.target.value) }} />
                        {this.state.errors ? <Form.Label><strong className="text-danger"> {this.state.errors.new_rent} </strong></Form.Label> : null}
                    </Form.Group>
                </>) : null}

                {(this.state.rent_no) ? (<>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label><h3>Total current expenses</h3></Form.Label>
                        <Form.Control type="text" onKeyUp={e => this.handleKeyUp(e)} onChange={(e) => { this.updateInputValue(e, 'current') }} />
                        <Form.Label><h3>Total future expenses</h3></Form.Label>
                        <Form.Control type="text" onChange={(e) => { this.updateInputValue(e, 'future') }} value={this.state.total_future_expenses} />
                    </Form.Group>

                </>) : null}


            </div>

            <div className="row">
                <div className="form-group">
                    {this.props.details.current_step > 1 ? (<button className="btn  btn-previous  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                    {this.props.details.current_step < 6 ? (<button className="btn  btn-next  btn-primary float-right ml-2" onClick={() => this.props.onNextButtonClick()} >Next</button>) : null}
                </div>
            </div>

        </>)
    }

}

export default Step5;