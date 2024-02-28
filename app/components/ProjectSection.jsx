import React from 'react';
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1",
        image: "https://via.placeholder.com/150",
        tag: ["All", "Web Development"]


    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2",
        image: "https://via.placeholder.com/150",
        tag: ["All", "Web Development"]
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a description of project 3",
        image: "https://via.placeholder.com/150",
        tag: ["All", "Web Development"]
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a description of project 4",
        image: "https://via.placeholder.com/150",
        tag: ["All", "Web Development"]
    }
];

const ProjectSection = () => {
    return (
        <h2><div>ProjectSection</div></h2>
    );
};

export default ProjectSection;