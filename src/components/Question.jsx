import React, { useEffect } from "react";
import { useTriviaStore } from "../stoer/triviaStore";
import Answers from "./Answers";

export default function Question({ question, index }) {
  return (
      <div key={index} className="bg-gray-200 ">
        <div className=" h-32 flex items-center justify-center">{question}</div>
        <Answers index={index} />
      </div>
  );
}
