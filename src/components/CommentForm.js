import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Row,
  Input,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group px-3">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </Row>
              <Row className="form-group px-3">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors 
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                  /> 
              </Row>
              <Row className="form-group px-3">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                  rows="6"
                />
              </Row>
              <Button
                type="submit"
                value="submit"
                color="primary"
                className="mt-3"
              >
                Login
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CommentForm;
