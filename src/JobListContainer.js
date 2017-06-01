import React from 'react';
import axios from 'axios';
import JobList from './JobList'
import { Link } from 'react-router-dom';

class JobListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jobs: [], currentJob: "", showLogActivity: false};
        this.updateJob = this.updateJob.bind(this);
    }

    updateJob(job) {
        this.setState({currentJob: job})
    }

    componentDidMount() {
        axios.get('http://localhost:3000/jobs').then(res => {
            this.setState({jobs: res.data})
      })
    }

    render() {
        return (
            <div className="job-list">
               <JobList updateJob={this.updateJob} currentJob={this.state.currentJob} jobs={this.state.jobs} />
            </div>
        )
    }
}

export default JobListContainer;