import React from 'react';
import LogActivity from './LogActivity'

class Info extends React.Component{
        constructor(props) {
            super(props);
            this.state = {showLogActivity: false};
            this.toggleLogActivity = this.toggleLogActivity.bind(this);
    }

        toggleLogActivity(job) {
            this.setState({showLogActivity: !this.state.showLogActivity});
        }

        render(){
            if (this.state.showLogActivity) {
                return (
                    <div>
                        <h4>Company: {this.props.job.company} </h4>
                        <h4>Job Title: {this.props.job.job}</h4>
                        <p>Link to posting: {this.props.job.link}</p>
                        <p>Notes: {this.props.job.notes}</p>
                        <button onClick={this.toggleLogActivity}>Log Activity</button>
                        <button>Set Follow Up</button>
                        <LogActivity toggleLogActivity={this.toggleLogActivity} jobId={this.props.job} />
                    </div>
                );
        }
            else {
                return (
                    <div>
                        <h4>Company: {this.props.job.company} </h4>
                        <h4>Job Title: {this.props.job.job}</h4>
                        <p>Link to posting: {this.props.job.link}</p>
                        <p>Notes: {this.props.job.notes}</p>
                        <button onClick={this.toggleLogActivity}>Log Activity</button>
                        <button>Set Follow Up</button>
                    </div>
                );
        }

        }
}

export default Info