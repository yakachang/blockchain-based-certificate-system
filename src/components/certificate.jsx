import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../certstyle.css";
import printJs from "print-js";
import bg from "../image/bg.jpeg";

class Certificate extends Component {
  state = {};
  onclickprint = event => {
    event.preventDefault();
    window.print();
  };

  render() {
    return (
      <div
      style={{
        height: "100vh",
        background: `url(${bg})`,
        backgroundSize: "cover"
      }}
        className="container-fluid "
      >
        <br></br>

        <div id="showCertificate" className="mx-auto w-50 mb-5">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Details of Certificate
          </h1>
          <table className="styled-table">
            <thead>
                <tr>
                    <th id="title-font">Certificate Number</th>
                    <th id="title-font">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.certificate_count}</td>
                    <td>{this.props.student_address}</td>
                </tr>
            </tbody>
    
            <thead>
                <tr>
                    <th id="title-font">Student ID</th>
                    <th id="title-font">Student Name</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.studentID}</td>
                    <td>{this.props.sname}</td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th id="title-font">Institution Name</th>
                    <th id="title-font">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.institution_name}</td>
                    <td>{this.props.date}</td>
                </tr>
            </tbody>
            
            <thead>
                <tr>
                    <th colSpan={2} id="title-font">Transaction Hash</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td colSpan={2}>{this.props.txh}</td>
                </tr>
            </tbody>
          </table>
        </div>

        <Button
          className="btn"
          onClick={this.onclickprint}
          variant="success"
          type="submit"
        >
          Print
        </Button>
      </div>
    );
  }
}

export default Certificate;
