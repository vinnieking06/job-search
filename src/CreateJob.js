import React from 'react';

class CreateJob extends React.Component {
  render() {
    return (
        <div className="createJob">
            <h2>Create Job</h2>
            <p>Enter the basic information to create the opportunity</p>
            <div>
                Company name: <input type="text"/>
                Job Title: <input type="text"/> <br/>
                Link: <input type="text"/> <br/>
                Notes:<br/> <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
  }
}

export default CreateJob