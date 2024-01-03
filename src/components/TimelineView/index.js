import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const timelineItems = timelineItemsList.map(item => {
    switch (item.categoryId) {
      case 'COURSE':
        return (
          <CourseTimelineCard
            key={item.id}
            courseTitle={item.courseTitle}
            description={item.description}
            duration={item.duration}
            tagsList={item.tagsList}
          />
        )
      case 'PROJECT':
        return (
          <ProjectTimelineCard
            key={item.id}
            projectTitle={item.projectTitle}
            description={item.description}
            imageUrl={item.imageUrl}
            duration={item.duration}
            projectUrl={item.projectUrl}
          />
        )
      default:
        return null
    }
  })
  const titleItems = timelineItemsList.map(eachOne => ({
    title: eachOne.title,
  }))

  return (
    <div className="timeline-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br />
        <span className="span-heading">CCBP 4.0</span>
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={titleItems}>
        {timelineItems}
      </Chrono>
    </div>
  )
}

export default TimelineView
