import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Logo } from '../../../assets/img/skill/react.svg';
import { ReactIcon } from 'react-webtech-animated-icons';

function ProjectTimeline() {
  let linearColor =
    'linear-gradient( to bottom, #331992, #3326a2, #3233b3, #2e3fc4, #274bd5, #165cdf, #026ce8, #007cef, #008ee9, #009ad6, #00a3be, #30a8a8 )';

  return (
    <VerticalTimeline lineColor={linearColor}>
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        contentStyle={{
          background: 'rgb(33, 150, 243)',
          color: '#fff',
          borderRadius: 15,
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
        }}
        contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
        date="2022-02"
        iconStyle={{
          background: '',
          color: 'rgb(33, 150, 243)',
          paddingTop: 5,
          backgroundColor: 'white',
        }}
        icon={<ReactIcon firstColor="red" secondColor="#8ED6FB" duration={3} />}
      >
        <h3 className="vertical-timeline-element-title">Test</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022-02"
        iconStyle={{
          background: '',
          color: 'rgb(33, 150, 243)',
          paddingTop: 5,
          backgroundColor: 'white',
        }}
        icon={<ReactIcon firstColor="red" secondColor="#8ED6FB" duration={3} />}
      >
        <h3 className="vertical-timeline-element-title">Test</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--project"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022-02"
        iconStyle={{
          background: '',
          color: 'rgb(33, 150, 243)',
          paddingTop: 5,
          backgroundColor: 'white',
        }}
        icon={<ReactIcon firstColor="red" secondColor="#8ED6FB" duration={3} />}
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
