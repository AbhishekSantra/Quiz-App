import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name,score}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="cong">Congratulation {name}  🎉🎉🎉</span>
      <span className="result-title">You Got: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;