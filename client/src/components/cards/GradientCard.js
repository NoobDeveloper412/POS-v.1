import React from "react";
import { Card, CardBody } from "reactstrap";

const GradientCard = ({ imgSrc, children }) => {
  console.log(imgSrc);
  return (
    <Card
      className="justify-content-end gradientCards "
      style={{ backgroundImage: `url('${imgSrc}')` }}
    >
      <CardBody className="justify-content-end d-flex flex-column">
        {children}
      </CardBody>
    </Card>
  );
};
export default GradientCard;
