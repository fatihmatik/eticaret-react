import React from "react";

const Bar = ({ value }) => {
  // Ensure value is between 0 and 10
  const clampedValue = Math.max(0, Math.min(10, value));

  // Calculate the width percentage based on the value
  const fillWidth = (clampedValue / 10) * 100 + "%";

  return (
    <div className="relative bg-gray-200 w-full h-4 rounded-lg overflow-hidden">
      <div className="h-full bg-green-500" style={{ width: fillWidth }}></div>
      <p className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs text-gray-700">
        Beğenilme Orani
      </p>
    </div>
  );
};

export default Bar;
