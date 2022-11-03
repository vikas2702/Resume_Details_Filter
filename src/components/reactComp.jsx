import React, { Component } from "react";
import Course from "./course";
import queryString from "query-string";

class ReactComp extends Component{

    state = {
        pageNum : this.props.pageNum,
        currentIndex: 0,
    }

    handlePrevious = () => {
        let s1 = {...this.state};
        s1.currentIndex <= 0 ? s1.currentIndex=0 : s1.currentIndex--;
        this.setState(s1); 
    }

    handleNext = () => {
        let s1 = {...this.state};
        s1.pageNum > s1.currentIndex ? s1.currentIndex++ : "";
        this.setState(s1); 
    }

    filterParamCourse = (arr, queryParams) => {
        let { courses } = queryParams;
        arr = courses ? this.filterParam(arr, courses) : "" ;
        return arr;
    }

    filterParamStatus = (arr, queryParams) => {
        let { status } = queryParams;
        arr = status ? this.filterParam(arr, status) : "" ;
        return arr;
    }

    filterParam = (arr, values) => {
        let valuesArr = values.split(",");
        return valuesArr;
    }

    makeSearchString = (options) => {
        let { courses, status } = options;
        let searchStr = "";
        searchStr = this.addToQueryString(searchStr, "courses", courses);
        searchStr = this.addToQueryString(searchStr, "status", status);
        return searchStr;
    }

    addToQueryString = (str, paramName, paramValue) => {
        return paramValue ? str ? `${str}&${paramName}=${paramValue}` :  `${paramName}=${paramValue}` : str;
    }

    handleOptionChange = (options) => {
        this.callURL("/job/React", options);
    }

    callURL = (url, options) => {
        let searchStr = this.makeSearchString(options);
        this.props.history.push({
            pathname: url,
            search: searchStr,
        })
    }

    render(){
        const { currentIndex } = this.state;
        const { courseDone, currentStatus, resumes } = this.props;

        const queryParams = queryString.parse(this.props.location.search);

        let courseDone1 = this.filterParamCourse(courseDone, queryParams);
        let currentStatus1 = this.filterParamStatus(currentStatus, queryParams);

        let resumes1 = resumes.filter((r) => r.tech === "React");
        let resumes2 = courseDone1.length === 0 ? resumes1 : resumes1.filter((r) => courseDone1.find(c=> c === r.course));
        let resumes3 = currentStatus1.length === 0 ? resumes2 : resumes2.filter((r) => currentStatus1.find(c=> c === r.status));

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <Course courseDone={courseDone} currentStatus={currentStatus} options={queryParams} onOptionChange={this.handleOptionChange}/>
                    </div>
                    <div className="col-9">
                        <h6>Job Details</h6>
                        <h6>Role: React</h6>
                        <h6>Course Done: {courseDone1.length === 0 ? "" : courseDone1.map((c)=>c).join(",")}</h6>
                        <h6>Current Status: {currentStatus1.length === 0 ? "" : currentStatus1.map((c)=>c)}</h6>
                        <h6>Page Number: {currentIndex+1}</h6>
                        {resumes3.map((r) => (
                            <div className="row border">
                                <div className="col-2">{r.name}</div>
                                <div className="col-2">{r.course}</div>
                                <div className="col-2">{r.year}</div>
                                <div className="col-3">{r.status}</div>
                                <div className="col-3">{r.tech}</div>
                            </div>
                        ))}
                        <div>
                            {currentIndex+1 === 1 ? (
                                <button className="btn btn-primary btn-sm" onClick={() => this.handleNext()} style={{float: "right"}}>Next</button>
                            ) : currentIndex+1 > 1 && currentIndex+1 <= 9 ? (
                                <React.Fragment>
                                    <button className="btn btn-primary btn-sm" onClick={() => this.handleNext()} style={{float: "right"}}>Next</button>
                                    <button className="btn btn-primary btn-sm" onClick={() => this.handlePrevious()} style={{float: "left"}}>Previous</button>
                                </React.Fragment>
                            ) : currentIndex+1 === 10 ? (
                                <button className="btn btn-primary btn-sm" onClick={() => this.handlePrevious()} style={{float: "left"}}>Previous</button>
                            ) : ""}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReactComp;