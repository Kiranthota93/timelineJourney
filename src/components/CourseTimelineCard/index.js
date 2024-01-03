import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTitle, description, duration, tagsList} = props

  return (
    <div>
      <div className="course-header">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tagsList">
        {tagsList.map(eachOne => (
          <p key={eachOne.id} className="list-item">
            {eachOne.name}
          </p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
