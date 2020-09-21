import React, { Component, useState, Fragment } from 'react';
import Dropzone from "react-dropzone";
import "../style.css";

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
                        <label>Is Asset  (Property) your home or an Investment</label>
                        <ul>
                            <button>Live in</button>
                            <button>Investment</button>
                        </ul>
                    </div>
                    <div>
                        <label>Residential asset  address </label><br />
                        <input type="text" name="property_residentialAddress1" value={el.property_residentialAddress1}></input><br />

                        <label>Address Line 1 </label><br />
                        <input type="text" name="property_address1" value={el.property_address1}></input><br />

                        <label>Address Line 2 </label><br />
                        <input type="text" name="property_address2" value={el.property_address2}></input>
                        <input type="text" name="property_address3" value={el.property_address3}></input><br />

                        <label>City </label><br />
                        <input type="text" name="property_city" value={el.property_city}></input><br />

                        <label>Postal Code </label><br />

                        {el.selectedValue != "" ?
                            <div>
                                <label>Value of Asset {el.count} * </label><br />
                                <input type="text" name="property_asset" value={el.property_asset} /><br />
                            </div>
                            :
                            <div>
                                <label>Value of Asset {el.count} * </label><br />
                                <input type="text" name="property_asset" value={el.property_asset} /><br />
                            </div>
                        }

                        <label>Loan on asset (if any) </label><br />
                        <input type="text" name="property_assetLoan" value={el.property_assetLoan}></input><br />

                        <label>Attach asset bank statement or supporting document</label><br />
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
            //)
            case 'form_depositFunds':
                return <div>
                    <label>Value of Asset   </label><br />
                    <input type="text" name="depositFunds_assetValue" value={el.depositFunds_assetValue}></input><br />

                    <label>Asset  held with (financial institution name)</label><br />
                    <input type="text" name="depositFunds_financialassetValue" value={el.depositFunds_financialassetValue}></input><br />

                    <label>Attach asset  bank statement or supporting document</label><br />
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
                </div>;
            case 'form_vehicle':
                return <div>
                    <label>Asset  description  (i.e. make, model, year) </label><br />
                    <input type="text" name="vehicle_assetDescriptionValue" value={el.vehicle_assetDescriptionValue}></input><br />

                    <label>Value of Asset   </label><br />
                    <input type="text" name="vehicle_assetValue" value={el.vehicle_assetValue}></input><br />

                    <label>Loan on asset (if any) </label><br />
                    <input type="text" name="vehicle_assetLoan" value={el.vehicle_assetLoan}></input><br />

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
                </div>;

            case 'form_homeContents':
                return <div>
                    <label>Value of Asset   </label><br />
                    <input type="text" name="homeContents_assetValue" value={el.homeContents_assetValue}></input><br />
                </div>
            case 'form_shares':
                return <div>
                    <label>Value of Asset   </label><br />
                    <input type="text" name="shares_assetValue" value={el.shares_assetValue}></input><br />

                    <label>Asset  held with (financial institution name)   </label><br />
                    <input type="text" name="shares_assetFinancialValue" value={el.shares_assetFinancialValue}></input><br />
                </div>
            case 'form_superannuation':
                return <div>
                    <label>Value of Asset   </label><br />
                    <input type="text" name="superannuation_assetValue" value={el.superannuation_assetValue}></input><br />

                    <label>Asset  held with (financial institution name)   </label><br />
                    <input type="text" name="superannuation_assetFinancialValue" value={el.superannuation_assetFinancialValue}></input><br />
                </div>
            case 'form_other':
                return <div>
                    <label>Asset  description  (i.e. make, model, year) </label><br />
                    <input type="text" name="other_assetDescriptionValue" value={el.other_assetDescriptionValue}></input><br />

                    <label>Value of Asset   </label><br />
                    <input type="text" name="other_assetValue" value={el.other_assetValue}></input><br />
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
                    <select value={el.selectedValue} onChange={(value) => this.handleChange(value, index)}>
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
                                <a onClick={e => this.addAnother(el, index)}>Add another 123</a>
                            </div>
                            :
                            index > 0 ?
                                <div>
                                    <div>
                                        <label>Value of Asset {el.count} * </label><br />
                                        <input type="text" value={el.asset} /><br />
                                    </div>
                                    <a onClick={e => this.addAnother(el, index)}>Add another 456</a>
                                </div>
                                : null}
                    </div>
                </div >
            )
        })
        return list
    }

    render() {
        return (<div>
            <form>
                {this.state.form_property.length > 0 ? this.renderhtml() : null}
            </form>
        </div>)
    }
}
export default step2;