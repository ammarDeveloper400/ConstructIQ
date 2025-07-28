/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { File, Loader2 } from "lucide-react";
import EstimateRenderer from "./EstimateRenderer";
import AILoader from "./loader";

const ChatWindow = ({ chatHistory, onEstimateRequest, fileUploaded, file, mockJson }) => {
  const [loading, setLoading] = useState(false);

  const handleEstimateClick = async () => {
    setLoading(true);

    try {

      setTimeout(async () => {
        setLoading(false);
        await onEstimateRequest();
      }, 5000);
    } catch (error) {
      console.error("Error requesting estimate:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (fileUploaded) {
      handleEstimateClick();
    }
  }, [fileUploaded, file]);



  return (
    <motion.div
      className="bg-[#202020] h-[calc(100vh-160px)] shadow rounded-xl overflow-auto  p-6 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl font-semibold text-center">Welcome to ConstructIQ</h1>
      {
        chatHistory.length === 0 && (
          <div className="flex items-center justify-center h-[calc(100vh-300px)] w-2xl mx-auto text-center text-[#727171]">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ullam libero aliquid itaque fugit ipsum hic neque doloremque! Repudiandae temporibus aperiam eveniet ipsa reiciendis? Impedit eveniet quidem tempore sint atque?
            </p>
          </div>
        )
      }

      <div className="space-y-2">
        {chatHistory.map((msg, i) => (

          <div key={msg?.id}>


            <div className={`flex items-start gap-2.5 ${msg.sender === "user"
              && " justify-start flex-row-reverse ml-auto"
              }`}>
              <img className="w-8 h-8 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="Joh image" />
              <div className="flex flex-col gap-1 w-full max-w-fit">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-white ">{msg.name}</span>
                </div>
                <div className={`flex flex-col p-4 border-gray-700 bg-gray-700  dark:bg-gray-700  ${msg.sender === "user"
                  ? " rounded-tl-xl rounded-bl-xl rounded-br-xl" : " rounded-e-xl rounded-es-xl"}`}>
                  {
                    msg.type === 'estimate' && (
                      <EstimateRenderer data={mockJson} />
                    )
                  }
                  <p className="text-[12px] font-normal text-white mb-4"> {msg.text}</p>

                  {
                    msg.type === "file" && (
                      <div className="flex items-start bg-gray-600 rounded-xl p-2">
                        <div className="me-2">
                          <span className="flex items-center gap-2 text-sm font-medium text-white pb-2">
                            <svg fill="none" aria-hidden="true" className="w-5 h-5 shrink-0" viewBox="0 0 20 21">
                              <g clip-path="url(#clip0_3173_1381)">
                                <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z" />
                                <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z" />
                                <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z" />
                                <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z" />
                                <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z" />
                                <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z" />
                              </g>
                              <defs>
                                <clipPath id="clip0_3173_1381">
                                  <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>{msg?.file?.name}</span>
                          </span>

                        </div>

                      </div>
                    )}
                </div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{msg.time}</span>

              </div>

            </div>

            {loading && i === chatHistory.length - 1 && (
              <div>
                <AILoader />
              </div>
            )}

          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatWindow;
