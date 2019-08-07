import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Container, Row, FormGroup, Label, Spinner, Alert } from "reactstrap";
//if no value its valid
const requiredValidator = val => val && val.length;
const emailValidator = val => !val || 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  );
const passwordValidator = val => !val || /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(val)


class AccountProfile extends Component {
  constructor(params) {
    super(params);

    this.state = {
      isLoading: false,
      errMess: null
    };
  }

  handleSubmit = async values => {
    console.log("SUBMIT", values);
    this.setState({
      isLoading: true
    });

    try {
      var response = await fetch(
        "https://strive-school-testing-apis.herokuapp.com/api/accountprofile",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            Authorization: "Basic dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==",
            "Content-Type": "application/json"
          }
        }
      );
      if (response.ok) {
        this.setState({
          errMess: null,
          isLoading: false
        });
      } else {
        var error = await response.json();
        this.setState({
          errMess: error.message,
          isLoading: false
        });
      }
    } catch (error) {
      this.setState({
        errMess: error.message,
        isLoading: false
      });
    }
  };
  render() {
    return (
      <Container id="formCont">

        <LocalForm  onSubmit={values => this.handleSubmit(values)}>
          <Row  className="justify-content-center" >
           <h3 className="formTitle"> Create your account!</h3>
          </Row>

          <Row className=" justify-content-between">
            <FormGroup className="col-md-6">
              <Label for="name">Name</Label>
              <Control.text
                id="name"
                model=".name"
                className="form-control"
                placeholder="Name"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".name"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*name is required",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>

            <FormGroup className="col-md-6">
              <Label for="surname">Surname</Label>
              <Control.text
                id="surname"
                model=".surname"
                className="form-control"
                placeholder="Surname"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".surname"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*last name is required",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>
          </Row>

          <Row  className=" justify-content-between">
            <FormGroup className="col-md-6">
              <Label for="email">Email</Label>
              <Control.text
                id="email"
                model=".email"
                className="form-control"
                placeholder="Your email"
                validators={{
                  requiredValidator,
                  emailValidator,
                }}
              />
              <Errors
                model=".email"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*email is required",
                  emailValidator: "*Please enter a valid email",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>

            <FormGroup className="col-md-6">
              <Label for="password">Password</Label>
              <Control.text
                id="password"
                model=".password"
                className="form-control"
                placeholder="Password"
                validators={{
                  requiredValidator,
                  passwordValidator
                }}
              />
              <Errors
                model=".password"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*password is required",
                  passwordValidator: "*password must include an uppercase and lowercase letter, a special character, a digit, and must be 8 characters long"                   
                }}
              />
            </FormGroup>
          </Row>

          <Row  className=" justify-content-between">
            <FormGroup className="col-md-5">
              <Label for="date">Date of Birth</Label>
              <Control.text
                type="date"
                id="date"
                className="form-control"
                placeholder="Date of Birth"
                model=".date"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".date"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*date of birth",
                
                }}
              />
            </FormGroup>
          </Row>

          {/* <div class="h-divider"> </div> */}

          <Row  className=" justify-content-between">
            <FormGroup className="col-md-5">
              <Label for="address">Address</Label>
              <Control.text
                id="address"
                model=".address"
                className="form-control"
                placeholder="Address"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".address"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*address is required",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>

            <FormGroup className="col-md-4">
              <Label for="city">City</Label>
              <Control.text
                id="city"
                model=".city"
                className="form-control"
                placeholder="City"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".city"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*city is required",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>

            <FormGroup className="col-md-3">
              <Label for="postcode">Post Code</Label>
              <Control.text
                id="postcode"
                model=".postcode"
                className="form-control"
                placeholder="Post Code"
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".postcode"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*post code is required",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>
          </Row>

          <Row className=" justify-content-between">
              <FormGroup className="col-md-5">
                <Label for="subscriptionPlan">Subscription Plan</Label>
                <Control.select
                  type="select"
                  className="form-control"
                  id="subscriptionPlan"
                  model=".subscriptionPlan"
                  validators={{
                    requiredValidator
                  }}
                >
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </Control.select>
                <Errors
                model=".subscriptionPlan"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "*select plan",
                  // minLengthValidator:
                  //   "The name field should have at least 2 chars",
                  // maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
              </FormGroup>

              <FormGroup
                className="col-md-6"
                check
                style={{ display: "flex", alignSelf: "center" }}
              >
                <Label check>
                  <Control.checkbox id="specialOffers" model=".specialOffers" />{" "}
                  Please do not email me special offers
                </Label>
              </FormGroup>
            </Row>
       

          <Control.button model="accountProfile" disabled={{ valid: false }}>
            Submit!
          </Control.button>
        </LocalForm>
        {this.state.isLoading && (
          <div className="container d-flex justify-content-center my-5">
            Processing your details, please wait
            <div>
              <Spinner color="danger" />
            </div>
          </div>
        )}
          {this.state.errMess && this.state.errMess.length > 0 && (
          <Alert color="danger">
            We encountered a problem while processing your request:{" "}
            {this.state.errMess}
          </Alert>
          )}

      </Container>
    );
  }
}

export default AccountProfile;
