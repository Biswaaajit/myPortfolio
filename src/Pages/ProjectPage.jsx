import Heading from "../Components/Heading";
import Project from "../Components/Project";

function ProjectPage() {
  return (
    <div className="gradient min-h-screen space-y-0 pb-20 pt-32">
      <div className="grid w-full grid-cols-1 place-items-center gap-y-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-12">
        <Project
          description="Video Streaming Website"
          name="Watchly"
          imgAddress="/watchly.PNG"
          git="https://github.com/Biswaaajit/watchly"
          live="https://watchly-rho.vercel.app/"
        />
        <Project
          name="StopOver"
          description="Travel Tracker Website"
          imgAddress="/stopOver.PNG"
          git="https://github.com/Biswaaajit/stopOver"
          live="https://stop-over-snowy.vercel.app/"
        />
        <Project
          name="Soujourn"
          description="Hotel Booking Website"
          imgAddress="/soujourn.PNG"
          git="https://github.com/Biswaaajit/Soujourn"
          live="https://biswajeetsoujourn.netlify.app/"
        />
        <Project
          name="ShoppyGlobe"
          description="E-commerce Website"
          imgAddress="/shoppyglobe.PNG"
          git="https://github.com/Biswaaajit/ShoppyGlobe"
          live="https://shoppy-globe-biswajeets-projects-02e53ecd.vercel.app/"
        />
        <Project
          name="EcoGlimpse"
          description="Weather Website"
          imgAddress="/ecoglimpse.PNG"
          git="https://github.com/Biswaaajit/EcoGlimpse"
          live="https://eco-glimpse.vercel.app/"
        />
        <Project
          name="LitEra"
          description="Online Library Website"
          imgAddress="/litera.PNG"
          live="https://lit-era-biswajeets-projects-02e53ecd.vercel.app/"
          git="https://github.com/Biswaaajit/LitEra"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
