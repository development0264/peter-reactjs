import React, { Component, useState, Fragment } from 'react';
import Dropzone from "react-dropzone";
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
                property_assetValue: "",
                property_assetLoan: "",
                property_asset: "",
                property_filename: "",
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
            // var form_property = this.state.form_property.splice(Findindex, 1)
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
                property_assetValue: "",
                property_assetLoan: "",
                property_asset: "",
                depositFunds_assetValue: "",
                depositFunds_financialassetValue: "",
                vehicle_assetDescriptionValue: "",
                vehicle_assetValue: "",
                vehicle_assetLoan: "",
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

    renderSelectedForm(param, el, index) {

        switch (param) {
            case 'form_property':
                //return this.state.form_property.map((el, i) =>
                return <div>
                    <div>
                        <br />
                        <label className="text-secondary"><strong>Is Asset {el.count}  (Property) your home or an Investment</strong></label>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="email_validate_option_one_section bg-secondary text-white rounded">
                                    <a onClick={e => this.onSharedWithMeClick()} className="box text-center text-white text-decoration-none" >
                                        <p><strong>Live in</strong></p>
                                        <center>{0 ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="email_validate_option_one_section bg-secondary text-white rounded">
                                    <a onClick={e => this.onSharedWithMeClick()} className="box text-center text-white text-decoration-none" >
                                        <p><strong>Investment</strong></p>
                                        <center>{0 ? (<label className="text-success"><strong>Activated</strong></label>) : (<label className="text-white"><strong>Deactivated</strong></label>)}</center>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className="text-secondary" ><strong>Residential asset {el.count} address </strong></label>
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_residentialAddress1")} name="property_residentialAddress1" value={el.property_residentialAddress1}></input><br />
                        </div>
                        <div className="form-group">
                            <label><strong>Address Line 1 </strong></label>
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address1")} name="property_address1" value={el.property_address1}></input><br />
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label><strong>Address Line 2 </strong></label>
                                <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address2")} name="property_address2" value={el.property_address2}></input>
                            </div>
                            <div className="col-md-6">
                                <label><strong>State / Province / Region</strong></label>
                                <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_address3")} name="property_address3" value={el.property_address3}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label><strong>City </strong></label><br />
                            <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "property_city")} name="property_city" value={el.property_city}></input><br />
                        </div>
                        <label><strong>Postal Code</strong></label><br />

                        {el.selectedValue != "" ?
                            <div>
                                <label className="text-secondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span></strong></label><br />
                                <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_asset")} name="property_asset" value={el.property_asset} required={true} /><br />
                                <label className="text-danger"><strong>{el.errors.property_asset}</strong></label>
                            </div>
                            :
                            <div>
                                <label className="text-secondary"><strong>Value of Asset {el.count}<span className="text-danger">*</span></strong></label><br />
                                <input type="number" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_asset")} name="property_asset" value={el.property_asset} required={true} /><br />
                                <label className="text-danger"><strong>{el.errors.property_asset}</strong></label>
                            </div>
                        }
                        <div className="form-group">
                            <label className="text-secondary"><strong>Loan on asset (if any)</strong> </label><br />
                            <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "property_assetLoan")} name="property_assetLoan" value={el.property_assetLoan}></input><br />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary"><strong>Attach asset bank statement or supporting document</strong></label><br />
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
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span> </strong> </label><br />
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "depositFunds_assetValue")} name="depositFunds_assetValue" value={el.depositFunds_assetValue}></input><br />
                        <label className="text-danger"><strong>{el.errors.depositFunds_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset {el.count} held with (financial institution name)</strong></label><br />
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "depositFunds_financialassetValue")} name="depositFunds_financialassetValue" value={el.depositFunds_financialassetValue}></input><br />
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Attach asset  bank statement or supporting document</strong></label><br />
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
                    <div className="form-group">
                        <label className="text-scondary"><strong>Asset {el.count} description  (i.e. make, model, year)<span className="text-danger">*</span> </strong></label><br />
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetDescriptionValue")} name="vehicle_assetDescriptionValue" value={el.vehicle_assetDescriptionValue}></input><br />
                        <label className="text-danger"><strong>{el.errors.vehicle_assetDescriptionValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-scondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span></strong> </label><br />
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetValue")} name="vehicle_assetValue" value={el.vehicle_assetValue}></input><br />
                        <label className="text-danger"><strong>{el.errors.vehicle_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-scondary"><strong>Loan on asset (if any)</strong> </label><br />
                        <input type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "vehicle_assetLoan")} name="vehicle_assetLoan" value={el.vehicle_assetLoan}></input><br />
                    </div>
                    <div className="form-group">
                        <label className="text-scondary"><strong>Attach asset 1 bank statement or supporting document</strong></label>
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
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span></strong>  </label>
                        <input required type="text" onKeyUp={e => this.handleKeyUp(e)} className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "homeContents_assetValue")} name="homeContents_assetValue" value={el.homeContents_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.homeContents_assetValue}</strong></label>
                    </div>
                </div>
            case 'form_shares':
                return <div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} </strong> <span className="text-danger">*</span> </label>
                        <input required type="text" placeholder="$" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "shares_assetValue")} name="shares_assetValue" value={el.shares_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.shares_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary">Asset {el.count} held with (financial institution name)   </label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "shares_assetFinancialValue")} name="shares_assetFinancialValue" value={el.shares_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_superannuation':
                return <div>
                    <br />
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} </strong> <span className="text-danger">*</span>  </label>
                        <input required type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "superannuation_assetValue")} name="superannuation_assetValue" value={el.superannuation_assetValue}></input>
                        <label className="text-danger"><strong>{el.errors.superannuation_assetValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset  held with (financial institution name) </strong>  </label>
                        <input type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "superannuation_assetFinancialValue")} name="superannuation_assetFinancialValue" value={el.superannuation_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_other':
                return <div>
                    <br />
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset  description  (i.e. make, model, year) <span className="text-danger">*</span></strong> </label>
                        <input required type="text" className="form-control" onChange={e => this.handleTextChange(e.target.value, index, "other_assetDescriptionValue")} name="other_assetDescriptionValue" value={el.other_assetDescriptionValue}></input>
                        <label className="text-danger"><strong>{el.errors.other_assetDescriptionValue}</strong></label>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count}  <span className="text-danger">*</span></strong>    </label>
                        <input required type="text" className="form-control" onKeyUp={e => this.handleKeyUp(e)} onChange={e => this.handleTextChange(e.target.value, index, "other_assetValue")} name="other_assetValue" value={el.other_assetValue}></input>
                    </div>
                </div>
            default:
                return null;
        }
    }

    onSecondFromSubmit() {
        let formIsValid = true;
        if (this.state.form_property[0].selectedValue != "") {
            for (var i = 0; i < this.state.form_property.length; i++) {
                console.log(this.state.form_property[i].property_asset)
                if (!this.state.form_property[i].property_asset) {
                    formIsValid = false;
                    this.state.form_property[i].errors["property_asset"] = "Required field";
                } if (!this.state.form_property[i].depositFunds_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["depositFunds_assetValue"] = "Required field";
                } if (!this.state.form_property[i].vehicle_assetDescriptionValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["vehicle_assetDescriptionValue"] = "Required field";
                }
                if (!this.state.form_property[i].vehicle_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["vehicle_assetValue"] = "Required field";
                }
                if (!this.state.form_property[i].homeContents_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["homeContents_assetValue"] = "Required field";
                }
                if (!this.state.form_property[i].shares_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["shares_assetValue"] = "Required field";
                }
                if (!this.state.form_property[i].superannuation_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["superannuation_assetValue"] = "Required field";
                }
                if (!this.state.form_property[i].other_assetDescriptionValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["other_assetDescriptionValue"] = "Required field";
                }
                if (!this.state.form_property[i].other_assetValue) {
                    formIsValid = false;
                    this.state.form_property[i].errors["other_assetValue"] = "Required field";
                }

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
                    <div>
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
                    </div>
                    <label className="text-secondary"><strong>Add asset {el.count} <span className="text-danger">*</span></strong> </label><br />
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
                    <div>
                        {el.selectedValue != "" ?
                            <div>
                                {this.renderSelectedForm(el.selectedValue, el, index)}
                                <button className="btn p-3 text-white bg-secondary" onClick={e => this.addAnother(el, index)}><strong>Add another</strong></button>
                            </div>
                            :
                            (index > 0 && index < 5) ?
                                <div>
                                    <div>
                                        <div className="form-group">
                                            <label className="text-secondary"><strong>Value of Asset {el.count} <span className="text-danger"></span></strong> </label><br />
                                            <input className="form-control" type="text" value={el.asset} /><br />
                                        </div>
                                    </div>
                                    <button className="btn p-3 text-white bg-secondary" onClick={e => this.addAnother(el, index)}><strong>Add another</strong></button>
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

                {this.state.form_property.length > 0 ? this.renderhtml() : null}

                <div className="row">
                    <div className="form-group">
                        {this.props.details.current_step > 1 ? (<button className="btn  btn-primary float-left" onClick={() => this.props.onPreviousButtonClick()}>Previous</button>) : null}
                        {this.props.details.current_step < 5 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => this.onSecondFromSubmit(this.state.form_property)} >Next</button>) : null}
                    </div>
                </div>

            </div>
        )
    }
}
export default step2;