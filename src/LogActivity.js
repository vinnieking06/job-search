import React from 'react';
import axios from 'axios';

class LogActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""};

        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleContent(event) {
        this.setState({content: event.target.value});
        console.log("state: ", this.state)
    }

    handleSubmit(event) {
        const postData = {jobId: this.props.job.id, content: this.state.content}
        axios.post('http://localhost:3000/activity', postData)
        .then(function(response){
            this.props.toggleLogActivity();
            console.log('saved successfully')
        });
    }
  render() {
      
    return (
        <div className="createJob">
            <h4>Log Activity</h4>
            <div>
                <form onSubmit={this.handleSubmit}>
                    Activity<br/> <textarea value={this.state.value} onChange={this.handleContent}  name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit" >Log</button>
                </form>
            </div>
        </div>
    )
  }
}

export default LogActivity;