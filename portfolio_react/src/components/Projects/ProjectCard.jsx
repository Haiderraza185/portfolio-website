import React from 'react'
import style from "./ProjectCard.module.css"; 

const ProjectCard = ({project : {title, imageSrc ,description, skills,demo,source}}) => {
  return (
    <div className={style.container}>
        <img src={imageSrc} alt={`image of ${title}`} className={style.image}/>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <ul className={style.skills}>
            {skills.map((skill,id) =>{ 
             return (
             <li key={id} className={style.skill}>{skill} </li>
             )
            })}
        </ul>
        <div className={style.links}>
            <a href={demo} target='_main' className={style.link}>Demo</a>
            <a href={source} target='_main' className={style.link}>Source</a>
        </div>
    </div>
  )
}

export default ProjectCard;