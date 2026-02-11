import { lazy, Suspense } from "react";
import Hero from "../sections/Hero.jsx";
const Skills = lazy(() => import("../sections/SkillContainer.jsx"));
const Experience = lazy(() => import("../sections/Experience.jsx"));

function LandingPage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col justify-center items-center z-20 bg-black">
        <Hero />
        <Suspense fallback={<div className="text-white mt-20">Loading...</div>}>
          <Skills />
          <Experience />
        </Suspense>
      </div>
    </>
  );
}

export default LandingPage;
