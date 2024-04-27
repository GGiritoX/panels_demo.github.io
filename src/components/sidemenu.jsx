import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/sidemenu.css";

export default function SideMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function t_open() {
    handleShow();
    let btn_burger = document.getElementById('burger');
    btn_burger.style.opacity = 0;
  }
  function t_close() {
    handleClose();
    let btn_burger = document.getElementById('burger');
    btn_burger.style.opacity = 1;
  }


  return (
    <>

      <button id="burger" onClick={t_open}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>

      <Offcanvas show={show} onHide={t_close} backdrop={true} scroll={true} placement='end' id='myOffcanvas'>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a className="text-decoration-none" href="/">Projects</a>
          <a className="text-decoration-none" href="/services">Services</a>
          <a className="text-decoration-none" href="/contacts">Contacts</a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
