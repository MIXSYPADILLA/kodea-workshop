import React from "react";
import { Row, Col } from "reactstrap"
import "./index.css"

const Stage = (props) => <Col>
<div className="ws-dashboard__stage-title">{props.title}</div>
<div className="ws-dashboard__stage-cards">lista de tarjetas</div>
</Col>

const Dashboard = (props) => (
    <Row>
       {props.stages.map((stage) =>  <Stage {...stage} size={12 / props.stages.length}/>)}
    </Row>
);

export default Dashboard