import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Ye Munn Soe</strong>
        </h1>,
    titles: [
        "Business Intelligence Specialist",
        "Analytics Manager",
        "Data Architect",
        "Instructor & Coach",
        "Burmese"
    ],
    about: {
        start: "A seasoned Business Intelligence (BI) Specialist and a leader with 8 years of experience in analytics," +
            "strategy consulting and data ecosystems. Harness data and technical skills, combined with strong" +
            "business knowledge, to drive informed business strategies. ",
        exit: "Demonstrate a proven ability to foster a data-driven culture within the organization by successfully" +
            "promoting a community of practice. Proactively lead efforts to enhance the organization's data literacy" +
            "and promote a data-driven culture through various capacity-building programs. Mastered in presenting" +
            "complex data insights in a clear, compelling manner to various audiences.",
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Analytics Business Partner",
            company: "Proximity Designs [2020-present]",
            description: "Developed cutting-edge solutions by leveraging data-driven insights in close collaboration" +
                "with teams from Digital Marketing, Contact Center, Product & Service Design, Agronomy, and" +
                "Digital Initiative. This collaborative effort resulted in enhancing the accessibility of" +
                "product and market knowledge for 2 million subscribers.",
            date: "2020-present",
            icon: <DiCodeigniter/>,
            tags: ["powerbi", "snowflake", "python", "knime", "s3", "sap", "manychat"]
        },
        {
            id: "work-3",
            title: "Analytics Manager",
            company: "Proximity Designs [2019-2020]",
            description: "Automated data processing, analysis and visualization using various technologies – Power BI," +
                "SAP (ERP), MySQL, Snowflake (Cloud Data Warehouse), KNIME (ETL/ELT), and Python, resulting in 4 major" +
                "dashboards and BI ecosystems for digital channels. Worked on data management, data governance, data" +
                "democratization projects and maintained an enterprise data architecture roadmap for accelerating Digital Transformation.",
            icon: <FaMobileAlt/>,
            tags: ["powerbi", "snowflake", "python", "knime", "s3", "sap", "manychat"]
        },
        {
            id: "work-2",
            title: "Research Associate",
            company: "Thura Swiss [2018 - 2019]",
            description: "Led market and consumer research, designed a brand performance insights service and provided insights to clients in multiple industries. Led a team of data analysts to meet deadlines. Spearheaded the creation of a monthly subscription-based industry and brand insight service, contributing to $80,000 in company revenue in the first year of launch.",
            icon: <GiCommercialAirplane/>,
            tags: ["Project Management", "Business Intelligence", "Business Strategy", "Data Modeling", "Quantitative Analytics", "Market Research"]
        },
        {
            id: "work-1",
            title: "Data Architect & Business Intelligence",
            company: "Hello Cab [2016 - 2018]",
            description: "Engaged with stakeholders to identify key data points, analyzed operational data to extract insights for a data-led business strategy, and designed and maintained the information management system for the app-based transportation service. Contributed to economic progress by enabling 200,000 monthly job opportunities for drivers and ensuring a safe and comfortable transportation experience for 8,000 passengers daily.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["etl ", "mssql", "Data Architecture", "Data Ecosystem", "Data Modeling", "Data Analysis"]
        },
        {
            id: "work-0",
            title: "Strategic Planning Associate",
            company: "Irrawaddy Green Towers [2013 - 2016]",
            description: "Collected land and legal documents, developed cost analysis for government tenders under guidance, managed budgets, organized site acquisition projects, prioritized and developed SOPs, and excelled in managing teams to meet deadlines.",
            date: "2013-2016",
            icon: <BsClipboardData/>,
            tags: ["Strategic Planning", "Business Strategy", "Business Analysis", "Business Planning"]
        }
    ]
}


export default homeConfig