import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
// import Step_One from "../Components/step_one.js";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import Step5 from "./Step5.js";
import Step6 from "./Step6.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 20,
      current_step: 1,
      //step 1
      email: '',
      email_error: '',
      //step 2
      step_2_form: {}

    }
    this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
    this.onEmailChangeValidation = this.onEmailChangeValidation.bind(this);
    this.onSecondFromSubmit = this.onSecondFromSubmit.bind(this);

  }

  onPreviousButtonClick = () => {
    var current_page_step = this.state.current_step;
    var progress = this.state.progress;
    progress = progress - 20;
    current_page_step--;
    this.setState({
      current_step: current_page_step
    })
    this.setState({
      progress: progress
    })

  }

  onEmailChangeValidation = (email) => {

    this.setState({
      email: email
    })

    if (email != '') {
      this.setState({
        email_error: '',
      });
    }
    else {
      this.setState({
        email_error: 'Please enter email',
        step_1_validation: false
      });
    }


  }

  onSecondFromSubmit = (data) => {

    var current_page_step = this.state.current_step;
    var progress = this.state.progress;
    progress = progress + 20;
    current_page_step++;
    this.setState({
      current_step: current_page_step
    })
    this.setState({
      progress: progress
    })
  }

  onNextButtonClick = () => {

    var current_page_step = this.state.current_step;
    var progress = this.state.progress;

    progress = progress + 20;
    current_page_step++;
    this.setState({
      current_step: current_page_step
    })
    this.setState({
      progress: progress
    })


  }

  onSecondStepNextButtonClick = () => {

  }

  render() {
    const { current_step } = this.state;

    var onEmailChangeValidation = this.onEmailChangeValidation;
    var onSecondFromSubmit = this.onSecondFromSubmit;
    var onNextButtonClick = this.onNextButtonClick;
    var onPreviousButtonClick = this.onPreviousButtonClick;

    return (<>
      <div className="container">
        <br />
        <h3 className="font-weight-bold">Add your financials!</h3>
        <br />
        {/* <label for="email" className=""><strong>Start adding your financials - Step {this.state.current_step} of 5</strong> </label> */}
        <ProgressBar
          percent={this.state.progress}
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
          {/* <Step transition="scale">
            {({ accomplished }) => (<>

            </>
            )}
          </Step> */}
          <Step transition="scale">
            {({ accomplished }) => (<>

            </>

            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (<>

            </>

            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (<>

            </>

            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (<>

            </>

            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (<>

            </>

            )}
          </Step>
        </ProgressBar>
        <br />
        {/* {current_step == 1 ? (<Step1 details={this.state} onEmailChangeValidation={onEmailChangeValidation.bind(this)} onNextButtonClick={onNextButtonClick.bind(this)} onPreviousButtonClick={onPreviousButtonClick.bind(this)} />) : null} */}
        {current_step == 1 ? (<Step2 details={this.state} onNextButtonClick={onNextButtonClick.bind(this)} onPreviousButtonClick={onPreviousButtonClick.bind(this)} />) : null}
        {current_step == 2 ? (<Step3 details={this.state} onNextButtonClick={onNextButtonClick.bind(this)} onPreviousButtonClick={onPreviousButtonClick.bind(this)} />) : null}
        {current_step == 3 ? (<Step4 details={this.state} onNextButtonClick={onNextButtonClick.bind(this)} onPreviousButtonClick={onPreviousButtonClick.bind(this)} />) : null}
        {current_step == 4 ? (<Step5 details={this.state} onNextButtonClick={onNextButtonClick.bind(this)} onPreviousButtonClick={onPreviousButtonClick.bind(this)} />) : null}
        {current_step == 5 ? (<><Step6 details={this.state} onPreviousButtonClick={onPreviousButtonClick.bind(this)} /> <div className="form-group"><button className="btn  btn-previous  btn-primary float-left"> Submit </button></div></>) : null}
        <br />


      </div >
    </>);
  }

}

export default App;
