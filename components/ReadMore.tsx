"use client";

import { useState } from "react";

interface ReadMoreProps {
  text: string;
}

export default function ReadMore({ text }: ReadMoreProps) {
  const [isShown, setIsShown] = useState(false);

  const OnClick = () => {
    setIsShown(!isShown);
  };

  return (
    <p onClick={OnClick}>
      {text.length > 300 && !isShown ? text.slice(0, 300) + "..." : text}
      {text.length > 300 ? (
        <span className="text-primary cursor-pointer">
          {isShown ? " Read Less" : " Read More"}
        </span>
      ) : (
        ""
      )}
    </p>
  );
}
