import React from "react";
import styles from "./Work.module.css";
import { ProjectCard } from "../index";
import slugify from "../../util/slugify";

export const projects = [
    {
        title: "First Project",
        brief_desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam.",
        description:
            "Everyone needs a cool portfolio and sometimes less is better. This is an experimental concept to sharpen my design skils",
        tags: ["React", "Ongoing", "Hackathon"],
        imgLink: "https://via.placeholder.com/600x400",
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/300",
        ],
        technology: ["Redux", "SolidWorks"],
        language: ["Python", "Java"],
    },
    {
        title: "Sec Project",
        brief_desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam.",
        description:
            "Everyone needs a cool portfolio and sometimes less is better. This is an experimental concept to sharpen my design skils",
        tags: ["React", "Ongoing", "Hackathon"],
        imgLink: "https://via.placeholder.com/600x400",
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/300",
        ],
        language: ["Python", "Java"],
    },
    {
        title: "Third Project",
        brief_desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam.",
        description:
            "Everyone needs a cool portfolio and sometimes less is better. This is an experimental concept to sharpen my design skils",
        tags: ["React", "Ongoing", "Hackathon"],
        imgLink: "https://via.placeholder.com/600x400",
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/300",
        ],
        technology: ["Redux", "SolidWorks"],
    },
];

projects.map((project, index) => {
    project.slug = slugify(project.title);
    project.index = index;
});

export default function Work() {
    const projectCards = projects.map((project) => (
        <ProjectCard {...project} />
    ));

    return (
        <div className={styles.workContainer}>
            <div className={styles.headerContainer}>
                <h4>Work</h4>
                {`${projects.length} Projects`}
            </div>
            <div>{projectCards}</div>
        </div>
    );
}
