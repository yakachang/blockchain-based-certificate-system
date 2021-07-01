import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import bg from "../image/bg.jpeg";

class Getcert extends Component {
  
  canBeSubmittedtxh() {
    const txh = this.state.txh;
    return txh.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  gettransaction = event => {
    event.preventDefault();
    const url = "https://ropsten.etherscan.io/tx/" + this.state.txh;
    window.open(url);
    console.log(url);
  };

  state = {
    txh: ""
  };

  render() {
    const isEnabledtxh = this.canBeSubmittedtxh();
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
            Verify the Transaction details
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.gettransaction}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="txh"
                value={this.state.txh}
                onChange={this.handleChange}
                placeholder="Enter Transaction hash provided on Certificate"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledtxh}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verify
            </Button>
          </Form>

          <hr
            className="mt-5 "
            style={{ color: "white", backgroundColor: "white", height: 5 }}
          />

        </div>

      </div>
    );
  }
}

export default Getcert;
