import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import bg from "../image/bg.jpeg";

class Reg extends Component {
  sendmail = event => {
    event.preventDefault();
    window.location.href = `mailto:${this.state.email}`;
  };

  state = {
    email: ""
  };

  canBeSubmitted() {
    const { institution_address, institution_name } = this.state;
    return (
      institution_name.length > 0 
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addInstitution = event => {
    event.preventDefault();
    this.props.addInstitution(this.state);
  };

  state = {
    institution_address: "",
    institution_name: ""
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
          Create Institution on Blockchain
        </h1>
        <br></br>
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
            Enter the Institution details
          </h2>
          <br></br>
          <Form onSubmit={this.addInstitution}>
            <Form.Group>
              <Form.Control
                type="text"
                name="institution_name"
                value={this.state.institution_name}
                onChange={this.handleChange}
                placeholder="Institution Name"
              />
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Add Institution
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Reg;
