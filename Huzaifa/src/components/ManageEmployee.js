import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlus,
} from "react-icons/fa";
import MailIcon from "@material-ui/icons/Mail";
import { BsThreeDotsVertical } from "react-icons/bs";

function ManageEmployee() {
  const [Dotted, setDotted] = useState(false);
  const showDotted = () => setDotted(!Dotted);

  return (
    <>
      <div>
        <div className="header">
          <h1 style={{ fontWeight: "bold" }}>MANAGE EMPLOYEE</h1>
        </div>
        {/* Search and dropdown */}
        <div className="container">
          <InputGroup className="mb-3">
            <div className="Search">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success" className="SearchButton">
                  Search
                </Button>
              </Form>
            </div>
            <div className="Dropdown">
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title="Dropdown"
                className="ManageEmpDropdown"
              >
                <Dropdown.Item href="#">Sort By</Dropdown.Item>
                <Dropdown.Item href="#">Sort By date</Dropdown.Item>
                <Dropdown.Item href="#">Sort By View</Dropdown.Item>
              </DropdownButton>
            </div>
          </InputGroup>
        </div>
        {/* -----end of dropdown----- */}

        <div className="wholecontainer">
          <div className="ManageEmployee-round-1">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  onClick={showDotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            {/* --- icons --- */}
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-1">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-1">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>

          {/* ----456 containers ----*/}

          <div className="ManageEmployee-round-4">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            {/* --- icons --- */}
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-4">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-4">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          {/* ---- 7 8 9 containers --- */}
          <div className="ManageEmployee-round-7">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            {/* --- icons --- */}
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-7">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,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"></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
          <div className="ManageEmployee-round-7">
            <button className="email">
              <MailIcon></MailIcon>
            </button>
            {/* -- dotted -- */}
            <div className="threedots">
              <InputGroup>
                <BsThreeDotsVertical
                  // onClick={showdotted}
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                </BsThreeDotsVertical>
              </InputGroup>
            </div>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUWFRcVFxIWFxUXGBgWFRIWGBUXFhUYHSggGholGxUWITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHR0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKystKys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABAEAABAwIDBQUGAggFBQAAAAABAAIDBBEhMUEFBhJRYQcicYGhEzKRscHRQlIUIyRicpLh8BUzU4KyFkNj0vH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgICAwEAAAAAAAAAAQIRAzESIRNBMlEiI4EE/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAixPnA6rA+oJywQTCVjMzeahE3zXh8gGJIHignGpHVef0ociqCs3jpYsHzxg8uIKPFvfROwFQzzNlG4nxrZ/wBKHIr0KkdVWwVTHi7Htd4EFZlKE4TN5r2Cq5fQbZILFFDZUEdVnZOD0QZUREBERAREQEREBERAREQEREBEUeae2A+KDLJKB9lEkmJ8OS8Er4gKLX7SihHFK9rBzJsou8m2W0lO+Z+TRgOZ0XBts7blq5DJI48wNGjoPqqZZeK+GHk6Bvb2hODvZ0jm2tjKcfJo18VoW09t1U/vyvdfS4A+AVReMHvPx/vUqwgcwDAm3isMs7XTjhjEVoePeaPE/fJfS0kYeOCsmzt5/FYZImjIWvjhkqbX0w0u0pIz3ZHMPMEgen1VvBvlXR2tO4jS4a4eevqqOewPeAsdeRWKNhae7YjVpy/oVaW/StkreqbtUqW4SMY7riL+a3bdffyCqsx36uT8rtfArjMsbbZZ8x81Fe10Zu1xaRiM8DpYq+PJWeXHK/TwRaR2Yb1fpcHBI4e2j7pGpAyK3ddEc9mmSOYjw5KVHKD9lBQFELJFHhqND8VIQEREBERAREQEREBEUepl0Hmg8zz6D4qOiICIqferb8dFTumkOAwA5k5BBz7tt3naxraRti51nP6AZeq46+YHB3F8bBTNqbSkramSd2Bcb4/hboFIp9mxEZucemXxWOdm3RhjdIMFC12TnD1WURyRHmOuS+vpHNd3Gub1NiPOyuaZweOF/dcMLHI+apclpGGikD/dNjqw6H6hSY3i5YQQRpz8F4ds1oNxh9OuCyxts4e0x5P0I5EjXqqXX0vN/bw+M+6Re+WVj0I0K+UkHCdSPXzUx8QIwd43z/3fdQpi9huLNkGWN2yDkeTvmnaazVB4LcWMbsL/AJDpfp8lV7RnLe67L8LvoVYOrmvjJAsD3Xxn8LvtyWs1b+Elt7t08OXiFfGftTLJsvZzWubtSAj8RLXeBGZ8wF+lV+Vtxq72NfC42N3Bn8xGK/VDTgF0RzZdvqIilUUiCfQ/FR0QWSKPTS6HyUhAREQEREBERBjmksOqglZJn3KxoCIiAua9u+NCwamZq6UuKdvle4TU8V+7wueR1BAHzUVM7c2Y1os0nujQfiOpJ5K0/wARa1togCf4cPiVrXtDfzV/sSh9ocSfILDKa7dMu+maCpc/3xwnzsfPQq6lpw5guMbW5ZcirCg2S21rG/VXtPu+HYnDosrk1xwaNH7RmA77RofeH38lkeRm0OadW2uD4j6j1XQf+nWclIpNgxtzbf1TdXmEc1fG4tBZprjh0IOYUR1Q4gte3A/38F12TZkdvdHwVHX7uNdkB/fzUbsT4Y1y59K9riRchwseo+4UKqpjbEea6h/gNtB4Ksr9iAj3bK8zqmXHJHN4QWuDhgQQR4g3X6p3Q2q2ppIpWm92gH+IDEL857R2dwnDRdZ7Dan9mljJxbITbo4XW+GW3LyY6dMREWjEREQFOgkuOqgr3E+xQT0REBERAWGpfYeKzKFUuu7wwQYkREBERAXL+13cSSrtUwuu9jbezORGZt1XUF4mF2kdD8kH4+khLX2116HULftz2WbbUrU9qxllXO12BE0nq8lbZus/EWXPyOvhbrS04BvZXdM3BQKcXsrOHospHTtma1e7L4F6V0PBasEjVJJWN6U2r5Y1R7Vk4QVsEwWvbbjuDZVkR21GvLXC+t8Vs3Y3WBtVNHb32h38uB+YWmzT+8DnkVa9lG0Wx7Qu82Dmlo8SQVrh25uTrTv6ICi3cwiIgIiIJlK+4tyWZQqd1neOCmoCIiD442F1XFTak91QkBERAREQEKIg/K2+ZttGqP8A5nfRbNujD3Q86qL2obK4K6V4yc+5tzICutgQWhYB+Vc3JduzjxuLZqesaMyPss0W34AbcRPkfmqXhgYLyEeevkoFTtOjODGucR+Rrj8beBVJK2vrut9patjxdpUkrQtnbVYx1rObexsbjDQ4rcKWo42g3wU7W0j121OAm2ioZdt1LnWY3M2GHqVm21XBtyBe2appqiqa0OZwkm/dA4nC2V2jIHmSom7SzU3V17WpIxz8Fgle69njzCiUk9d+ONpF88sOfD/VXIpnPaS4WwS3SNNB29RASkjDiHqpuw6ERRFwALicyMQfspG8EWLTywUmgqg+NzcLix+hU/S/Dj/PbpHZ/XulprONyw2v0IBHzWzrWdwKMx01z+I+gAH0WzLpw6jzufXyZa/YiIrMhERAVgx1wCq9TKU91BmREQR6w4BRVJrNPNRkBERAREQEREHJu07Z4D5HnG/AR8VF2CwFrfAeoW0do9AZC0HBpaRxZ2IxxWsbJaWWa7MYLk5J7ejx/wAscatKnYkTgCWB3R2I+BWCXYsOH7O24yK2CkF2pPHqqyab6nTVaulHFxOaLgWBJJIHLFWuzD+rUKve25F7npopezz+rKrv2tIi8PeJ6qdBAMw4qKJMcslaUEzHDA4qUPUEPNfanJTWgKDWuVtI9Vp+8LfncLHsmkcHOJbYvsA3XEqfVxh7xfEAk/DJbDujs72s5kcO6yxHIu/orY479K+fxy5Vu+zKf2cTGcmgeikoi6nlW7EREQIiIClUZzUVSKPMoJSIiCLWaKOpVYMlFQEREBERAREQQNt7P9tEWa5tPIjJcyqA5stnizgLEHoSuuLTN+qTvxPtndpPXMfIrPkx9bdP/PyavigUVRYKFtOuc93A02A9530HVZ6SG9x0VVtKrZTMaZA6zsbhpOJxN7Ln3t3b2iz3bk249VdUe1IuAXtcaaqspdpxyC4jfa178Jy5+qmgUxxLXAjPuqNLeVRXVL3O7rMCcyVMpaewxOOdxoVnbUst3I3nUd0qu2ptV8QL/ZG3CCG4Am+VvFW1EeVWkFU+/A7PR2jv6r5UE3AOq87H45Yg6WPgccQ29yMcL+SlTxgygHIC6hW1C2NsoT1BY5xaACTbM9F0Who2RMDGCwC1bcunvNLJoO6PmfotxXRxz04OfLeWvoREWjAREQEREBSKPMqOpNGM0ElERBhqh3VDVhI24IVegIiICIiAiIgKv27s/wBtE5uubTyIyVgiVMunNopCxwJFiDwvHIhTdpUbXjEXaQcNDdWe9eyM5oxp32jUc/EKnoajjZw3yyPRcmWPjXdx8m5trLWS0xIh4S03sHAkC/gR8Fsmzt4SGH2kBuQAC2xGAtiSVHnh71+eYUmCGww16/RRJHRfDKe487Q27I9oEMXCQCCXi+BGljzVbRUbnua+dxe5oAFwBlrYCyt2QdFkijxU6hbjJrGf6kwtsLnxVRWVNg5/PLwU3aM3C23NUM7uM/ut9SoY7btuI39nJ1L3X+K2RazuHJ+pe3k8+uK2ZdWPTh5PyoiIrKCIiAiIgKZSDDzUNWETbABB6REQFAmbYlT1Hq2YX5IIqIiAiIgIiICIiDxOLtcOh+S5KyR0Ti5uLQ4gjkL/ACXQt7dsCngJHvu7rfEjOy57s512i+JOfjqsOa9Ojgna3bUNeAQc1KgabKimpnM70eGpbofsV6i2wQO81wPIC49FlHXjfS+4DzXxrwwXccsSqb/GSfdY8+RHzUaRksv+Zg38v3U7Ta+1VaZXnh93IH7KQyGw+izUtMBos0rUZJO6G1WxTGJ5t7T3TpxDT4LflyKop+Inna4PIjIq62JvTNGG+0HtGED+IXF/NaYcknqsuXitu46Gi1GXtEo2PayQvZxZOc1wbflxWstno6xkrQ6Nwc06g3W0u3NZZ2zoiKUCIiD3C25CnqPSM1UhAREQF8IuvqIK97bGy8qZUx3F9QoaAiIgIiod5d66ejbeR3e0YMygup52sBc4gAalct337ReI/o9C7vFwaZdBc2w55rTd6d7aiuJu4sixtGDYkdfstXpTwkEZggg+B/oiY6HTwyEkSSPkLQ0Xeb4uJJ8MgrPZ7LYLDsqoZK8Pba0sXmHxu7zT5P5KxjisVx3e/btxs16S2R3GKhyRhrsR5qyhSoprjBTpaV9p4muFxZYZGi+CwxwvbgMjopcFMdUkLXyNiSRqa2MBeHNUoVLosz0PyX2jp+4AeQ/4hSqpndI/MeH45/AXWemZhjriq6N+1LtfZ8ZheXgcPCb38Fom7e9M9E+8biY74xk4EDlyKv8AfzeBtjTxG/8AqOH/AB+60Nwut+LHU25+bKW6d83d7QqSpDQXiN5/A/A36c1trHgi4II5hflp0Xl/8V3sPe+rpSOCQvb+R5JFuhzW2mD9GL0xtzZc43f7VIJLNqW+yd+bNnx08106gsWh4xDhcHoclAkNFsF9REBERAREQFEqIrYjJS18IQVy8yPDRcmwGqgb1bZjoYvayBxbew4QTicgVxne3fyepuxhMcZGDQcT4kZINu317R2RgxUx4n5ceg+65VWzSTO9pM4ucTexXiGPG7s8fAL1iVINix5KNUxWx0J+B+ylg21wzCrtqVAwAz1toiZN3S63b2v7CVjzctB7zcMiLEi+tiV0yCeOZokidxNPxHQjQrh1NVZBx8D91f7G2vJA7ijdbm3RwHMLPPDy9xpjlcLqutxBS2C613Ye9UE9muIjk/K490n9130K2WJixss7dEu3ghfWhZyxA1Ql4KW1KyPsBcmwC13eDeWlYwtLy9/+lHjfo52Qxz8La3UybRlZO0sTB5LybMbkTYC2rvP+8lqG9G+PEDHTYNydLqejfute2xtyWc8LjZukbcB/u5+aoaurAwGJ9AtccNdsbnb6xSHXKzRRYY5qiZK697m/NWtJWcWBz/otZVMuOz2kk4X/AL5Lxb4FAfotu3B3Jkr5eJ120zD35Mi46xs68zopZp/ZVuV+lyfpE7f2eJ3dB/7sg06sGvPLmu8rDR0rImNjjaGsYA1rRgABkFmVQREQEREBERAREQYqumZIx0cjQ5jhZzXC4IOhC4jvv2cvpOKamBkp8S4ZviHI/mYOemvNdzQoPykW38l44TfNdu3w7M4p+KWktFKc48o3eAHuHww6arjO3NnTUr3MqInRuGjhYEc2HJw6i6t6FTW13D3W55eCqHm6+l1yTzK+WVLXVhjJHwNWaCpLeo5fYrFdAFC1xlW1PUh2uPIq92ZvNUwe5IeEfgf3m+uXktMss0dU4dR1U+r2yvHZ+LqNN2jvA/WQNJtm1xb6EH5r3U9ojyP1cDQebnk+gAXMm1g/L6r5+m8mj4qPHE/sbPtPeeonuJJO6cOBmA9MT5qnmmaMzb+9FWGrdlew6LCSp9To+O38qkVNYXYNwHqowC+ooazGTp8XoGymbH2RPVSCKnifK8/haMurjk0dSQF3DcPseipy2au4ZpRi2EYxMP71/wDMPjh0OaIyzmLVOzjcCauDZqkGKmzByfMP3B+Fv72unMd6oqRkTGxxMDGNFmsaLAALMBbJfVZy27oiIiBERAREQEREBERAREQFB2xsiCqjMVREyVh/C4Xt1BzB6hTkQcW3n7Dhi/Z81tfYTXI8GygX/mB8Vyzbu6tZRn9pp5GD89uJh8JG3b6r9eL45oIsRcHQqNNceWx+Kwvq/VO2eznZlSSZKVjXHHjivEb8zwEA+YK1DaPYVTOuYKqaPkHhkgHw4T6pppOWOCpZdZrOwmqH+VVQP/jbJH8g5RoexCvx45KfpwvefUsCjSfkx/bl6NXWY+xCp1kj/nP/AKKbQ9hr8fazRjkW+0cfk0KdI+XFxpfF3ui7C6UG8tTO8flYGMHhchxW27H7ONmUxBZSsc4fjlvKb8xxkgeQCaLy4vzfsPdisrDamp5JB+cDhZ5yOs0fFdS3Y7Dsn183X2EJ9HSkejR5rtDGACwAAGQGAHkvSaZ5ctvSBsbY1PSxiKmiZEzk0Znm45uPUqeiKWQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q=="></img>
            <div className="round-heading">
              <h3> Adam Declizer</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/">
                <FaFacebook className="MgEmpfb" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="MgEmpfb" />
              </a>
              <a href="http://www.twitter.com/">
                <FaTwitter className="MgEmpfb" />
              </a>
              <a href="https://plus.google.com/">
                <FaGooglePlus className="MgEmpfb" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="MgEmpfb" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageEmployee;
