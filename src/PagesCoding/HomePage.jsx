import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Thumbnail1 from "../assets/thumbnail01.png"

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
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
                            <p className="text-xs sm:text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                    </div>

                    {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
                    <div className="text-center md:text-left md:flex-1">
                        <div className="hidden md:block">
                            <h1 className="text-2xl font-bold">Fatkhurrhn 🪴</h1>
                            <p className="text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                        <p className="mt-2 text-gray-800 dark:text-white text-justify">
                            I'm an Information Systems student passionate about Front-End Development. I love turning ideas into interactive, user-friendly experiences with clean and efficient code. Always exploring new web technologies, I enjoy building innovative projects and sharing knowledge to make a real impact.😎🔥
                        </p>
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* GitHub Activity */}
                <div className="bg-gray-100 bg-zinc-900 border border-[#252529] p-5 rounded-[11px] mt-5 max-w-full overflow-x-auto">
                    <GitHubCalendar
                        username="fatkhurrhn"
                        blockSize={11.4}
                        colorScheme="dark"
                    />
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* skills */}
                <div className="max-w-4xl text-center mb-10">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg list-none p-0">
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            HTML
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            CSS
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            JavaScript
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            React
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Bootstrap
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Next.js
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Laravel
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Node.js
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Git/Github
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Tailwind
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            REST API
                        </li>
                        <li className="bg-[#18181b] text-white/90 border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            GraphQL
                        </li>
                    </ul>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                <div className="grid gap-2">
                    <div className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center">
                        <div className="p-2">
                            <img
                                src={Thumbnail1}
                                alt="Personal Website Mockup"
                                width={500}
                                height={100}
                                className="border border-[#202024] rounded-lg"
                            />
                        </div>
                        <div className="p-3 w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-black">Personal Website</h1>
                                <a
                                    target="_blank"
                                    href="https://fatkhurrhn.vercel.app/"
                                    className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2"
                                >
                                    <i className="ri-link-m" /> Preview
                                </a>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3" />
                            <div className="flex items-center gap-5">
                                <ul className="flex gap-2">
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # JavaScript
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # Tailwindv3
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # ReactJS
                                    </li>
                                </ul>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3 text-justify" />
                            <p>
                            Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
                            </p>
                        </div>
                    </div>
                    {/* Add other projects here if needed */}
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

            </section>

            {/* Dark Mode Toggle */}
            <Footer />
        </div>
    );
}
