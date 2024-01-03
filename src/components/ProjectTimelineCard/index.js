import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTitle, description, imageUrl, duration, projectUrl} = props
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image-details" />
      <div className="project-header">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
