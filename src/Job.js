import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';
import LogActivity from './LogActivity';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogActivity: false, currentJob: "", jobs: [], jobId: ""};
        this.toggleLogActivity = this.toggleLogActivity.bind(this);
    }

    toggleLogActivity(job) {
        this.setState({showLogActivity: !this.state.showLogActivity});
    }

    getJob(id, jobs) {
        console.log("id", id, jobs)
        let finalJob;
        jobs.forEach((item) => {
            if (item.id == id){
                finalJob = item;
            }
        })
        return finalJob;

    }
   
   componentWillMount() {
    axios.get('http://localhost:3000/jobs').then(res => {
        console.log(res.data)
      const jobId = this.props.match.params.id;
      const newJob = this.getJob(jobId, res.data)
      console.log("state", this.state, newJob);
      this.setState({jobs: res.data, currentJob: newJob})
      })

   }
    render(){

        const job = this.state.currentJob;
        console.log("this is ", job)

        if (this.state.showLogActivity) {
            return (  
                <div className="job">
                <Link to='/createjob'>
                    <button>Create New Job</button>
                </Link> <h1>Job View</h1>
                    <Info toggleLogActivity={this.toggleLogActivity}  job={job} />
                    <Activity />
                    <FollowUp />
                    <LogActivity toggleLogActivity={this.toggleLogActivity} jobId={job} />
                </div>
                    )
        }
        else {
            return (  
                <div className="job">
                <Link to='/createjob'>
                    <button>Create New Job</button>
                </Link> <h1>Job View</h1>
                    <Info toggleLogActivity={this.toggleLogActivity} job={job} />
                    <Activity />
                    <FollowUp />
                </div>
        )
        }
        
    
    }

}
export default Job