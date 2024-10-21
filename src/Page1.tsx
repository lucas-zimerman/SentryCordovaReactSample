import React from "react";
import { useNavigate } from "react-router-dom";

const Page1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page 1</h1>
      <button type="button" onClick={() => navigate("/page2")}>Go to Page 2</button>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Test Error");
        }}>
  Break the world
</button>;
    </div>
  );
};

export default Page1;
