import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";
import DarkMode from "../Components/DarkMode"; // Import DarkMode

export default function Page() {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Foto */}
                    <div className="flex items-center space-x-4 md:block">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1744243200&v=beta&t=UxHXMMALF5Qc2QZ4dhi3Ers-M-nP6NjBjaPPcrgHLY8"
                            alt="profile pic"
                            className="rounded-full grayscale hover:grayscale-0 duration-150 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
                        />
                        {/* Nama & Role di sebelah foto (Mobile) */}
                        <div className="md:hidden">
                            <h1 className="text-xl sm:text-2xl font-bold">Fatkhurrhn 🪴</h1>
                            <p className="text-xs sm:text-sm font-mono text-gray-700 dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                    </div>

                    {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
                    <div className="text-center md:text-left md:flex-1">
                        <div className="hidden md:block">
                            <h1 className="text-2xl font-bold">Fatkhurrhn 🪴</h1>
                            <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                        <p className="mt-2 text-gray-800 dark:text-gray-400 text-justify">
                            I'm an Information Systems student passionate about Front-End Development. I love turning ideas into interactive, user-friendly experiences with clean and efficient code. Always exploring new web technologies, I enjoy building innovative projects and sharing knowledge to make a real impact.😎🔥
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-gray-700 via-zinc-600 to-gray-300 dark:to-gray-700 max-w-lg mx-auto"></div>

                {/* GitHub Activity */}
                <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 rounded mt-5 max-w-full overflow-x-auto">
                    <GitHubCalendar
                        username="fatkhurrhn"
                        blockSize={11.4}
                        colorScheme="dark"
                    />
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-gray-700 via-zinc-600 to-gray-300 dark:to-gray-700 max-w-lg mx-auto"></div>

            </section>

            {/* Dark Mode Toggle */}
            <DarkMode />
        </div>
    );
}
