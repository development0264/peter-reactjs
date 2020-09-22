import React, { Component, useState, Fragment } from 'react';
import Dropzone from "react-dropzone";

import check_icon from './check-icon.png';
// import "../style.css";

class step2 extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            form_property: [{
                selectedValue: '',
                property_residentialAddress1: "",
                property_address1: "",
                property_address2: "",
                property_address3: "",
                property_city: "",
                postal_code: '',
                property_assetValue: "",
                property_assetLoan: "",
                property_asset: "",
                property_filename: "",
                property_LiveIn: false,
                property_Investment: false,
                depositFunds_assetValue: "",
                depositFunds_financialassetValue: "",
                depositFunds_filename: "",
                vehicle_assetDescriptionValue: "",
                vehicle_assetValue: "",
                vehicle_assetLoan: "",
                vehicle_filename: "",
                homeContents_assetValue: "",
                shares_assetValue: "",
                shares_assetFinancialValue: "",
                superannuation_assetValue: "",
                superannuation_assetFinancialValue: "",
                other_assetDescriptionValue: "",
                other_assetValue: "",
                count: 1,
                errors: {}
            }],
            share_financial_details_to_me: false,
            share_financial_details_to_public: false,
        }

        //this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event, index) {
        var form_property = this.state.form_property
        form_property[index].selectedValue = event.target.value
        this.setState({ form_property: form_property });
    }

    addAnother(e, index) {

        const Findindex = this.state.form_property.findIndex(item => item.count == e.count + 1)
        console.log('index', Findindex)
        if (Findindex > -1) {
            const items = this.state.form_property.filter(item => item.count !== e.count + 1);
            const list = items.filter(item => item.count <= Findindex);

            this.setState({
                count: list.length,
                form_property: list
            });


        } else {
            this.state.form_property.push({
                selectedValue: '',
                property_residentialAddress1: "",
                property_address1: "",
                property_address2: "",
                property_address3: "",
                property_city: "",
                postal_code: '',
                property_assetValue: "",
                property_assetLoan: "",
                property_asset: "",
                property_filename: "",
                property_LiveIn: false,
                property_Investment: false,
                depositFunds_assetValue: "",
                depositFunds_financialassetValue: "",
                depositFunds_filename: "",
                vehicle_assetDescriptionValue: "",
                vehicle_assetValue: "",
                vehicle_assetLoan: "",
                vehicle_filename: "",
                homeContents_assetValue: "",
                shares_assetValue: "",
                shares_assetFinancialValue: "",
                superannuation_assetValue: "",
                superannuation_assetFinancialValue: "",
                other_assetDescriptionValue: "",
                other_assetValue: "",
                count: this.state.count + 1,
                errors: {}
            })
            this.setState({
                count: this.state.count + 1,
                form_property: this.state.form_property,
            });
        }

    }
    fileDrop(e, index, col) {
        console.log(e)
    }
    handleKeyUp(e) {
        if (e.target.value.length < 1) {
            e.target.value = '$';
        } else if (e.target.value.indexOf('$') !== 0) {
            e.target.value = '$' + String.fromCharCode(e.which);
        }
    };
    onSharedWithMeClick = () => {
        if (this.state.share_financial_details_to_me === true) {
            this.setState({
                share_financial_details_to_me: false
            })
        }
        else {
            this.setState({
                share_financial_details_to_me: true,
                share_financial_details_to_public: false
            })
        }
    }

    onSharedWithPublicClick = () => {
        if (this.state.share_financial_details_to_public === true) {
            this.setState({
                share_financial_details_to_public: false,
            })
        }
        else {
            this.setState({
                share_financial_details_to_public: true,
                share_financial_details_to_me: false
            })
        }
    }
    onSharedLiveInClick = (index) => {
        if (this.state.form_property[index]["property_LiveIn"] === true) {
            var form_property = this.state.form_property

            form_property[index]["property_LiveIn"] = false;
            this.setState({ form_property: form_property });
        }
        else {
            var form_property = this.state.form_property

            form_property[index]["property_LiveIn"] = true;
            form_property[index]["property_Investment"] = false;
            this.setState({ form_property: form_property });
        }
        console.log(this.state.form_property)
    }

    onSharedInvestmentClick = (index) => {
        if (this.state.form_property[index]["property_Investment"] === true) {
            var form_property = this.state.form_property

            form_property[index]["property_Investment"] = false;
            this.setState({ form_property: form_property });
        }
        else {
            var form_property = this.state.form_property
            form_property[index]["property_LiveIn"] = false;
            form_property[index]["property_Investment"] = true;
            this.setState({ form_property: form_property });
        }
    }

    renderSelectedForm(param, el, index) {

        switch (param) {
            case 'form_property':
                return <div>
                    <div>
                        <br />
                        <label className="sub_label">Is Asset {el.count}  (Property) your home or an Investment</label>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={`${this.state.form_property[index]["property_LiveIn"] ? "email_validate_option_one_section checkbox-box active" : "email_validate_option_one_section checkbox-box"}`} >
                                    <div className="check-wrap">
                                        {/* {checkinlogo} */}
                                        <img src={check_icon} alt='checkin' />
                                    </div>
                                    <a onClick={e => this.onSharedLiveInClick(index)} className="box text-center text-white text-decoration-none" >
                                        <div>
                                            <p>Live in</p>
                                            {/* <center>{this.state.form_property[index]["property_LiveIn"] ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center> */}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={`${this.state.form_property[index]["property_Investment"] ? "email_validate_option_one_section checkbox-box active" : "email_validate_option_one_section checkbox-box"}`} >
                                    <div className="check-wrap">
                                        {/* {checkinlogo} */}
                                        <img src={check_icon} alt='checkin' />
                                    </div>
                                    <a onClick={e => this.onSharedInvestmentClick(index)} className="box text-center text-white text-decoration-none" >
                                        <div>
                                            <p>Investment</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <br />
                        <label className="sub_label" >Residential asset {el.count} address </label>

                        <div className="form-group lg">
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address1")} name="property_address1" value={el.property_address1}></input>
                            <label className="sub_label text-black">Address Line 1</label>
                        </div>
                        <div className="form-group lg">
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address2")} name="property_address2" value={el.property_address2}></input>
                            <label className="sub_label text-black">Address Line 2</label>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-4">
                                <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_city")} name="property_city" value={el.property_city}></input>
                                <label className="sub_label text-black" >City </label>
                            </div>
                            <div className="col-md-4">

                                <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address3")} name="property_address3" value={el.property_address3}></input>
                                <label className="sub_label text-black"> State / Province / Region</label>
                            </div>
                        </div>
                        <div className="form-group ">
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "postal_code")} name="postal_code" value={el.postal_code}></input>
                            <label className="sub_label text-black">Postal Code</label>
                        </div>

                        {el.selectedValue != "" ?
                            <div className="form-group mb-0">
                                <label className="sub_label">Value of Asset {el.count} <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_asset")} name="property_asset" value={el.property_asset} required={true} />
                                <label className="text-danger"><strong>{el.errors.property_asset}</strong></label>
                            </div>
                            :
                            <div className="form-group">
                                <label className="sub_label">Value of Asset {el.count}<span className="text-danger">*</span></label>
                                <input type="number" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_asset")} name="property_asset" value={el.property_asset} required={true} />
                                <label className="text-danger"><strong>{el.errors.property_asset}</strong></label>
                            </div>
                        }
                        <div className="form-group">
                            <label className="sub_label">Loan on asset (if any) </label>
                            <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_assetLoan")} name="property_assetLoan" value={el.property_assetLoan}></input>
                        </div>
                        <div className="form-group">
                            <label className="sub_label">Attach asset bank statement or supporting document</label>
                            <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                                <Dropzone
                                    onDrop={e => this.fileDrop(e, index, "property_filename")}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps({ className: "dropzone" })}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                    )}
                                </Dropzone>
                            </div>
                        </div>
                    </div>
                </div >
            //)
            case 'form_depositFunds':
                return <div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count} <span className="text-danger">*</span>  </label>
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "depositFunds_assetValue")} name="depositFunds_assetValue" value={el.depositFunds_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.depositFunds_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Asset {el.count} held with (financial institution name)</label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "depositFunds_financialassetValue")} name="depositFunds_financialassetValue" value={el.depositFunds_financialassetValue}></input>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Attach asset  bank statement or supporting document</label>
                        <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                            <Dropzone
                                onDrop={this.fileDrop}
                                accept="image/*"
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                    </div>
                </div>;
            case 'form_vehicle':
                return <div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Asset {el.count} description  (i.e. make, model, year)<span className="text-danger">*</span> </label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetDescriptionValue")} name="vehicle_assetDescriptionValue" value={el.vehicle_assetDescriptionValue}></input>
                        <label className="text-danger"><strong>{el.errors.vehicle_assetDescriptionValue}</strong></label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count} <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetValue")} name="vehicle_assetValue" value={el.vehicle_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.vehicle_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Loan on asset (if any)</label>
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetLoan")} name="vehicle_assetLoan" value={el.vehicle_assetLoan}></input>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Attach asset 1 bank statement or supporting document</label>
                        <div style={{ height: "100px" }} className="d-flex align-items-center justify-content-center border ">
                            <Dropzone
                                onDrop={this.fileDrop}
                                accept="image/*"
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                    </div>
                </div >;

            case 'form_homeContents':
                return <div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count} <span className="text-danger">*</span>  </label>
                        <input required type="text" onKeyUp={e => this.handleKeyUp(e)} className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "homeContents_assetValue")} name="homeContents_assetValue" value={el.homeContents_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.homeContents_assetValue}</strong></label>
                    </div>
                </div>
            case 'form_shares':
                return <div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count}  <span className="text-danger">*</span> </label>
                        <input required type="text" placeholder="$" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "shares_assetValue")} name="shares_assetValue" value={el.shares_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.shares_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Asset {el.count} held with (financial institution name)   </label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "shares_assetFinancialValue")} name="shares_assetFinancialValue" value={el.shares_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_superannuation':
                return <div>

                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count}  <span className="text-danger">*</span>  </label>
                        <input required type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "superannuation_assetValue")} name="superannuation_assetValue" value={el.superannuation_assetValue}></input>
                        <label className="text-danger">{el.errors.superannuation_assetValue}</label>
                    </div>
                    <div className="form-group">
                        <label className="sub_label">Asset  held with (financial institution name)   </label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "superannuation_assetFinancialValue")} name="superannuation_assetFinancialValue" value={el.superannuation_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_other':
                return <div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Asset  description  (i.e. make, model, year) <span className="text-danger">*</span> </label>
                        <input required type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "other_assetDescriptionValue")} name="other_assetDescriptionValue" value={el.other_assetDescriptionValue}></input>
                        <label className="text-danger"><strong>{el.errors.other_assetDescriptionValue}</strong></label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="sub_label">Value of Asset {el.count}  <span className="text-danger">*</span>    </label>
                        <input required type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "other_assetValue")} name="other_assetValue" value={el.other_assetValue}></input>
                    </div>
                    <br />
                </div>
            default:
                return null;
        }
    }

    onSecondFromSubmit() {
        let formIsValid = true;
        if (this.state.form_property[0].selectedValue != "") {
            for (var i = 0; i < this.state.form_property.length; i++) {
                this.state.form_property[i].errors = {}
                console.log(this.state.form_property[i].property_asset)
                if (!this.state.form_property[i].property_asset && this.state.form_property[i].selectedValue == 'form_property') {
                    formIsValid = false;
                    this.state.form_property[i].errors["property_asset"] = "This field is required";
                } if (!this.state.form_property[i].depositFunds_assetValue && this.state.form_property[i].selectedValue == 'form_depositFunds') {
                    formIsValid = false;
                    this.state.form_property[i].errors["depositFunds_assetValue"] = "This field is required";
                } if (!this.state.form_property[i].vehicle_assetDescriptionValue && this.state.form_property[i].selectedValue == 'form_vehicle') {
                    formIsValid = false;
                    this.state.form_property[i].errors["vehicle_assetDescriptionValue"] = "This field is required";
                }
                if (!this.state.form_property[i].vehicle_assetValue && this.state.form_property[i].selectedValue == 'form_vehicle') {
                    formIsValid = false;
                    this.state.form_property[i].errors["vehicle_assetValue"] = "This field is required";
                }
                if (!this.state.form_property[i].homeContents_assetValue && this.state.form_property[i].selectedValue == 'form_homeContents') {
                    formIsValid = false;
                    this.state.form_property[i].errors["homeContents_assetValue"] = "This field is required";
                }
                if (!this.state.form_property[i].shares_assetValue && this.state.form_property[i].selectedValue == 'form_shares') {
                    formIsValid = false;
                    this.state.form_property[i].errors["shares_assetValue"] = "This field is required";
                }
                if (!this.state.form_property[i].superannuation_assetValue && this.state.form_property[i].selectedValue == 'form_superannuation') {
                    formIsValid = false;
                    this.state.form_property[i].errors["superannuation_assetValue"] = "This field is required";
                }
                if (!this.state.form_property[i].other_assetDescriptionValue && this.state.form_property[i].selectedValue == 'form_other') {
                    formIsValid = false;
                    this.state.form_property[i].errors["other_assetDescriptionValue"] = "This field is required";
                }
                if (!this.state.form_property[i].other_assetValue && this.state.form_property[i].selectedValue == 'form_other') {
                    formIsValid = false;
                    this.state.form_property[i].errors["other_assetValue"] = "This field is required";
                }
            }
            if (formIsValid) {
                this.props.onNextButtonClick();
            }
            this.setState({
                form_property: this.state.form_property
            })
            console.log(this.state.form_property)
        } else {

            if (formIsValid) {
                this.props.onNextButtonClick();
            }
        }
    }

    handleTextChange(event, index, col) {
        var form_property = this.state.form_property

        form_property[index]["" + col + ""] = event;
        this.setState({ form_property: form_property });
        console.log(this.state.form_property)

    }
    renderhtml() {
        const { share_financial_details_to_me, share_financial_details_to_public } = this.state;
        // console.log(this.state.form_property)
        var list = []
        this.state.form_property.map((el, index) => {
            list.push(
                <div key={index.toString()}>
                    {el.count == 1 ? <div>
                        <label className="sub_label">Are the following financial details just for you, or are they shared with your partner or spouse?</label>

                        <div className="row">
                            <div className="col-md-12">
                                <br />
                            </div>
                            <div className="col-md-4">
                                <div className={`${share_financial_details_to_me ? "email_validate_option_one_section checkbox-box active" : "email_validate_option_one_section checkbox-box"}`} >
                                    <div className="check-wrap">
                                        {/* {checkinlogo} */}
                                        <img src={check_icon} alt='checkin' />
                                    </div>
                                    <a onClick={e => this.onSharedWithMeClick()} className="box text-center text-decoration-none" >
                                        <div>
                                            <p>Just mine</p>
                                            <p>the following relates just to me</p>
                                            <p></p>
                                        </div>
                                        {/* <center>{share_financial_details_to_me ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center> */}
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={`${share_financial_details_to_public ? "email_validate_option_two_section checkbox-box active" : "email_validate_option_two_section checkbox-box"}`}>
                                    <div className="check-wrap">
                                        {/* {checkinlogo} */}
                                        <img src={check_icon} alt='checkin' />
                                    </div>
                                    <a onClick={e => this.onSharedWithPublicClick()} className="box text-center text-decoration-none">
                                        <div>
                                            <p>Shared</p>
                                            <p>the following is shared with my partner or spouse</p>
                                        </div>
                                        {/* <center>{share_financial_details_to_public ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                    <br />
                    <div className="form-group">
                        <label className="sub_label">Add asset {el.count} <span className="text-danger">*</span> </label><br />
                        <select className="form-control" value={el.selectedValue} onChange={(value) => this.handleChange(value, index)}>
                            <option value="">-Select asset type-</option>
                            <option value="form_property">Property</option>
                            <option value="form_depositFunds">Deposit funds</option>
                            <option value="form_vehicle">Vehicle</option>
                            <option value="form_homeContents">Home contents</option>
                            <option value="form_shares">Shares</option>
                            <option value="form_superannuation">Superannuation</option>
                            <option value="form_other">Other</option>
                        </select>
                    </div>
                    <div>
                        {el.selectedValue != "" ?
                            <div>
                                {this.renderSelectedForm(el.selectedValue, el, index)}
                                {index != 5 ? <button className="btn p-3 text-white bg-secondary" onClick={e => this.addAnother(el, index)}><strong>Add another</strong></button> : null}
                            </div>
                            :
                            (index > 0 && index < 6) ?
                                <div>
                                    <div>
                                        <div className="form-group mb-0">
                                            <label className="sub_label">Value of Asset {el.count} <span className="text-danger"></span></label><br />
                                            <input className="form-control" type="text" value={el.asset} /><br />
                                        </div>
                                    </div>
                                    {index != 5 ? <button className="btn p-3 text-white bg-secondary" onClick={e => this.addAnother(el, index)}><strong>Add another</strong></button> : null}
                                </div>
                                : null}
                    </div>
                </div >
            )
        })
        return list
    }

    render() {
        return (
            <div>
                <h3><strong>Your assets</strong></h3>
                <br />
                {this.state.form_property.length > 0 ? this.renderhtml() : null}

                <div className="row">
                    <div className="form-group">
                        <br />
                        <br />
                        {this.props.details.current_step > 1 ? (<button className="btn  btn-previous  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                        {this.props.details.current_step < 5 ? (<button className="btn  btn-next  btn-primary float-right ml-2" onClick={() => this.onSecondFromSubmit(this.state.form_property)} >Next</button>) : null}
                    </div>
                </div>

            </div>
        )
    }
}
export default step2;