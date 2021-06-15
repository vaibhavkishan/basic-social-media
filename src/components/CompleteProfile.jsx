import React from 'react';
import { Modal } from 'react-bootstrap';

function CompleteProfile(props) {
  const { name, email, phone, website } = props.user;
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header style={{ backgroundColor: 'rgb(9, 0, 51)' }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: 'white' }}
        >
          CompleteProfile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="listGroup">
          <li>
            <span className="spanHeading">Name:</span>
            <span>{' ' + name}</span>
          </li>
          <li>
            <span className="spanHeading">Email:</span>
            <span>{' ' + email}</span>
          </li>
          <li>
            <span className="spanHeading">Website:</span>
            <span>{' ' + website}</span>
          </li>
          <li>
            <span className="spanHeading">Phone:</span>
            <span>{' ' + phone}</span>
          </li>
          <li>
            <span className="spanHeading">Address:</span>
            <span>{' ' + props.address}</span>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn"
          onClick={props.onHide}
          style={{ width: '480px', backgroundColor: '#f0ebeb' }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompleteProfile;
