import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jobs: [], currentJob: ""};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/jobs').then(res => {
            this.setState({jobs: res.data})
      })
    }

    render() {
        const jobList = [];
        this.state.jobs.forEach((job, index) => {
            jobList.push(<li key={index}> 
                <Link to={{ pathname: `/job/${job.id}`, state: { job: job } }}>
                    <div>{job.job} {job.company} {job.link}</div>
                </Link>
             </li>)
        })
        return (
            <div className="job-list">
                <Link to='/createjob'>
                <button>Create New Job</button>
               </Link> <h1>Job View</h1>
                <h2>Job List</h2>
                <h3>Create New Job</h3>
                <ul>
                    {jobList}
                </ul>
            </div>
        )
    }
}

export default JobList