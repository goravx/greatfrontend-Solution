import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordian({ data, isOpen, onClick }) {
  return (
    <div
      className="bg-gray-700 rounded-xl p-4 shadow-md cursor-pointer transition hover:bg-gray-600"
    >
      {/* Header */}
      <div
        className="flex justify-between items-center"
        onClick={onClick}
      >
        <h3 className="font-semibold text-lg">
          {data.substring(0, 20)}...
        </h3>
        <div>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Body */}
      {isOpen && (
        <p className="mt-3 text-gray-300 leading-relaxed">
          {data.substring(21)}
        </p>
      )}
    </div>
  );
}
