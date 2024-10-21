import React from "react";
import { useNavigate } from "react-router-dom";

const Page3: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page 3</h1>
      <button  type="button" onClick={() => navigate("/")}>Go to Page 1</button>
    </div>
  );
};

export default Page3;
