import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import bg from "../image/bg.jpeg";

class Forms extends Component {

  state = {
    student_address: "",
    studentID: "",
    first_name: "",
    last_name: "",
    institution_name: "",
    date: ""
  };

  canBeSubmitted() {
    const { student_address, studentID, first_name, last_name, institution_name, date } = this.state;
    return (
      student_address.length > 0 &&
      studentID.length > 0 &&
      first_name.length > 0 &&
      last_name.length > 0 &&
      institution_name.length > 0 &&
      date.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
  };

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh",
          background: `url(${bg})`,
          backgroundSize: "cover"
        }}
      >
        <br></br>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "#66ffe7"
          }}
          className="mb-5 pt-3"
        >
          Create certificates on Blockchain
        </h1>
        <div
          style={{ marginBottom: "117px", background: "rgba(255,255,255,0.5)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="student_address"
                value={this.state.student_address}
                onChange={this.handleChange}
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="studentID"
                value={this.state.studentID}
                onChange={this.handleChange}
                placeholder="Student ID"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="institution_name"
                value={this.state.institution_name}
                onChange={this.handleChange}
                placeholder="Institution Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                placeholder="Date"
              />
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
            Add certificate
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
