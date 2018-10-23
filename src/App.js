import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import{ Container, Row, Col } from "reactstrap"

import Title from './components/title'
import Button from './components/button'
import Dashboard from './components/dashboard'
const stages = [
{ title: 'To-do'}, { title: 'Doing'}, { title: 'Done'},
]
 
class App extends Component {
  render() {
    return (
     <Container>
       <Row>
         <Col>
         <Title>To-do list</Title>
         </Col>
         <Col style={{ textAlagin: "right"}}>
         <Button type="primary">crear tarea</Button>
         </Col>
       </Row>
       <Dashboard stages={stages}/>
     </Container>
    );
  }
}

export default App;