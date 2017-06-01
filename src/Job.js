import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';
import {Link} from 'react-router-dom';


class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogActivity: false, currentJob: "", jobs: [], jobId: ""};
        this.toggleLogActivity = this.toggleLogActivity.bind(this);
    }

    toggleLogActivity(job) {
        this.setState({showLogActivity: !this.state.showLogActivity});
    }

    render(){
        const job = this.props.currentJob;
            return (  
                <div className="job">
                <Link to='/createjob'>
                    <button>Create New Job</button>
                </Link> <h1>Job View</h1>
                    <Info toggleLogActivity={this.toggleLogActivity} job={job} />
                    <Activity job={job} />
                    <FollowUp followups={job.followups} />
                </div>
            )
        
        
    
    }

}
export default Job