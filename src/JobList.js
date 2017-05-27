import React from 'react';
import axios from 'axios'

class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
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
            <a href="#"><div>{job.job} {job.company} {job.link}</div></a>
             </li>)
        })
        return (
            <div className="job-list">
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