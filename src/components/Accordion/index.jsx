import React, { useEffect, useState } from "react";

import "./index.css";

const data = [
  {
    title: "developer",
    description:
      "Secure your software development life cycle with (M)ASVS security controls.",
    isCollapsed: false,
  },
  {
    title: "pentester",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    isCollapsed: true,
  },
  {
    title: "labs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    isCollapsed: true,
  },
  {
    title: "checklist",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    isCollapsed: true,
  },
];

const Accordion = () => {
  const [items, setItems] = useState(data);

  const onClickExpandItem = (item) => {
    const newItems = items.map((i) => {
      if (item === i) {
        return {
          ...i,
          isCollapsed: false,
        };
      }
      return {
        ...i,
        isCollapsed: true,
      };
    });

    setItems(newItems);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          className={`${item.isCollapsed ? "item-collapsed" : "item-active"}`}
        >
          <div
            className="accordion-action"
            onClick={() => onClickExpandItem(item)}
          >
            <h1 className="text-vertical-up">{item.title}</h1>
          </div>
          <div className="accordion-item">
            <h1 className="title-1">{item.title}</h1>
            <p>{item.description}</p>
            <button className="btn btn-light">Get started</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
