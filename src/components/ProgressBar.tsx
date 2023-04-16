import { useState } from "react";

type ProgressBarProps = {
  progress: number;
  onStart?: () => void;
};

const ProgressBar = ({ progress, onStart }: ProgressBarProps) => {

  return (
    <div>
      <div className="h-4 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;