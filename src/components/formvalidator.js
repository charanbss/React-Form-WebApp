import React from "react";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  age: "",
  gender: "Select",
  dob: "",
  nameError: "",
  emailError: "",
  ageError: "",
  genderError: "",
  dobError: ""
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let ageError = "";
    let genderError = "";
    let dobError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank!";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email!";
    }

    if (this.state.gender === "Select") {
      genderError = "Select a gender!";
    }

    if (!this.state.age) {
        ageError = "Enter your age in years!";
      }

    if (!this.state.dob) {
        dobError = "Select a date!";
      }

    if (emailError || nameError || genderError || dobError || ageError) {
      this.setState({ emailError, nameError, genderError, dobError, ageError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name: &nbsp; 
          <input
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>

        <div>
          Email ID: &nbsp;
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>

        <div>
          Mobile Number: &nbsp;
          <input
            type = "number"
            min = "6000000000"
            max = "9999999999"
            name = "mobile"
            placeholder="no country code"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
        </div>

        <div>
          Age: &nbsp;
          <input
            type = "number"
            min = "0"
            max = "99"
            name = "age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.ageError}
          </div>
        </div>

        <div>
          Gender: &nbsp;
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            <option>Prefer not to say</option>
          </select>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.genderError}
          </div>
        </div>

        <div>
          Date of Birth: &nbsp;
          <input
            type = "date"
            name="dob"
            value={this.state.dob}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dobError}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}