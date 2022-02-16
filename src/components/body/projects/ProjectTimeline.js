import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Logo } from '../../../assets/img/skill/react.svg';
import { ReactIcon } from 'react-webtech-animated-icons';
import { ProjectData } from '../../../assets/data/ProjectData';
import ProjectCard from './ProjectCard';

function ProjectTimeline() {
  let linearColor =
    'linear-gradient( to bottom, #331992, #3326a2, #3233b3, #2e3fc4, #274bd5, #165cdf, #026ce8, #007cef, #008ee9, #009ad6, #00a3be, #30a8a8 )';

  return (
    <VerticalTimeline lineColor={linearColor} className="vertical-line">
      <VerticalTimelineElement
        id='project0'
        className="vertical-timeline-element--project"
        contentStyle={{
          background: 'rgb(33, 150, 243)',
          color: '#fff',
          borderRadius: 15,
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
        }}
        contentArrowStyle={{ borderRight: '8px solid  rgb(33, 150, 243)' }}
        iconStyle={{
          background: '',
          color: 'rgb(33, 150, 243)',
          paddingTop: 5,
          backgroundColor: 'white',
        }}
        icon={<ReactIcon firstColor="red" secondColor="#8ED6FB" duration={3} size={60}/>}
      >
        

      </VerticalTimelineElement>
      {ProjectData.map((project) => {
        return (
          <VerticalTimelineElement
            id={project.id}
            className="vertical-timeline-element--project"
            contentStyle={{
              background: 'white',
              color: '#fff',
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
              }}
            contentArrowStyle={{
              borderRight: '7px solid  transparent'
            }}
            // TODO fix the error on the arrow of the box box arrow I try to make but failed
            // contentArrowStyle={{
            //   backgroundColor: 'white',
            //   transformOrigin: '0 0',
            //   transform: 'rotate(-45deg)',
            //   // borderRight: '-10px solid ',
            //   boxShadow: '-3px -3px 3px -2px rgb(0 0 0 / 20%)',
            //   position: 'absolute',
            //   left: '-7px'
            // }}
            iconStyle={{
              background: '',
              color: 'rgb(33, 150, 243)',
              paddingTop: 5,
              backgroundColor: 'white',
            }}
            icon={
              <ReactIcon firstColor="red" secondColor="#8ED6FB" duration={3} />
            }
          >
            <ProjectCard project={project} />
          </VerticalTimelineElement>
        );
      })}


    </VerticalTimeline>
  );
}

export default ProjectTimeline;
