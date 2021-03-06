import React from 'react';
import axios from 'axios';

class CreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company: '', job: '', link: '', notes: ''};
        this.handleCompany = this.handleCompany.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCompany(event) {
        this.setState({company: event.target.value});
    }
    handleJob(event) {
        this.setState({job: event.target.value});
    }
    handleLink(event) {
        this.setState({link: event.target.value});
    }
    handleNotes(event) {
        this.setState({notes: event.target.value});
    }

    handleSubmit() {
        const postData = this.state;
        axios.post('http://localhost:3000/jobs', postData)
        .then(() => {
            this.props.history.push('/')
        })
    }
  render() {
      
    return (
        <div className="createJob">
            <h2>Create Job</h2>
            <p>Enter the basic information to create the opportunity</p>
            <div>
                    Company name:<input type="text" value={this.state.value} onChange={this.handleCompany} />
                    Job Title: <input type="text" value={this.state.value} onChange={this.handleJob} /> <br/>
                    Link: <input type="text" value={this.state.value} onChange={this.handleLink} /> <br/>
                    Notes:<br/> <textarea value={this.state.value} onChange={this.handleNotes}  name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={this.handleSubmit} type="submit" >create</button>
            </div>
        </div>
    )
  }
}

export default CreateJob