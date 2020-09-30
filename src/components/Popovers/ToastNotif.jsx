import React from "react";
import { Toast } from "react-bootstrap";

export default function ToastNotif({show, content}) {
  return (
    <Toast
      style={{
        position: "absolute",
        top: "15px",
        right: "15px",
        width: "200px",
      }}
      show={show}
    >
      <Toast.Body>{content}</Toast.Body>
    </Toast>
  );
}
