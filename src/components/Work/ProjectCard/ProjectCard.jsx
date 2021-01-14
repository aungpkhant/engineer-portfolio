import React from "react";
import styles from "./ProjectCard.module.css";
import { Tag } from "../../index";
import { NavLink, useLocation } from "react-router-dom";
import slugify from "../../../util/slugify";

const BASE_PATH_TO_IMAGES = `images/`;

export default function ProjectCard(props) {
    let location = useLocation();
    let slug = slugify(props.title);

    const tags = props.tags.map((tag) => <Tag text={tag} />);

    return (
        <NavLink to={`${location.pathname}${slug}`}>
            <div className={styles.cardContainer}>
                <div className={styles.mediaContainer}>
                    <img
                        src={`${BASE_PATH_TO_IMAGES}${props.imgLink}`}
                        alt=""
                    />
                    <div className={styles.tagsContainer}>{tags}</div>
                </div>
                <div className={styles.descContainer}>
                    <h3>{props.title}</h3>
                    {props.brief_desc}
                </div>
            </div>
        </NavLink>
    );
}
