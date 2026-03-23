import { Navbar }          from '@/components/layout/Navbar'
import { CustomCursor }    from '@/components/ui/CustomCursor'
import { WaterCanvas }     from '@/components/ui/WaterCanvas'
import { HeroSection }     from '@/components/sections/HeroSection'
import { AboutSection }    from '@/components/sections/AboutSection'
import { SkillsSection }   from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection }  from '@/components/sections/ContactSection'
import { Footer }          from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      {/* Global interactive overlays */}
      <CustomCursor />
      <WaterCanvas />

      {/* Fixed grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-100"
      />

      {/* Content */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
