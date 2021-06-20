import React, { useEffect, useState } from "react";
import "./styles.scss";

const Screen = (props) => {
  const { children, className } = props;
  const [style, setStyle] = useState({
    opacity: 0,
    // transform: "translate3d(0, -20px, 0)",
  });

  useEffect(() => {
    const effect = setTimeout(() => {
      setStyle({});
    }, 150);

    return () => {
      clearTimeout(effect);
    };
  }, []);

  return (
    <div {...props} className={`screen ${className || ""}`}>
      <div className="screen__children" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Screen;
