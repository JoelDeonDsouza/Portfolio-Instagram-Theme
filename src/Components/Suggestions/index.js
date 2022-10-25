import React, { useState, useEffect } from "react";

// data
import dataSuggest from "../../Assets/Data/suggest.json";

const Suggestions = () => {
  const [data, setData] = useState();

  useEffect(() => {
    return () => {
      setData(dataSuggest);
    };
  }, []);

  return (
    <div className="mt-6">
      <div>
        <p
          style={{
            color: "#3C4048",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          My tool's stack
        </p>
      </div>
      {data?.map((item) => (
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center">
            <div className="w-8  h-8">
              <img src={item.img} alt="suggestions" className="rounded-full" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          </div>
          <a
            href={item.href}
            style={{ color: "#0095f6", fontSize: "14px", fontWeight: "600" }}
          >
            look
          </a>
        </div>
      ))}
      <div className="mt-6 text-xs text-semibold">
        <p style={{ color: "#B2B2B2" }}> © 2022 Joel Deon Dsouza</p>
      </div>
    </div>
  );
};

export default Suggestions;
