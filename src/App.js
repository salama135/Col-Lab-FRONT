import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Dropdown, Form, Image, Jumbotron, ListGroup, Nav, Navbar, NavDropdown, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BsInbox, BsPlusSquare, BsArrowBarRight } from "react-icons/bs";
import { MdHome, MdNotifications, MdPeople, MdHelp, MdFolder, MdCode } from "react-icons/md"
import { SiJavascript, SiPython, SiCplusplus, SiPhp, SiNodeDotJs } from "react-icons/si"
import Sidebar from "react-sidebar";
import TrelloPage from './components/TrelloPage'
import Ide from "./Project_Page/projectPage";

const SignIn = () => {
  return (
    <Form className="p-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="shadow-sm rounded-0" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="shadow-sm rounded-0" type="password" placeholder="Password" />
      </Form.Group>

      <Link to="/default/home">
        <Button className="shadow-sm rounded-0" variant="primary" type="submit">
            Submit
        </Button>
      </Link>
    </Form>
  );
}

const SignUp = () => {
  return (
    <Form className="p-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className="shadow-sm rounded-0" type="email" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="shadow-sm rounded-0" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="shadow-sm rounded-0" type="password" placeholder="Password" />
      </Form.Group>

      <Link to="/default/home">
        <Button className="shadow-sm rounded-0" variant="primary" type="submit">
          Submit
        </Button>
      </Link>
    </Form>
  );
}

