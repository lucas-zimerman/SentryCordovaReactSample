import React from "react";
import { useNavigate } from "react-router-dom";

const Page2: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page 2</h1>
      <button type="button" onClick={() => navigate("/page3")}>Go to Page 3</button>
    </div>
  );
};

export default Page2;
