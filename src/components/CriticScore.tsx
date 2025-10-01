import { Badge } from "react-bootstrap";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default CriticScore;
