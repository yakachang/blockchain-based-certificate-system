import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import certcontract from "./config.js";
import Navhead from "./components/navbar";
import Reg from "./components/reg";
import Forms from "./components/form";
import Certificate from "./components/certificate";
import Getcert from "./components/getcert";
import Getcertinfo from "./components/getcertinfo";

class App extends Component {

  state = {
    account: "",
    student_address: "",
    studentID: "",
    name: "",
    institution_address: "",
    institution_name: "",
    txh_institutionAdd: "",
    txh: "",
    certificate_num: "",
    certificate_count: "",
    info_num: 0,
    info_address: "",
    info_studentName: "",
    info_institutionName: "",
    info_date: ""
  };

  componentDidMount() {
    console.log('mounted')
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });

    const certificate_count = await certcontract.methods.certificate_count().call();
    console.log(certificate_count);

  }

  async getCertificateNumber() {
    try {
      var count = await certcontract.methods.certificate_count().call();
      count++;
      this.setState({ certificate_count: count }, () => {
        console.log("certificate_count: ", this.state.certificate_count);
      });
    } catch(error){
      console.log("Error: ", error);
    }
  }

  async getCertificateNum() {
    try{
      const num = await certcontract.methods.getCertificateNum().call();
      this.setState( {certificate_num : num} );
      console.log("certificate number: ", num);
    } catch (error){
      console.log("Error: ", error)
    }
  }

  Institution_add = data => {
    this.setState({ institution_address: this.state.account });
    certcontract.methods.add_institution(this.state.account, data.institution_name).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ txh_institutionAdd: result });
          console.log(result);
        }
      }
    );
  };

  Certificate_add = data => {
    //var name = data.first_name + " " + data.last_name;
    certcontract.methods.add_certificate(data.student_address, data.studentID, data.first_name, data.last_name, data.institution_name, data.date).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ student_address: data.student_address});
          this.setState({ studentID: data.studentID });
          this.setState({ name: data.first_name + " " + data.last_name });
          this.setState({ institution_name: data.institution_name });
          this.setState({ date: data.date });
          this.setState({ txh: result });
          console.log(result);
        }
      }
    );
    this.getCertificateNum();
    this.getCertificateNumber();
  };

  getInfo = data => {
    try {
      this.setState({ info_num: data.id }, () => {
        console.log("Info Number: ", this.state.info_num);
      });
    } catch(error) {
      console.log("Error: ", error);
    }

    this.getStudentAddress();
  };

  async getStudentAddress() {
    try{
      const data_address = await certcontract.methods.getStudentAddress(this.state.info_num).call();
      await this.setState({ info_address : data_address}, () => {
        console.log("data_address: ", data_address);
        console.log("Info address: ", this.state.info_address);
      });
      const data_firstName = await certcontract.methods.getStudentFirstName(this.state.info_num).call();
      const data_lastName = await certcontract.methods.getStudentLastName(this.state.info_num).call();
      await this.setState({ info_studentName : data_firstName + " " + data_lastName }, () => {
        console.log("data_studentName: ", data_firstName + " " + data_lastName);
        console.log("Info studentName: ", this.state.info_studentName);
      });
      const data_institutionName = await certcontract.methods.getInstitutionName(this.state.info_num).call();
      await this.setState({ info_institutionName : data_institutionName}, () => {
        console.log("data_institutionName: ", data_institutionName);
        console.log("Info institutionName: ", this.state.info_institutionName);
      });
      const data_date = await certcontract.methods.getDate(this.state.info_num).call();
      await this.setState({ info_date : data_date }, () => {
        console.log("data_date: ", data_date);
        console.log("Info date: ", this.state.info_date);
      });
    } catch (error){
      console.log("Error: ", error)
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navhead />
          <Route path="/reg"
                 exact
                 render={() => <Reg addInstitution={this.Institution_add} />} 
          />
          <Route
            path="/"
            exact
            render={() => 
              <Forms
                addcertificate={this.Certificate_add}
              />}
          />
          <Route
            path="/view"
            component={() => (
              <Certificate
                student_address={this.state.student_address}
                studentID={this.state.studentID}
                sname={this.state.name}
                institution_name={this.state.institution_name}
                date={this.state.date}
                certificate_count={this.state.certificate_count}
                certificate_num={this.state.certificate_num}
                txh={this.state.txh}
              />
            )}
          />
          <Route
            path="/verify"
            render={() => (
              <Getcert/>
            )}
          />
          <Route
            path="/info"
            render={() => (
              <Getcertinfo
                get={this.getInfo}
                info_num={this.state.info_num}
                student_address={this.state.info_address}
                sname={this.state.info_studentName}
                institution_name={this.state.info_institutionName}
                date={this.state.info_date}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
