import { FC } from 'react';

interface feedbackOverlayProps {
    onClick: () => void;
}

export const FeedbackOverlay: FC<feedbackOverlayProps> = ({ onClick }) => {
  return (
    <>
      {/* Overlay */}
      <div className="absolute top-0 -right-80 transform w-72 bg-gray-500/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
        <div className="bg-white dark:bg-[#343541] p-4 rounded-md shadow-lg">
          <p className="text-gray-700 dark:text-gray-200">
            unsatisfactory? What is the response that you expected?
          </p>
          <button
            id="feedback"
            onClick={onClick}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Write
          </button>
   
        </div>
      </div>
    </>
  );
};
