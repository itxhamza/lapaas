import React from "react";
import ChartBox from "../common/ChartBox";

const Suggestion = () => {
  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center gap-2 section-wrapper">
        <h1 className="heading">How Lapaas Can Help Your Business to Grow</h1>
        <div className="max-w-5xl space-y-4 font-light text-center md:font-normal">
          <p className="md:text-xl">
            Entrepreneur Sahil Khanna is an experienced entrepreneur who can
            help turn your idea into a profitable reality! He has helped many
            other entrepreneurs get their businesses off the ground with his
            expertise in marketing, sales, and startups. He has all the
            experience necessary to help guide your new business from its
            conception, through launch, and beyond.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        <div className="flex items-center justify-center md:justify-end">
          <ChartBox
            data={[
              {
                name: "cac",
                percantage: 33,
              },
              {
                name: "aov",
                percantage: 45,
              },
              {
                name: "cr",
                percantage: 33,
              },
              {
                name: "ltv",
                percantage: 66,
              },
              {
                name: "order",
                percantage: 75,
              },
              {
                name: "traffic",
                percantage: 33,
              },
            ]}
          />
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <ChartBox
            data={[
              {
                name: "cac",
                percantage: 33,
              },
              {
                name: "aov",
                percantage: 45,
              },
              {
                name: "cr",
                percantage: 33,
              },
              {
                name: "ltv",
                percantage: 66,
              },
              {
                name: "order",
                percantage: 75,
              },
              {
                name: "traffic",
                percantage: 33,
              },
            ]}
          />
        </div>
        {/* <D2C />
        <B2B /> */}
      </div>
    </section>
  );
};

export default Suggestion;
