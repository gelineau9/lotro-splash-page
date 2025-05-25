"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const FONT_STORAGE_KEY = "brandy-hall-accessible-font"

export default function Home() {
  // State to manage the toggle button's text/icon.
  // Initial state is always false to prevent hydration mismatch.
  const [useAccessibleFont, setUseAccessibleFont] = useState(false)

  // On mount, sync the React state with localStorage so the button is correct.
  useEffect(() => {
    const savedFontPreference = localStorage.getItem(FONT_STORAGE_KEY) === "true"
    setUseAccessibleFont(savedFontPreference)
  }, [])

  const toggleFont = () => {
    // Optimistically update state and DOM together.
    setUseAccessibleFont((currentValue) => {
      const newValue = !currentValue
      localStorage.setItem(FONT_STORAGE_KEY, String(newValue))
      if (newValue) {
        document.documentElement.setAttribute("data-font-style", "accessible")
      } else {
        document.documentElement.removeAttribute("data-font-style")
      }
      return newValue
    })
  }

  return (
    <main className="min-h-screen bg-[#fae8c3] flex flex-col items-center">
      {/* Accessibility Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={toggleFont}
          className="bg-[#22481E] text-[#fae8c3] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#1a3617] transition-colors shadow-lg"
          aria-label={useAccessibleFont ? "Switch to decorative font" : "Switch to accessible font"}
          title={useAccessibleFont ? "Switch to decorative font" : "Switch to accessible font for easier reading"}
        >
          {useAccessibleFont ? "Aa" : "𝒜𝒶"}
        </button>
      </div>

      {/* Logo Section */}
      <div className="w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]">
          <Image
            src="/images/BHA_Splashpage_logo.png"
            width={1500}
            height={600}
            alt="The Brandy Hall Archives - Coming Summer/Fall 2025"
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Text Content - REMOVED the conditional font-arial class */}
      <div className="w-full bg-[#fae8c3] px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg text-[#22481E] prose-strong:font-bold prose-xl">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-balance mt-0 mb-8 text-[#22481E]">
            We are pleased to present... The Brandy Hall Archives: the chronicle to RP on Meriadoc!
          </h1>

          <p className="mt-6">
            The Brandy Hall Archives is a new platform for the writers, artists, and roleplayers of Meriadoc: to be
            released this Summer/Fall! Featuring a diverse array of exciting features designed to serve the needs of
            this community, we are beyond thrilled to unveil this project to you. The aim of the Brandy Hall Archives
            platform is to enhance roleplay on Meriadoc by encouraging member creativity, collaboration, and connection
            through a robust suite of features, such as character family trees, profile pages, a commenting system,
            event calendars, and so much more. These features will be hosted on a modern website built, designed,
            maintained, and continually expanded by a team of long-term roleplayers, writers, and artists attentive to
            the needs of the Meriadoc community.
          </p>

          <p className="mt-6">
            The following are a list of features that are actively being developed by the Brandy Hall Archives team
            (many of which will be available to the community when the Archives launch later this year):
          </p>

          <ul className="mt-4 space-y-2">
            <li>
              <strong>An account system</strong> that allows members to own multiple character profiles on a single
              account (i.e. "The Fellowship" account owns the "Merry", "Pippin", and "Gimli" character profiles). Great
              for those who roleplay multiple characters!
            </li>
            <li>
              <strong>A profile page database</strong>, in which members can create and share character, NPC, object,
              location, kinship, and organization profile pages that can be linked to one another (i.e., The character
              profile page, "Frodo", is linked to the "Sting" object profile page, or, The NPC profile page, "Fang" is
              linked to the "Farmer Maggot" character profile page). Do you have a legendary bow, a family estate, a
              great hero? You can use <strong>The Brandy Hall Archives'</strong> profile database to share their history
              and relationship to one another!
            </li>
            <li>
              <strong>An art and writing database</strong>, where members can share original pieces of art and writing,
              which are prominently highlighted on our front page and Art and Writing pages.
            </li>
            <li>
              <strong>A commenting system</strong> that allows members to reply to profiles, art, and writing uploaded
              by other members to show appreciation, ask questions, and more.
            </li>
            <li>
              <strong>Site-wide visuals designed by a team of community artists</strong>, as part of{" "}
              <strong>The Brandy Hall Archives'</strong> commitment to uplifting, protecting, and prioritizing
              human-made art in an age of AI.
            </li>
            <li>
              Post-launch: <strong>A family tree system</strong> that allows members to create and share family trees
              for their characters and NPCs.
            </li>
            <li>
              Post-launch: <strong>A map hook system</strong> that allows members to browse a map of Middle-earth pinned
              with specially crafted roleplay hooks that members can "launch" on the{" "}
              <strong>Roleplayers of LOTRO's</strong> LFRP Board for community-wide awards.
            </li>
          </ul>

          <p className="mt-4">…and so much more!</p>

          <p className="mt-6">
            The team at Brandy Hall Archives are so excited to share this project with you… and we hope that you feel
            the same! We look forward to welcoming you, your art, your writing, and so much more at The Brandy Hall
            Archives this Summer/Fall!
          </p>

          <p className="mt-6">
            For information and updates about The Brandy Hall Archives, join our{" "}
            <a
              href="https://discord.com/channels/@me/1327543140202053632/1375501162656169995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#22481E] font-bold underline underline-offset-2 hover:text-[#1a3617] transition-colors"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.013a18.219 18.219 0 0 0-5.456 0 12.51 12.51 0 0 0-.995-2.013.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c2.104 1.548 4.13 2.488 6.122 3.115a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.248-2.065a.076.076 0 0 0-.041-.104c-.669-.253-1.304-.558-1.917-.892a.077.077 0 0 1-.008-.128c.129-.098.258-.2.381-.304a.074.074 0 0 1 .077-.01c4.014 1.83 8.36 1.83 12.326 0a.075.075 0 0 1 .078.009c.123.104.252.206.381.304a.077.077 0 0 1-.006.128 12.298 12.298 0 0 1-1.918.892.076.076 0 0 0-.04.105c.36.724.781 1.414 1.247 2.064a.076.076 0 0 0 .084.028c1.993-.627 4.019-1.567 6.122-3.115a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
              </svg>
              Discord
            </a>
            .
          </p>

          <p className="mt-8 text-sm">
            A big thank you to our team, Aechen, Arindiis, David, Demelor, Frimsi, Sho, and Thomas, for all that they
            have contributed to the project so far, and an especial thanks to seonhyang, who produced the illustrations
            to The Brandy Hall Archives logo, and Vesly, who developed this splash page.
          </p>
        </div>
      </div>
    </main>
  )
}
