import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./CreatePage.css";

const CreatePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                {/* <Form className="createPage_container">
                    <Form.Group className="mb-3">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Event Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Host Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Host Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Location" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Event Photo</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button
                        className="createButton"
                        variant="primary"
                        type="submit"
                        onClick={() => {
                            navigate("/event");
                        }}
                    >
                        Submit
                    </Button>
                </Form> */}
                <form className="createPage_container">
                    <label>Host Name</label>
                    <input type="text" placeholder="Enter you host name"></input>
                    <label>Event Name</label>
                    <input type="text" placeholder="Enter you Event name"></input>
                    <label>Location</label>
                    <input type="text" placeholder="Enter you Location"></input>
                    <label>Start Date</label>
                    <input type="date" />
                    <label>End Date</label>
                    <input type="date" />
                    <label>Event Photo</label>
                    <input type="file" />
                    <button
                        className="createButton"
                        type="submit"
                        onClick={() => {
                            navigate("/event");
                        }}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;
