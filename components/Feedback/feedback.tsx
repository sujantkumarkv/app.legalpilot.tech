import { FC, useContext, useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import HomeContext from '@/pages/api/home/home.context';

import { FeedbackOverlay } from './feedbackOverlay';

import { saveConversation, saveConversations } from '@/utils/app/conversation';

// interface feedbackProps {
//   messageIndex: number;
// }

export const Feedback = ( { messageIndex }: { messageIndex: number } ) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [feedback, setFeedback] = useState<string>('');
  const { state: { selectedConversation, conversations }} = useContext(HomeContext);

  const handleSubmitFeedback = () => {
    if (!selectedConversation) {
      console.log('No conversation selected');
      return;
    }

    const updatedMessages = selectedConversation.messages.map((message, index) => {
      if (index === messageIndex) {
        // assuming you have the id of the message the user is providing feedback for
        return {
          ...message,
          feedback,
        };
      }
      return message;
    });

    const updatedConversation = {
      ...selectedConversation,
      messages: updatedMessages,
    };

    const updatedConversations = conversations.map((conversation) => {
      if (conversation.id === selectedConversation.id) {
        return updatedConversation;
      }
      return conversation;
    });

    saveConversation(updatedConversation);
    saveConversations(updatedConversations);
    setFeedback('');
    setIsClicked(false);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        window.addEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mouseup', handleMouseUp);
      setIsClicked(false);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  return (
    <>
      <FeedbackOverlay onClick={() => setIsClicked(true)} />

      {isClicked && (
        <>
          <div className="z-10000 fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="fixed inset-0 z-1000 overflow-hidden">
              <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="hidden sm:inline-block sm:h-screen sm:align-middle"
                  aria-hidden="true"
                />
                <Draggable>
                  <div
                    ref={modalRef}
                    className="dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
                    role="dialog"
                  >
                    <div className="mb-10 text-2xl">Help me to help you</div>
                    <div className="mt-4 italic">
                      Hi, this is Founder/Engineer Sujant. You might have
                      expected a certain response but got an unsatisfactory
                      answer. Please write what you expected & I'll fix it for
                      you.
                    </div>
                    <textarea
                      className="mt-4 w-full min-h-[10rem] rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />

                    <button
                      className="mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
                      onClick={
                        handleSubmitFeedback
                      }
                    >
                      submit
                    </button>
                  </div>
                </Draggable>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
