import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AndroidComp from "./androidComp";
import AngularComp from "./angularComp";
import Navbar from "./navbar";
import ReactComp from "./reactComp";

class MainComponent extends Component{

    state = {
        pageNum: 10,
        courseDone: ["BTech", "MTech", "BCA", "MCA", "BSc"],
        currentStatus: ["Studying","Working", "Searching", "Preparing"],
        resumes: [
            {name: "Amit",course: "BTech",year: 2019,status: "Studying",tech: "React"},
            {name: "Praveen",course: "BSc",year: 2020,status: "Studying",tech: "Angular"},
            {name: "Namita",course: "MCA",year: 2021,status: "Studying",tech: "Android"},
            {name: "Anuradha",course: "MTech",year: 2019,status: "Studying",tech: "Android"},
            {name: "Kavita",course: "BCA",year: 2020,status: "Studying",tech: "React"},
            {name: "Manish",course: "BTech",year: 2016,status: "Working",tech: "React"},
            {name: "Gautam",course: "BTech",year: 2017,status: "Working",tech: "Angular"},
            {name: "Radhika",course: "MCA",year: 2016,status: "Working",tech: "React"},
            {name: "Charu",course: "MTech",year: 2018,status: "Searching",tech: "Android"},
            {name: "Divya",course: "BCA",year: 2019,status: "Preparing",tech: "Angular"},
            {name: "Pradeep",course: "BTech",year: 2016,status: "Working",tech: "React"},
            {name: "Siddhartha",course: "MCA",year: 2016,status: "Working",tech: "Angular"},
            {name: "Prachi",course: "MCA",year: 2016,status: "Searching",tech: "Android"},
            {name: "Charu",course: "MTech",year: 2018,status: "Preparing",tech: "React"},
            {name: "Harsh",course: "BSc",year: 2019,status: "Preparing",tech: "Angular"}
        ],
    }

    render(){
        const { courseDone, currentStatus, pageNum, resumes } = this.state;
        return (
            <div className="container-fluid p-0">
                <Navbar />
                <div className="container-fluid" style={{padding: "1% 2%"}}>
                    <Switch>
                        <Route path="/job/React" render={(props) => <ReactComp {...props} courseDone={courseDone} currentStatus={currentStatus} pageNum={pageNum} resumes={resumes}/>} />
                        <Route path="/job/Angular" render={(props) => <AngularComp {...props} courseDone={courseDone} currentStatus={currentStatus}  pageNum={pageNum} resumes={resumes}/>} />
                        <Route path="/job/Android" render={(props) => <AndroidComp {...props} courseDone={courseDone} currentStatus={currentStatus}  pageNum={pageNum} resumes={resumes}/>} />
                        <Redirect from="/" to="/job/React" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainComponent;