import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';
import LogActivity from './LogActivity';
import {Link} from 'react-router-dom'

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogActivity: false, currentJob: ""};
        this.toggleLogActivity = this.toggleLogActivity.bind(this);
    }

    toggleLogActivity(job) {
        this.setState({currentJob: job });
        console.log(this.state, "job", job)
    }
   
   componentDidMount() {
       console.log("in job: ", this.props)
      // this.props.state.updateJob(this.props.location.state.job)
   }
    render(){
        const job = this.state.currentJob;
        if (this.state.showLogActivity) {
            return (  
                <div className="job">
                <Link to='/createjob'>
                    <button>Create New Job</button>
                </Link> <h1>Job View</h1>
                    <Info toggleLogActivity={this.toggleLogActivity}  job={job} />
                    <Activity />
                    <FollowUp />
                    <LogActivity toggleLogActivity={() => {this.toggleLogActivity(job)}} jobId={job} />
                </div>
                    )
        }
        else {
            return (  
                <div className="job">
                <Link to='/createjob'>
                    <button>Create New Job</button>
                </Link> <h1>Job View</h1>
                    <Info toggleLogActivity={() => {this.toggleLogActivity(job)}} job={job} />
                    <Activity />
                    <FollowUp />
                </div>
        )
        }
        
    
    }

}
export default Job