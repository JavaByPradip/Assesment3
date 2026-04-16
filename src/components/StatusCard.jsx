import styled from "styled-components";

// styled component
const Card = styled.div`
  padding: 20px;
  border-radius: 6px;
  color: white;
  margin: 10px;
  text-align: center;

  background-color: ${(props) =>
    props.type === "success" ? "green" : "red"};
`;

function StatusCard({ type, message }) {
  return <Card type={type}>{message}</Card>;
}

export default StatusCard;