import React, { Component } from "react";

class Course extends Component{

    state = {}

    handleChange = (e) => {
        const { currentTarget: input } = e
        let options = {...this.props.options};
        input.type === "checkbox"
            ? options[input.name] = this.updateCBs(options[input.name], input.checked, input.value)
            : options[input.name] = input.value;
        this.props.onOptionChange(options);
    }

    updateCBs = (inpValue, checked, value) => {
        let inpArr = inpValue ? inpValue.split(",") : [];
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex(ele => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr.join(",");
    }  

    makeCheckBoxes = (arr, values, name, label) => {
        return (
            <React.Fragment>
                <label className="form-check-label" style={{fontWeight: "bold"}}>{label}</label>
                {arr.map((opt) => (
                    <div className="form-check" key={opt}>
                        <input type="checkbox" className="form-check-input" name={name} value={opt} checked={values.findIndex(val=> val === opt) >= 0} onChange={this.handleChange} />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        )
    }

    makeRadios = (arr, values, name, label) => {
        return (
            <React.Fragment>
                <label className="form-check-label" style={{fontWeight: "bold"}}>{label}</label>
                {arr.map((opt) => (
                    <div className="form-check" key={opt}>
                        <input type="radio" className="form-check-input" name={name} value={opt} checked={values.findIndex(val=> val === opt) >= 0} onChange={this.handleChange} />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        )
    } 

    render(){
        const { courses = "", status = "" } = this.props.options;
        const { courseDone, currentStatus } = this.props;
        console.log(courseDone);
        console.log(currentStatus);
        return (
            <React.Fragment>
                <div className="row bg-light">
                    <div className="col-12">
                        {this.makeCheckBoxes(courseDone, courses.split(","), "courses", "Courses Done")}
                    </div>
                    <div className="col-12">
                        {this.makeRadios(currentStatus, status.split(","), "status", "Current Status")}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Course;