import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";

export default function Page() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-5"> {/* Membuat konten lebih ke tengah */}
      <Navbar/>
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="mt-8 sm:mt-0 space-y-5 sm:w-2/3">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Fatkhurrhn 🪴
              </h1>
              <p className="text-sm font-mono">FrontEnd Developer</p>
            </div>
            <p>
              I&#39;m a frontend developer specializing in building responsive
              and user-friendly web applications. My focus is on creating clean,
              efficient, and maintainable code.
            </p>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="/vite.svg"
                alt="profile pic"
                width={130}
                height={130}
                className="rounded-full grayscale hover:grayscale-0 duration-150"
              />
              <div className="absolute top-0 -rotate-12">
                <div className="px-1 bg-[#0e705e] w-fit rounded-sm border-[2.5px] border-[#064035]">
                  456
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider lebih dekat ke konten bawah */}
        <div className="h-[1px] my-10 bg-gradient-to-r from-10% to-90% from-background via-zinc-600 to-background max-w-lg mx-auto"></div>

        <div className="bg-[#18181b] border border-[#252529] p-5 rounded mt-5">
          <GitHubCalendar username="fatkhurrhn" blockSize={9.174527726415} />
        </div>
      </section>
    </>
  );
}
