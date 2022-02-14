import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Logo } from '../../../assets/img/skill/react.svg';

function ProjectTimeline() {
  return (
    <VerticalTimeline lineColor="blue">
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022-02"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Logo />}
      >
        <h3 className="vertical-timeline-element-title">Test</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ProjectTimeline;
