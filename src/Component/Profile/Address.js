import React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
const Address = () => {
  return (
    <div>
      {" "}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ margin: "20px" }}>Address</Form.Label>

          <Form.Control
            className="add"
            type="text"
            value="Avenue de la République 4011 Hammam Sousse - SOUSSE"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Address;
