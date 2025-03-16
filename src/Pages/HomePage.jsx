import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";
import DarkMode from "../Components/DarkMode"; // Import DarkMode

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="mt-8 sm:mt-0 space-y-5 sm:w-2/3">
            <div>
              <h1 className="text-2xl font-bold">Fatkhurrhn 🪴</h1>
              <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                FrontEnd Developer
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-400">
              I'm a frontend developer specializing in building responsive and
              user-friendly web applications. My focus is on creating clean,
              efficient, and maintainable code.
            </p>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1744243200&v=beta&t=UxHXMMALF5Qc2QZ4dhi3Ers-M-nP6NjBjaPPcrgHLY8"
                alt="profile pic"
                width={130}
                height={130}
                className="rounded-full grayscale hover:grayscale-0 duration-150"
              />
              <div className="absolute top-0 -rotate-12">
                <div className="px-1 bg-[#0e705e] w-fit rounded-sm border-[2.5px] border-[#064035]">
                  273
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-gray-700 via-zinc-600 to-gray-300 dark:to-gray-700 max-w-lg mx-auto"></div>

        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 rounded mt-5 max-w-full overflow-x-auto">
  <GitHubCalendar 
    username="fatkhurrhn" 
    blockSize={11.4} 
    colorScheme="dark" // Agar kalender GitHub ikut menyesuaikan
  />
</div>

      </section>

      <DarkMode /> {/* Tambahkan komponen DarkMode */}
    </div>
  );
}
