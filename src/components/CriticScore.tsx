interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getColorClass = () => {
    if (score >= 75) return "critic-score green";
    if (score >= 60) return "critic-score yellow";
    return "critic-score red";
  };

  return <span className={getColorClass()}>{score}</span>;
};

export default CriticScore;
