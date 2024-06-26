import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import ts from "../assets/ts.png";
import graph from "../assets/graphql.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import kafka from "../assets/kafka.png";
import redis from "../assets/redis.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: ts,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: graph,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 12,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: redis,
      title: "Redis",
      style: "shadow-red-500",
    },
    {
      id: 14,
      src: kafka,
      title: "Kafka",
      style: "shadow-white",
    },
    {
      id: 15,
      src: aws,
      title: "AWS",
      style: "shadow-orange-500",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
