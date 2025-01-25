"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" bg-[#faf8f5] max-w-screen overflow-x-hidden">
        {/* Navigation - Responsive */}
        <nav className="fixed top-0 w-full bg-[#faf8f5] border-b-[2px] border-white z-[2]">
          <div className="px-4 md:px-16 py-6">
            {/* Desktop & Mobile Header Row */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tighter text-[#12172b]">Creciment</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-12">
                <div className="flex items-center gap-12 mr-4">
                  <button className="text-sm hover:opacity-75 font-semibold text-[#12172b]">About</button>
                  <button className="text-sm hover:opacity-75 font-semibold text-[#12172b]">Team</button>
                  <button className="text-sm hover:opacity-75 font-semibold text-[#12172b]">Values</button>
                  <button className="text-sm hover:opacity-75 font-semibold text-[#12172b]">Story</button>
                </div>
                <button className="bg-[#268196] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12172b] transition-all hover:scale-105">
                  Contact us
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} color='#171717' /> : <Menu size={24} color='#171717' />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`
          md:hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}>
              <div className="flex flex-col items-center gap-6 pt-6 pb-4">
                <button className="text-sm hover:opacity-75 font-semibold text-[#12172b] w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  About
                </button>
                <button className="text-sm hover:opacity-75 font-semibold text-[#12172b] w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Team
                </button>
                <button className="text-sm hover:opacity-75 font-semibold text-[#12172b] w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Values
                </button>
                <button className="text-sm hover:opacity-75 font-semibold text-[#12172b] w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Story
                </button>
                <button className="bg-[#268196] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#12172b] transition-all hover:scale-105 w-full">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content - Responsive */}
        <main className="px-4 md:px-16 pt-12 md:pt-24 mt-20">
          <div className="flex flex-col xl:flex-row items-center xl:items-start">
            {/* Left Content */}
            <div className="w-full xl:w-[55%] mb-12 xl:mb-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12 lg:mb-24 text-center lg:text-left text-[#171717]">
                Where <span className="text-[#268196]">Growth</span> meets <span className="text-[#268196]">Technology</span>
              </h1>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Careers Card */}
                <div className="bg-white p-6 md:p-8 rounded-3xl hover:scale-105 hover:rounded-md transition-all cursor-pointer">
                  <div className="uppercase text-xs font-semibold tracking-wider mb-6 text-[#171717]">
                    CAREERS
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-[#171717]">Join Our Team</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Help shape the future of Technology. Explore opportunities to work on transformations.
                  </p>
                  <button className="w-full bg-[#268196] text-white py-3.5 rounded-lg text-sm font-medium">
                    View Open Positions
                  </button>
                </div>

                {/* Contact Card */}
                <div className="bg-white p-6 md:p-8 rounded-3xl hover:scale-105 hover:rounded-md transition-all">
                  <div className="uppercase text-xs font-semibold tracking-wider mb-6 text-[#171717]">
                    CONTACT
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-[#171717]">Reach Out to Us</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Have questions or want to collaborate? We'd love to hear from you.
                  </p>
                  <button className="w-full border border-[#268196] py-3.5 rounded-lg text-sm text-[#268196] font-medium cursor-pointer">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="w-full lg:w-[45%] relative md:h-[400px] lg:h-[600px] hidden xl:block">
              <div className="absolute left-0 lg:-right-[65px] lg:left-auto top-0 w-full h-full">
                <img
                  src="/logo2.png"
                  alt="logo"
                  className="h-full w-full object-cover rounded-lg scale-105 lg:scale-125"
                />
              </div>
            </div>
          </div>
        </main>

        <AnnouncementSection />

        <TeamPage />

        {/* <div className="px-8 md:px-36 pt-0 pb-8  md:py-8">
          <div className="VideoEmbed_e-videoEmbed__1eFwQ FeaturedVideo_video__8ELw5" style={{ width: "100%", height: "auto" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <iframe frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Building Anthropic | A conversation with our co-founders" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/om2lIWXLLN4?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.anthropic.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-9="true"></iframe>
            </div>
          </div>
        </div> */}

        <footer className="bg-[#12172b]">
          <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-16">
            <div className="flex items-center justify-between relative">
              <span className="text-[#faf9f5] font-bold text-2xl lg:absolute lg:top-[80px] lg:left-0">
                Creciment
              </span>

              <ul className="flex justify-start gap-6 sm:mt-0 sm:justify-end ml-auto">

                <li>
                  <a
                    href="https://www.instagram.com/creciment/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#b0aea5] transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/creciment"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#b0aea5] transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/creciment-tech"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#b0aea5] transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

              </ul>
            </div>

            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl ml-auto"
            >
              <div className="flex flex-col" style={{ alignItems: "end" }}>
                <p className="font-medium text-[#faf9f5]">Products</p>

                <ul className="mt-6 space-y-4 text-sm flex flex-col" style={{ alignItems: "end" }}>
                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Chidori </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col" style={{ alignItems: "end" }}>
                <p className="font-medium text-[#faf9f5]">Company</p>

                <ul className="mt-6 space-y-4 text-sm flex flex-col" style={{ alignItems: "end" }}>
                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> About </a>
                  </li>

                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Team</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Values</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col" style={{ alignItems: "end" }}>
                <p className="font-medium text-[#faf9f5]">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm flex flex-col" style={{ alignItems: "end" }}>
                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Contact </a>
                  </li>

                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> FAQs </a>
                  </li>

                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Live Chat </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col" style={{ alignItems: "end" }}>
                <p className="font-medium text-[#faf9f5]">Legal</p>

                <ul className="mt-6 space-y-4 text-sm flex flex-col" style={{ alignItems: "end" }}>
                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Terms of service </a>
                  </li>

                  <li>
                    <a href="#" className="text-[#b0aea5] transition hover:opacity-75"> Privacy Policy </a>
                  </li>

                </ul>
              </div>
            </div>

            <p className="text-xs text-[#b0aea5] text-end">&copy; 2025. Creciment. All rights reserved.</p>
          </div>
        </footer>
      </div >
    </>
  );
}

const AnnouncementSection = () => {
  return (
    <div className="w-full mx-auto py-8 md:py-16 bg-white px-4 md:px-16">
      <div className="bg-[#e9e4d5] rounded-3xl p-6 md:p-12 relative flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Main Content */}
        <div className="max-w-4xl flex-1">
          <div className="text-sm font-semibold mb-4 text-[#171717]">Announcements</div>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#171717]">
            Introducing Chidori, Your one stop app for Pickup and Delivery
          </h1>

          <div className="text-sm text-[#171717]">15 Jan 2025</div>
        </div>

        {/* Model Updates Box */}
        <div className="bg-[#f5f1e8] rounded-xl md:rounded-2xl p-4 md:p-6 absolute -bottom-[10px] -right-[10px] md:relative md:bottom-[unset] md:right-[unset]  md:self-start flex-shrink-0">
          <FaRegArrowAltCircleRight
            className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 text-[#268196] hover:scale-105 hover:translate-x-2 transition-all cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};



const TeamPage = () => {
  const teams = [
    {
      title: "Research",
      description: "We conduct frontier research across a variety of modalities, and explore novel and emerging industries from Finance to Transportaion from Health to Agriculture and Real estate .",
      image: "/image2.jpg"
    },
    {
      title: "Product",
      description: "We translate our research into tangible, practical tools benefit businesses, and their clients and people around the globe.",
      image: "/duro2.jpg"
    },
  ];

  const values = [
    {
      number: "01",
      title: "Here for the mission",
      description: "Creciment exists for our mission: to ensure positive transformation helps people and society flourish. Progress this decade may be rapid, and we expect increasingly capable systems to pose novel challenges. We pursue our mission by building frontier solutions. We collaborate with other projects and stakeholders seeking a similar outcome."
    },
    {
      number: "02",
      title: "Unusually high trust",
      description: "Our company has unusually high trust environment: we assume good faith, disagree kindly, and prioritize honesty. We expect emotional maturity and intellectual openness. At its best, our trust enables us to make better decisions as an organization than any one of us could as individuals."
    },
    {
      number: "03",
      title: "One big team",
      description: "Collaboration is central to our work, culture, and value proposition. Leadership sets the strategy, with broad input from everyone, and trusts each piece of the organization to pursue these goals in their unique style. Individuals commonly contribute to work across many different areas."
    },
    {
      number: "04",
      title: "Do the simple thing that works",
      description: "We celebrate trying the simple thing before the clever, novel thing. We embrace pragmatism - sensible, practical approaches that acknowledge tradeoffs. We love empiricism - finding out what actually works by trying it - and apply this to our research, our engineering and our collaboration. We aim to be open about what we understand and what we don't."
    }
  ];

  return (
    <div className="px-4 md:px-16 mx-auto py-8 md:py-16">
      {/* Header Section */}


      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-16 pb-24 border-b-[2px] border-grey-200">
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-[#171717]">The Team</h2>
          <p className="text-lg text-gray-700">
            We're a team of researchers, engineers, and operational leaders, with experience
            spanning a variety of disciplines, all working together to build reliable and sustainable products.
          </p>
        </div>

        <div className="flex flex-col mb-44 md:mb-0">
          <img
            src={teams[0].image}
            alt={teams[0].title}
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-[#171717]">{teams[0].title}</h3>
          <p className="text-gray-700">{teams[0].description}</p>
        </div>

        <div className="flex flex-col relative rounded-lg md:bg-white md:py-6 md:px-8">
          <h3 className="text-xl font-bold mb-2 mt-12 text-[#171717]">{teams[1].title}</h3>
          <p className="text-gray-700">{teams[1].description}</p>
          <div className="absolute bottom-[80%] left-0 w-full md:px-2 z-[0]">
            <div className="h-60 w-full rounded-md bg-slate-500">
              <img
                src={teams[1].image}
                alt="code"
                className="w-full object-cover h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16 mt-24 ">
        <h2 className="text-3xl font-bold mb-12 text-[#171717]">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-sm text-gray-500 mb-2">{value.number}</div>
              <h3 className="text-xl font-bold mb-4 text-[#171717]">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};


