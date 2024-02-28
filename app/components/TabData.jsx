import React from 'react';

const TabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Project Management</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Certifcation in Full Stack Development <br /> Southern Methodist University <br /> 2021</li>
                <br />
                <li>Associates in Science Computer Science <br /> Richland College <br /> 2017 </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>Technical Project Manager <br /> T-Mobile <br /> 2021-2023 </li>
                <br />
                <li>Front-End Developer <br /> Freelance <br /> 2020-2021 </li>
                <br />
                <li>Mobile Expert <br /> T-Mobile <br /> 2016-2021 </li>
            </ul>
        )
    }
];

export default TabData;