"use client";
import { useState, useEffect } from "react";
const mainAvatar = "/avatars/mainAvatar.webp";
const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navs = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    "Pending Questions",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="xl:hidden fixed top-0 left-0 w-full bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <img className="rounded-full" width={32} height={32} src={mainAvatar} alt="User" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-14 left-0 w-full h-fit  bg-(--navbar) text-(--navbar-text) z-40 p-4 pb-20">
          <div className="space-y-3">
            {navs.map((v, index) => (
              <div
                key={index}
                className={
                  "hover:bg-[#eff5f9] cursor-pointer px-4 py-2 rounded-sm " +
                  (index == 0
                    ? "text-[#2FBCFE] bg-[#FFFFFF1A]"
                    : "text-(--navbar-text)")
                }
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden border xl:flex xl:w-1/6 xl:text-[100%] text-[80%] bg-(--navbar) text-(--navbar-text) h-full">
        <div className="w-full p-6 flex flex-col space-y-3 mt-auto h-[95%]">
          {navs.map((v, index) => (
            <div
              key={index}
              className={
                "hover:bg-[#eff5f9] cursor-pointer px-4 py-2 rounded-sm " +
                (index == 0
                  ? "text-[#2FBCFE] bg-[#FFFFFF1A]"
                  : "text-(--navbar-text) hover:text-(--navbar)")
              }
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 scroll">
        {/* Desktop Header */}
        <header className="hidden lg:block bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-end items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <img
                className="w-10 h-10 rounded-full"
                src={mainAvatar}
                alt="User"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className={`container  ${isMobile ? "mt-16 ml-auto mr-auto" : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
