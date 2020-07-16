import React, { useState } from "react";
import styles from "./ProjectPage.module.css";
import { projects } from "../Work/Work";
import slugify from "../../util/slugify";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ProjectPage(props) {
    const BASE_PATH_TO_IMAGES = `${process.env.PUBLIC_URL}/images/`;

    const initLightBoxState = {
        photoIndex: 0,
        isOpen: false,
    };

    const [lightBoxState, setLightBoxState] = useState(initLightBoxState);
    const slug = props.match.params.title;
    const project = projects.filter((p) => slugify(p.title) == slug)[0];
    const images = project.images;
    const photoIndex = lightBoxState.photoIndex;
    // const prevProjectIndex =
    //     project.index === 0 ? projects.length - 1 : project.index - 1;
    const nextProjectIndex = (project.index + 1) % projects.length;

    const lightBox = (
        <Lightbox
            mainSrc={BASE_PATH_TO_IMAGES + images[photoIndex]}
            nextSrc={
                BASE_PATH_TO_IMAGES + images[(photoIndex + 1) % images.length]
            }
            prevSrc={
                BASE_PATH_TO_IMAGES +
                images[(photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() =>
                setLightBoxState({ ...lightBoxState, isOpen: false })
            }
            onMovePrevRequest={() =>
                setLightBoxState({
                    ...lightBoxState,
                    photoIndex:
                        (photoIndex + images.length - 1) % images.length,
                })
            }
            onMoveNextRequest={() =>
                setLightBoxState({
                    ...lightBoxState,
                    photoIndex: (photoIndex + 1) % images.length,
                })
            }
        />
    );

    const technologies = project.technology
        ? project.technology.map((tech) => <li>{tech}</li>)
        : null;

    const languages = project.language
        ? project.language.map((lang) => <li>{lang}</li>)
        : null;

    return (
        <div className={styles.container}>
            <Helmet>
                <title>
                    {`${project.title} | By Zwe Htet (David) Electrical and Computer Engineer`}
                </title>
                <meta name="description" content={project.brief_desc} />
            </Helmet>
            <h3>{project.title}</h3>
            <img
                onClick={() =>
                    setLightBoxState({ ...lightBoxState, isOpen: true })
                }
                src={BASE_PATH_TO_IMAGES + images[0]}
                alt=""
            />
            <br />
            <div className={styles.detailsContainer}>
                <div>
                    <h6 className={styles.muted}>Description</h6>
                    <div>{project.description}</div>
                    <br />
                </div>
                <div>
                    {technologies && (
                        <h6 className={styles.muted}>Technologies</h6>
                    )}
                    {technologies}
                    <br />
                    {languages && <h6 className={styles.muted}>Language</h6>}
                    {languages}
                </div>
            </div>
            <hr style={{ backgroundColor: "#fff" }} />
            <div className={styles.linksContainer}>
                <NavLink to={`/work/`}>
                    <div className={styles.prevProject}>&lt; All Projects</div>
                </NavLink>
                <NavLink to={`/work/${projects[nextProjectIndex].slug}`}>
                    <div className={styles.nextProject}>Next Project &gt;</div>
                </NavLink>
            </div>
            {lightBoxState.isOpen && lightBox}
        </div>
    );
}
