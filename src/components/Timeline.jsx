import React from "react";
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";
import Title from "./Title";
function Timeline() {
  return (
    <div
      className="my-20 flex flex-col justify-center
   md:flex-row"
    >
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
