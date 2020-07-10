import React from 'react';

function Form(props) {

  return (
    <div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Enter City and Country</span>
        </div>
        <input type="text" aria-label="First name" className="form-control"
          name="city" onChange={props.handleInput} 
          placeholder="City" />
        <input type="text" aria-label="Last name" className="form-control"
          name="country" onChange={props.handleInput} 
          placeholder="Country" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"
               onClick={props.handleSubmit}>Check Weather</button>
            </div>
      </div>
      
        
    </div>
  );
}

export default Form;


