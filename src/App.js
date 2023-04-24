import React, { useEffect, useState, useCallback } from "react";
import StickyContainer from "./components/StickyContainer";
import ScrollableContainer from "./components/ScrollableContainer";
import "./App.css";

const databaseData = {
  "projects": [{"id":1,"title":"HR Management System","description":"Developed a HR assistant web application that digitized the HR department processes such as onboarding, leave management, performance appraisal and employee management at WEC.","github_link":"https://github.com/benard-dev/wec-hr-management-system","cover_image":"assets/Projects/hrms-preview.gif","open_source":true,"start_date":"2023-01-01","end_date":"2023-04-01","created_at":"2023-04-18T12:49:19.722Z","updated_at":"2023-04-18T12:49:19.722Z","skills":[{"name":"React"},{"name":"TailwindCSS"},{"name":"Ruby on Rails"}]},{"id":2,"title":"WEC Company Website","description":"Creating the Willfreight company website was an exciting project that involved collaboration between me and the client. I worked closely with Willfreight to develop a modern and user-friendly website that effectively showcases their services, values, and company culture, while providing a seamless user experience for visitors.","github_link":"https://github.com/benard-dev/wec-company-website","cover_image":"assets/Projects/wcw-preview.gif","open_source":true,"start_date":"2023-04-01","end_date":"2023-04-01","created_at":"2023-04-18T12:49:19.746Z","updated_at":"2023-04-18T12:49:19.746Z","skills":[{"name":"React"},{"name":"TailwindCSS"},{"name":"Ruby on Rails"}]}], 
  "blogs": [{"id":1,"title":"My Journey as a Software Developer Starts","teaser_content":"So, I have been coding relentlessly for the past three months, and I've been able to see some significant progress. Just check out this Github contribution graph. Isn't it beautiful? Especially considering it's just April...","cover_image":"assets/Blog/streaks.png","link":"https://dev.to/benard-dev/my-software-development-journey-begins-2428","created_at":"2023-04-18T12:49:19.774Z","updated_at":"2023-04-18T12:49:19.774Z"}],
  "work-history": [{"id":1,"company":"Willfreight Express Cargo Services","position":"Software Engineer Intern","description":"During my 12-week internship at Willfreight, a freight and logistics company, I worked on developing a human resource management system. I collaborated with mentors and team members to ensure timely delivery of the project.","start_date":"2023-01-01","end_date":"2023-04-01","logo":"assets/WorkHistory/wec-logo.jpg","link":"https://www.willfreight.com","created_at":"2023-04-18T12:49:19.810Z","updated_at":"2023-04-18T12:49:19.810Z"},{"id":2,"company":"Strathmore School","position":"Teaching Assistant, Computer Lab","description":"As a teaching assistant for the computer lab at Strathmore School, I assisted in the delivery of computer-based instruction to students. My responsibilities included setting up and maintaining computer equipment, monitoring student progress, and providing individualized assistance to students as needed. I played a key role in ensuring the smooth functioning of the computer lab and facilitating student learning.","start_date":"2021-01-01","end_date":"2021-04-01","logo":"assets/WorkHistory/strath-logo.png","link":"https://www.strathmore.ac.ke/","created_at":"2023-04-18T12:49:19.836Z","updated_at":"2023-04-18T12:49:19.836Z"}]
}

const convertSnakeToCamel = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_\w/g, (match) => match[1].toUpperCase());
    acc[camelKey] = obj[key];
    return acc;
  }, {});
};

const useFetchData = (databaseData) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
//     const response = await fetch(url);
//     const json = await response.json();
    const camelCaseData = databaseData.map(convertSnakeToCamel);
    setData(camelCaseData);
  }, [databaseData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

const App = () => {
  const projects = useFetchData(databaseData.projects);
  const blogs = useFetchData(databaseData.blogs);
  const workHistory = useFetchData(databaseData["work-history"]);

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gradient">
      <StickyContainer />
      <ScrollableContainer
        projects={projects}
        blogs={blogs}
        workHistory={workHistory}
      />
    </div>
  );
};

export default App;
