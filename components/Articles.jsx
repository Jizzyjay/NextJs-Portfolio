import React from "react";
import codeImg from "../public/assets/projects/code.jpg";
import reactImg from "../public/assets/projects/react-logo.svg";
import ArticleItem from "./ArticleItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#008037]">
          Articles
        </p>
        <h2 className="py-4">What I&apos;ve Written</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ArticleItem
            title="React and ReactDom"
            backgroundImg={reactImg}
            articleUrl="https://dev.to/jizzyjay/react-and-reactdom-2a4h"
            tech="React JS"
          />
          <ArticleItem
            title="Implementing Counter App"
            backgroundImg={reactImg}
            articleUrl="https://dev.to/jizzyjay/implementing-counter-app-4k8p"
          />
          <ArticleItem
            title="Lessons learnt so far in my programming Journey"
            backgroundImg={codeImg}
            articleUrl="https://dev.to/jizzyjay/lessons-learnt-so-far-in-my-programming-journey-1a59"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
