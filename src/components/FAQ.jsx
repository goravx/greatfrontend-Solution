import Accordian from "./Accordian";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // track which accordion is open

  const accordianData = [
    "React is a JavaScript library for building user interfaces. It lets you compose UIs from small, reusable pieces called components.",
    "Next.js is a React framework that enables server-side rendering and static site generation. It is widely used for production-ready web apps.",
    "Tailwind CSS is a utility-first CSS framework that lets you build custom designs quickly by composing utility classes directly in your markup.",
    "Git is a version control system that tracks changes in source code. It allows collaboration and branching strategies for efficient workflows.",
    "JavaScript is a versatile programming language used for both client-side and server-side applications. It powers most of the web today."
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {accordianData.map((item, index) => (
            <Accordian
              key={index}
              data={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
