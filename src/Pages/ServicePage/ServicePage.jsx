import Service from "./Service";

function ServicePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-black pb-8 pt-40">
      <Service
        title="Frontend Development"
        primary="I create responsive, high-performance web interfaces using React.js, Tailwind CSS, and JavaScript. My focus is on delivering sleek, user-friendly, and interactive designs optimized for all devices."
        secondary="Beyond styling, I ensure seamless user experience with efficient state management using Redux, optimizing performance, and integrating APIs for dynamic content."
      />
      <Service
        title="Backend Development"
        primary="I develop scalable and efficient server-side applications using Node.js and Express.js, ensuring robust data handling, authentication, and security. I also structure and manage databases using MongoDB."
        secondary="I specialize in designing REST APIs with secure authentication (JWT, OAuth), error handling, and database optimization, ensuring smooth data exchange and high-performance back-end operations."
      />
      <Service
        title="Full-Stack Web Applications"
        primary="With expertise in both front-end and back-end technologies, I build full-fledged web applications using the MERN stack, handling everything from UI design to API integration and deployment."
        secondary="I ensure applications are fast, secure, and scalable by leveraging Redux for state management, optimizing database queries, and implementing best practices in coding and performance."
      />
      <Service
        title="Website Performance Optimization"
        primary="I enhance website speed and efficiency using techniques like lazy loading, code splitting, and caching, ensuring a smooth user experience."
        secondary="I analyze performance using tools like Lighthouse and Web Vitals, optimizing load times, reducing JavaScript execution, and improving asset management for faster site performance."
      />
      <Service
        title="Interactive Animations"
        primary="I create engaging, modern user experiences with smooth animations using GSAP, designing scroll-based effects, transitions, and UI interactions."
        secondary="I balance performance and animation complexity to ensure smooth execution. My work includes hover effects, loading sequences, animated banners, and interactive UI elements that enhance user engagement."
      />
      <Service
        title="API Development & Integration"
        primary="I develop and manage secure, scalable, and efficient REST APIs using Node.js, Express.js, and MongoDB, enabling seamless client-server communication."
        secondary="Beyond development, I integrate third-party APIs such as payment gateways, authentication providers, and cloud services, ensuring security, proper error handling, and efficient data fetching."
      />
    </div>
  );
}

export default ServicePage;
