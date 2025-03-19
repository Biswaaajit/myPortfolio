import { FaLaptopCode, FaReact, FaTools } from "react-icons/fa";
import Certificate from "./Certificate";

function CertificatePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-black pb-20 pt-28 md:gap-14 md:pt-40">
      <Certificate
        title="Web Developer/Web Designer"
        icon={<FaLaptopCode />}
        link="https://drive.google.com/file/d/17BXbvni0wugrETlkxzf06xxWhhsW9b88/view?usp=drive_link"
      >
        During my Web Design & Development course, I learned HTML, CSS, jQuery,
        Bootstrap, SQL, and basic JavaScript to build responsive and interactive
        websites. I completed several basic projects and a major project,
        applying these skills to create functional web applications. This
        experience enhanced my ability to design and develop user-friendly
        websites efficiently.
      </Certificate>
      <Certificate
        title="Mastering React"
        icon={<FaReact />}
        link="https://drive.google.com/file/d/1PAye1wCoWCyahSQuoKjF2RmThW9vI8t5/view?usp=drive_link"
      >
        I have learned React.js, Next.js, Redux, React Query, and advanced state
        management to build modern web applications. I gained hands-on
        experience with React Router, authentication, performance optimization,
        and server-side rendering. Through 10+ real-world projects, I mastered
        custom hooks, reusable components, Tailwind CSS, and Styled Components.
        I also explored React’s internals, the Virtual DOM, React Server
        Components, and Server Actions
      </Certificate>
      <Certificate
        title="Full Stack Development"
        icon={<FaTools />}
        link="https://drive.google.com/file/d/1bJnlz_fcy-4rKGbtEemI75gi8bcgY8pI/view?usp=drive_link"
      >
        I learned HTML, Tailwind CSS, JavaScript, DSA, React, Redux, MongoDB,
        Node.js, and Express.js, gaining full-stack expertise. Throughout the
        course, I built multiple projects, applying real-world concepts to
        create scalable applications. I mastered state management, API
        integration, and database handling. This course equipped me to develop
        high-performance web apps using the MERN stack.
      </Certificate>
    </div>
  );
}

export default CertificatePage;
