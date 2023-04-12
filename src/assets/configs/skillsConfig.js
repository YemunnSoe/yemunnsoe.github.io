import {
    SiPython,
    SiMysql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiJupyter,
    SiAmazonaws,
    SiWindowsterminal,
    SiSnowflake,
    SiJson,
    SiApacheairflow,
    SiPowerbi, SiTableau,
    SiGoogleanalytics,
    SiAsana,
    SiMiro,
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiAmazonaws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiAsana size={50}/>,
            text: "Asana"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiMiro size={50}/>,
            text: "Miro"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJson size={50}/>,
            text: "Json"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiJupyter size={50}/>,
            text: "Jupyter"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiGoogleanalytics size={50}/>,
            text: "Google Analytics"
        }
    ]
}

export default skillsConfig
