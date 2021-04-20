import { Card } from "react-bootstrap";

export default ({ bg, color, value, text, className }) => {
  return (
    <Card bg={bg} className={`p-2 text-${color} ${className}`}>
      <h2 className="text-truncate">{value}</h2>
      <h6 className="text-truncate">{text}</h6>
    </Card>
  );
};
