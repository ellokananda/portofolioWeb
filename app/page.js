import Navbar from "@/components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

import HomeSection from "@/components/HomeSection";
import ProfileSection from "@/components/ProfileSection";
import ContactSection from "@/components/ContactSection";
import SkillSection from "../components/SkillSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-[#90e0ef] to-white">
      <Navbar />
      <HomeSection />
      <ProfileSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />

    <Footer />
    </main>
  );
}
