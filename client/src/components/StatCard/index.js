import React from 'react';
import {Card} from 'react-bootstrap';

const StatCard = ({bg, color, value, text, className}) => {
  return (
    <Card bg={bg} className={`p-2 mt-3 text-${color} ${className}`}>
      <h2 className="text-truncate">{value}</h2>
      <h6 className="text-truncate">{text}</h6>
    </Card>
  );
};

export default StatCard;
