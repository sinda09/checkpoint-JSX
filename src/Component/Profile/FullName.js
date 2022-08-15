import React from "react";
import "./Profile.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
const FullName = () => {
  return (
    <div className="name">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ margin: "20px" }}>Full Name</Form.Label>
          <Form.Control className="name" type="text" value="Sinda Brahem" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FullName;
