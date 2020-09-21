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
                count: 1,
            }],
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
            })
            this.setState({
                count: this.state.count + 1,
                form_property: this.state.form_property
            });
        }

    }
    fileDrop = (e) => {
        console.log(e);
    }


    renderSelectedForm(param, el) {

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
                            <input type="text" className="form-control" name="property_residentialAddress1" value={el.property_residentialAddress1}></input><br />
                        </div>
                        <div className="form-group">
                            <label><strong>Address Line 1 </strong></label>
                            <input type="text" className="form-control" name="property_address1" value={el.property_address1}></input><br />
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label><strong>Address Line 2 </strong></label>
                                <input type="text" className="form-control" name="property_address2" value={el.property_address2}></input>
                            </div>
                            <div className="col-md-6">
                                <label><strong>State / Province / Region</strong></label>
                                <input type="text" className="form-control" name="property_address3" value={el.property_address3}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label><strong>City </strong></label><br />
                            <input type="text" className="form-control" name="property_city" value={el.property_city}></input><br />
                        </div>
                        <label><strong>Postal Code</strong></label><br />

                        {el.selectedValue != "" ?
                            <div>
                                <label className="text-secondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span></strong></label><br />
                                <input type="text" className="form-control" name="property_asset" value={el.property_asset} /><br />
                            </div>
                            :
                            <div>
                                <label className="text-secondary"><strong>Value of Asset {el.count}<span className="text-danger">*</span></strong></label><br />
                                <input type="text" className="form-control" name="property_asset" value={el.property_asset} /><br />
                            </div>
                        }
                        <div className="form-group">
                            <label className="text-secondary"><strong>Loan on asset (if any)</strong> </label><br />
                            <input type="text" className="form-control" name="property_assetLoan" value={el.property_assetLoan}></input><br />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary"><strong>Attach asset bank statement or supporting document</strong></label><br />
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
                                            <p>Drag'n'drop images, or click to select files</p>
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
                        <input type="text" className="form-control" placeholder="$" name="depositFunds_assetValue" value={el.depositFunds_assetValue}></input><br />
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset {el.count} held with (financial institution name)</strong></label><br />
                        <input type="text" className="form-control" name="depositFunds_financialassetValue" value={el.depositFunds_financialassetValue}></input><br />
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
                                        <p>Drag'n'drop images, or click to select files</p>
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
                        <input type="text" className="form-control" name="vehicle_assetDescriptionValue" value={el.vehicle_assetDescriptionValue}></input><br />
                    </div>
                    <div className="form-group">
                        <label className="text-scondary"><strong>Value of Asset {el.count} <span className="text-danger">*</span></strong> </label><br />
                        <input type="text" className="form-control" name="vehicle_assetValue" value={el.vehicle_assetValue}></input><br />
                    </div>
                    <div className="form-group">
                        <label className="text-scondary"><strong>Loan on asset (if any)</strong> </label><br />
                        <input type="text" className="form-control" name="vehicle_assetLoan" value={el.vehicle_assetLoan}></input><br />
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
                                        <p>Drag'n'drop images, or click to select files</p>
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
                        <input required type="text" placeholder="$" className="form-control" name="homeContents_assetValue" value={el.homeContents_assetValue}></input>
                    </div>
                </div>
            case 'form_shares':
                return <div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} </strong> <span className="text-danger">*</span> </label>
                        <input required type="text" placeholder="$" className="form-control" name="shares_assetValue" value={el.shares_assetValue}></input>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary">Asset {el.count} held with (financial institution name)   </label>
                        <input type="text" className="form-control" name="shares_assetFinancialValue" value={el.shares_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_superannuation':
                return <div>
                    <br />
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count} </strong> <span className="text-danger">*</span>  </label>
                        <input required type="text" className="form-control" name="superannuation_assetValue" value={el.superannuation_assetValue}></input>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset  held with (financial institution name) </strong>  </label>
                        <input type="text" className="form-control" name="superannuation_assetFinancialValue" value={el.superannuation_assetFinancialValue}></input>
                    </div>
                </div>
            case 'form_other':
                return <div>
                    <br />
                    <div className="form-group">
                        <label className="text-secondary"><strong>Asset  description  (i.e. make, model, year) <span className="text-danger">*</span></strong> </label>
                        <input required type="text" className="form-control" name="other_assetDescriptionValue" value={el.other_assetDescriptionValue}></input>
                    </div>
                    <div className="form-group">
                        <label className="text-secondary"><strong>Value of Asset {el.count}  <span className="text-danger">*</span></strong>    </label>
                        <input required type="text" className="form-control" name="other_assetValue" value={el.other_assetValue}></input>
                    </div>
                </div>
            default:
                return null;
        }
    }

    renderhtml() {
        // console.log(this.state.form_property)
        var list = []
        this.state.form_property.map((el, index) => {
            list.push(
                <div key={index.toString()}>
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
                                {this.renderSelectedForm(el.selectedValue, el)}
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
                        {this.props.details.current_step < 6 ? (<button className="btn  btn-primary float-right ml-2" onClick={() => this.props.onSecondFromSubmit(this.state.form_property)} >Next</button>) : null}
                    </div>
                </div>

            </div>
        )
    }
}
export default step2;