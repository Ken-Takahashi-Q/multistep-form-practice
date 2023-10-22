import './multiStepForm.scss'

function MultiStepForm() {
  return (
    <div className="homepage">
      <div className="form-container">
        <div className="form-navbar">
          <div className="form-navbar-step">
            <div className="step-number">1</div>
            <div className="step-name">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </div>

          <div className="form-navbar-step">
            <div className="step-number">2</div>
            <div className="step-name">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>

          <div className="form-navbar-step">
            <div className="step-number">3</div>
            <div className="step-name">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </div>

          <div className="form-navbar-step">
            <div className="step-number">4</div>
            <div className="step-name">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </div>

        <div className="form-user-input">
          <div className="form-header">
            <h1>
              Personal Info
            </h1>
            <p>
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <div className="form-content">
            <input />
            <input />
            <input />
          </div>

          <div className="form-footer">
            <p className="go-back">Go Back</p>
            <button className="go-next">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm
