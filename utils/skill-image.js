// import bootstrap from "/public/svg/skills/bootstrap.svg";
// import canva from "/public/svg/skills/canva.svg";
// import cplusplus from "/public/svg/skills/cplusplus.svg";
// import csharp from "/public/svg/skills/csharp.svg";
// import css from "/public/svg/skills/css.svg";
// import git from "/public/svg/skills/git.svg";
// import html from "/public/svg/skills/html.svg";
// import illustrator from "/public/svg/skills/illustrator.svg";
// import javascript from "/public/svg/skills/javascript.svg";
// import materialui from "/public/svg/skills/materialui.svg";
// import mongoDB from "/public/svg/skills/mongoDB.svg";
// import mysql from "/public/svg/skills/mysql.svg";
// import nextJS from "/public/svg/skills/nextJS.svg";
// import photoshop from "/public/svg/skills/photoshop.svg";
// import react from "/public/svg/skills/react.svg";
// import tailwind from "/public/svg/skills/tailwind.svg";
// import typescript from "/public/svg/skills/typescript.svg";
// import vitejs from "/public/svg/skills/vitejs.svg";
// import wordpress from "/public/svg/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "java":
      return "/svg/skills/java.svg";
    case "spring boot":
      return "/svg/skills/spring-boot.svg";
    case "html":
      return "/svg/skills/html.svg";
    case "photoshop":
      return "/svg/skills/photoshop.svg";
    case "illustrator":
      return "/svg/skills/illustrator.svg";
    case "css":
      return "/svg/skills/css.svg";
    case "javascript":
      return "/svg/skills/javascript.svg";
    case "next js":
      return "/svg/skills/nextJS.svg";
    case "react":
      return "/svg/skills/react.svg";
    case "typescript":
      return "/svg/skills/typescript.svg";
    case "bootstrap":
      return "/svg/skills/bootstrap.svg";
    case "mongodb":
      return "/svg/skills/mongoDB.svg";
    case "mysql":
      return "/svg/skills/mysql.svg";
    case "tailwind":
      return "/svg/skills/tailwind.svg";
    case "vitejs":
      return "/svg/skills/vitejs.svg";
    case "c++":
      return "/svg/skills/cplusplus.svg";
    case "c#":
      return "/svg/skills/csharp.svg";
    case "python":
      return "/svg/skills/python.svg";
    case "git":
      return "/svg/skills/git.svg";
    case "materialui":
      return "/svg/skills/materialui.svg";
    case "wordpress":
      return "/svg/skills/wordpress.svg";
    case "canva":
      return "/svg/skills/canva.svg";
    default:
      break;
  }
};