const Main = () => {
  return (
    <div>
      <Navbar className="bg-light shadow-sm justify-content-center" variant="light">
        <Navbar.Brand href="#">Col-Lab</Navbar.Brand>
      </Navbar>
      <Container className="pt-3 mt-5 ">
        <Tab.Container defaultActiveKey="signup">
          <Row>
            <Col sm={2} lg={3}></Col>
            <Col sm={8} lg={6} className="rounded-3 shadow-sm bg-light" bg="dark">
              <Container>
                <Nav fill variant="pills" className="p-5" defaultActiveKey="/signup">
                  <Nav.Item >
                    <Nav.Link className="shadow-sm rounded-0 mr-1" eventKey="signup">SignUp</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="shadow-sm rounded-0 ml-1" eventKey="signin">SignIn</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
              <Container>
                <Tab.Content>
                  <Tab.Pane eventKey="signup">
                    <SignUp />
                  </Tab.Pane>
                  <Tab.Pane eventKey="signin">
                    <SignIn />
                  </Tab.Pane>
                </Tab.Content>
              </Container>
            </Col>
            <Col sm={2} lg={3}></Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Create Project
  </Tooltip>
);

function Profile() {
  const [name] = useState("Ahmed Salama");
  const [userName] = useState("AhmedSalama135");

  return (
    <div>

      <Jumbotron fluid className="shadow-sm text-center">

        <Container fluid className="justify-content-center">
          <Image className="my-2" src="https://avatars.githubusercontent.com/u/43586099?v=4" style={{ width: 150, height: 150 }} roundedCircle />
          <h1>{name}</h1>
          <p>
            {"@" + userName}
          </p>
          <Link to="/account">
            <a href="#action">Edit Your Profile</a>
          </Link>
        </Container>

      </Jumbotron>
      <Container className="text-center">
        <h1 className="my-2">Projects</h1>
      </Container>
      <Container className="text-center rounded-0 shadow-sm text-center bg-light p-5 my-5">
        <ListGroup className="my-5  bg-light " variant="flush">
          <ListGroup.Item className=" bg-light ">
            <Card className="shadow-sm text-center rounded-0">
              <Button variant="light">
                <Card.Body>
                  <Row>
                    <Col lg={4} className="text">Name</Col>
                    <Col lg={4} className="text">Python</Col>
                    <Col lg={4} className="text">6 months ago</Col>
                  </Row>
                </Card.Body>
              </Button>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className=" bg-light ">
            <Card className="shadow-sm text-center rounded-0">
              <Button variant="light">
                <Card.Body>
                  <Row>
                    <Col lg={4} className="text">Name</Col>
                    <Col lg={4} className="text">Python</Col>
                    <Col lg={4} className="text">6 months ago</Col>
                  </Row>
                </Card.Body>
              </Button>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className=" bg-light ">
            <Card className="shadow-sm text-center rounded-0">
              <Button variant="light">
                <Card.Body>
                  <Row>
                    <Col lg={4} className="text">Name</Col>
                    <Col lg={4} className="text">Python</Col>
                    <Col lg={4} className="text">6 months ago</Col>
                  </Row>
                </Card.Body>
              </Button>
            </Card>
          </ListGroup.Item>
        </ListGroup>

      </Container>
    </div>
  );
}

function SideBarConent() {
  return (
    <Container className="text-center">
      <Row>
        <Col lg={12} className="bg-light shadow-sm">
          <Image className="my-3 shadow-sm" src="https://avatars.githubusercontent.com/u/43586099?v=4" style={{ width: 100, height: 100 }} roundedCircle />
        </Col>
      </Row>
      <Row className="m-3">
        <Col lg={12} className="shadow-sm bg-light">

          <Link to="/default/create-project">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="primary" size="md" block>
              <BsPlusSquare className="mx-2 mb-1" /><span>Create Project</span>
            </Button>
          </Link>
          <Link to="/default/home">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdHome className="mx-2" /><span>Home</span>
            </Button>
          </Link>
          <Link to="/default/notifications">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdNotifications className="mx-2" /><span>Notifications</span>
            </Button>
          </Link>
          <Link to="/default/teams">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdPeople className="mx-2" /><span>Teams</span>
            </Button>
          </Link>
          <Link to="/default/projects">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdFolder className="mx-2" /><span>Projects</span>
            </Button>
          </Link>
          <Link to="/default/languages">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdCode className="mx-2" /><span>Languages</span>
            </Button>
          </Link>
          <Link to="/default/help">
            <Button className="shadow-sm rounded-0 my-3 text-left" variant="light" size="md" block >
              <MdHelp className="mx-2" /><span>Help</span>
            </Button>
          </Link>
        </Col>
      </Row>

    </Container>
  );
}

function Home() {
  return (
    <div style={{ zIndex: 1 }}>
      <Container className="text-left mt-5 pt-5">
        <h3 className="my-2">Create</h3>
      </Container>
      <Container className="text-left rounded-0 shadow-sm bg-light p-5 mt-3">
        <Button variant="outline-primary" className="mr-1">
          <BsPlusSquare className="mb-1" />
        </Button>
        <Button variant="outline-primary" className="mr-1"><SiPython className="mb-1" /></Button>
        <Button variant="outline-primary" className="mr-1"><SiPhp SiPython className="mb-1" /></Button>
        <Button variant="outline-primary" className="mr-1"><SiCplusplus SiPython className="mb-1" /></Button>
        <Button variant="outline-success" className="mr-1"><SiNodeDotJs SiPython className="mb-1" /></Button>
        <Button variant="outline-warning" className="mr-1"><SiJavascript SiPython className="mb-1" /></Button>
      </Container>
      <Container className="text-left mt-5">
        <h3 className="my-2">Recent</h3>
      </Container>
      <Container className="text-left rounded-0 shadow-sm bg-light p-5 mt-3">
        <Row>
          <Col lg={3} className="p-2">
            <Card
              bg="light"
              text="dark"
              className="rounded-0 shadow-sm"
              style={{ width: '15rem' }}>
              <Card.Body>
                <Card.Title className="text-center">Instagram Clone App</Card.Title>
                <Card.Subtitle className="mb-2 text-center"><SiJavascript className="mb-1 mr-1" /><SiNodeDotJs className="mb-1 mr-1" /></Card.Subtitle>
                <Link to="/default/ide">
                  <Card.Link >Go To Project</Card.Link>
                </Link>
                <Link to="/default/tasks" className="ml-3">
                  <Card.Link >Go To Tasks</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>

  );
}

function IDE() {
  return (
    <div style={{ paddingTop:60}}>
      <Ide />    
    </div>
  );
}

function Tasks() {
  return (
    <div style={{ paddingTop: 60 }}>
      <TrelloPage />
    </div>
  );
}

function Languages() {
  return (
    <div>

    </div>
  );
}

function Notifcations() {
  return (
    <div>

    </div>
  );
}

function Help() {
  return (
    <div>

    </div>
  );
}

function Projects() {
  return (
    <div>

    </div>
  );
}

function Teams() {
  return (
    <div>

    </div>
  );
}

function Account() {
  return (
    <div>
      <h2>Account</h2>
    </div>
  );
}

function CreateProject() {
  return (
    <div>

    </div>
  );
}

class Default extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    console.log("hello")
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <div>
        <DefaultNavBar passedFunction={this.onSetSidebarOpen} />

        <Sidebar
          sidebar={<SideBarConent />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          style={{ zIndex: 2 }}
        >
          <Switch>
            <Route exact path="/default/home" component={Home} />
            <Route path="/default/notifcations" component={Notifcations} />
            <Route path="/default/teams" component={Teams} />
            <Route path="/default/languages" component={Languages} />
            <Route path="/default/account" component={Account} />
            <Route path="/default/profile" component={Profile} />
            <Route path="/default/help" component={Help} />
            <Route path="/default/projects" component={Projects} />
            <Route path="/default/create-project" component={CreateProject} />

            <Route path="/default/ide" component={IDE} />
            <Route path="/default/tasks" component={Tasks} />
          </Switch>
        </Sidebar>
      </div>
    );
  }
}

class IDENavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'AhmedSalam99',
      projectname: 'Task-List-App'
    };
  }

  render() {
    return (
      <Navbar bg="light" sticky="top" className=" bg-light shadow-sm" style={{ zIndex: 1 }}>
        <Button variant="outline-primary" onClick={this.props.passedFunction} >
          <BsArrowBarRight className="mb-1" />
        </Button>
        <Image className="mx-3" src="https://avatars.githubusercontent.com/u/43586099?v=4" style={{ width: 30, height: 30 }} roundedCircle />


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavDropdown title={"@" + this.state.username + "/" + this.state.projectname} >

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <OverlayTrigger
          placement="left"
          delay={{ show: 0, hide: 0 }}
          overlay={renderTooltip}
        >
          <Button variant="outline-primary" className="mx-2">
            <BsPlusSquare className="my-1" style={{ width: 20, height: 20 }} />
          </Button>
        </OverlayTrigger>

        <Dropdown>
          <Dropdown.Toggle variant="outline-primary">
            <BsInbox className="my-1" style={{ width: 20, height: 20 }} />
          </Dropdown.Toggle>

          <Dropdown.Menu align="right" style={{ top: 55 }} className="bg-light">
            <Container fluid="sm" className="overflow-auto bg-light" style={{ maxHeight: 350, minWidth: 350 }}>
              <div className="mx-4">
                <h4>Notifcations</h4>
                <Card.Link href="#">View All</Card.Link>
              </div>
            </Container>

            <Container fluid="sm" className="overflow-auto bg-light" style={{ maxHeight: 400, minWidth: 350 }}>
              <ListGroup variant="flush" className="bg-light">
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>

              </ListGroup>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}

class DefaultNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'AhmedSalam99'
    };
  }

  render() {
    return (
      <Navbar bg="light" sticky="top" className=" bg-light shadow-sm" style={{ zIndex: 1 }}>
        <Button variant="outline-primary" onClick={this.props.passedFunction} >
          <BsArrowBarRight className="mb-1" />
        </Button>
        <Image className="mx-3" src="https://avatars.githubusercontent.com/u/43586099?v=4" style={{ width: 30, height: 30 }} roundedCircle />


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavDropdown title={"@" + this.state.username} >
              <Link to="/default/profile">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              </Link>
              <Link to="/default/account">
                <NavDropdown.Item href="#action/3.2">Account</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />

              <Link to="/">
                <NavDropdown.Item href="#action/3.3">Logut</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <OverlayTrigger
          placement="left"
          delay={{ show: 0, hide: 0 }}
          overlay={renderTooltip}
        >
          <Button variant="outline-primary" className="mx-2">
            <BsPlusSquare className="my-1" style={{ width: 20, height: 20 }} />
          </Button>
        </OverlayTrigger>

        <Dropdown>
          <Dropdown.Toggle variant="outline-primary">
            <BsInbox className="my-1" style={{ width: 20, height: 20 }} />
          </Dropdown.Toggle>

          <Dropdown.Menu align="right" style={{ top: 55 }} className="bg-light">
            <Container fluid="sm" className="overflow-auto bg-light" style={{ maxHeight: 350, minWidth: 350 }}>
              <div className="mx-4">
                <h4>Notifcations</h4>
                <Card.Link href="#">View All</Card.Link>
              </div>
            </Container>

            <Container fluid="sm" className="overflow-auto bg-light" style={{ maxHeight: 400, minWidth: 350 }}>
              <ListGroup variant="flush" className="bg-light">
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Card>
                    <a href="#action"><Card.Body>This is some text within a card body.</Card.Body></a>
                  </Card>
                </ListGroup.Item>

              </ListGroup>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}

class App extends React.Component {

  render() {
    return (
        <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/default" component={Default}/>

        </Router>
    );
  }
}

export default App;
