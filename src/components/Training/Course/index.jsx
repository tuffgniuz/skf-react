import React, { useEffect, useState } from "react";

import { fetchSKFCourse } from "../../../core/api";

import "./index.css";

const Course = () => {
  const [courseTopics, setCourseTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchSKFCourse();
      setCourseTopics(data.topics);
    })();
  }, []);

  const expandNode = () => {
    console.log("hi");
  };

  return (
    <div className="grid-container">
      <div className="tree-container">
        <h1 className="tree-head">Training Labs</h1>
        {courseTopics.map((topic) => (
          <>
            <div className="tree-node-wrapper">
              <div className="tree-node-parent" onClick={expandNode}>
                <span className="tree-node-title">{topic.name}</span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="content-container"></div>
    </div>
  );
};

export default Course;
