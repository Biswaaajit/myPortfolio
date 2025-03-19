import Links from "../Components/Links";

function MenuPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-0 bg-black pt-24 md:gap-3">
      <Links to="/portfolio/skills">Skills</Links>
      <Links to="/portfolio/project">Projects</Links>
      <Links to="/portfolio/services">Services</Links>
      <Links to="/portfolio/certificates">My Certificate</Links>
      <Links to="/portfolio/contact">Contact</Links>
    </div>
  );
}

export default MenuPage;
