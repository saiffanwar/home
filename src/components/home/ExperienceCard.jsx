import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" style={{height: "100px"}} />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      <p className="lead">
          {data.role2}
          <br />
          {data.date2}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;
