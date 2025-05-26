export function getNavigationDeatil(path) {
  const pageConfig = {
    "/about": { title: "About Us", bgColor: "bg-green-600" },
    "/contact": { title: "Contact", bgColor: "bg-red-600" },
    "/portfolio/project": { title: "Projects", bgColor: "gradient" },
    "/portfolio/skills": { title: "", bgColor: "bg-black" },
    "/portfolio/certificates": { title: "My Certificate", bgColor: "bg-black" },
    "/portfolio/services": { title: "My Services", bgColor: "bg-black" },
    "/portfolio/contact": { title: "", bgColor: "bg-black" },
    "/portfolio/menu": { title: "", bgColor: "bg-black/60" },
  };

  return pageConfig[path] || { title: "", bgColor: "" };
}
