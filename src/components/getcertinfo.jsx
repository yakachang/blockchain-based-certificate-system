import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import bg from "../image/bg.jpeg";
import "../certstyle.css";

class Getcertinfo extends Component {
  
  canBeSubmittedid() {
    const id = this.state.id;
    return id.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  get = event => {
    event.preventDefault();
    this.props.get(this.state);
  };


  state = {
    id: "",
    student_address: ""
  };

  render() {
    const isEnabledid = this.canBeSubmittedid();
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

        <div className=" mx-auto w-50 mb-5">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Verify the Certificate Information
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.get}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="Enter Certificate ID"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledid}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verify
            </Button>
          </Form>

        </div>

        <div id="showCertificate" className=" mx-auto w-50 mb-5">
          <table className="styled-table">
            <thead>
                <tr>
                    <th id="title-font">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.student_address}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th id="title-font">Student Name</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.sname}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th id="title-font">Institution Name</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.institution_name}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th id="title-font">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" id="info-font">
                    <td>{this.props.date}</td>
                </tr>
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default Getcertinfo;