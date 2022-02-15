import React from 'react';
import './ProjectCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, SvgIcon, Divider } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { ReactComponent as Reactsvg } from '../../../assets/img/skill/react.svg';
import { ReactComponent as JSsvg } from '../../../assets/img/skill/javascript.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

function ProjectCard({ project }) {
  // create mui icon by svg file
  function ReactIcon(props) {
    return (
      <SvgIcon {...props}>
        <Reactsvg />
      </SvgIcon>
    );
  }

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={project.github}
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        <Button
          size="small"
          color="primary"
          href={project.demo}
          startIcon={<PreviewIcon />}
        >
          Demo
        </Button>
      </CardActions>
      <CardActions>
        <Stack
          direction={'row'}
          spacing={{ xs: 0, md: 2 }}
          flexWrap={'wrap'}
          flexGrow="1"
        >
          {/* TODO add deleteIcon={<DoneIcon />} onDelete={handleDelete} icon={<FaceIcon />} */}

          {project.tags.map((tag) => {
            return <Chip variant="outlined" label={tag} />;
          })}
        </Stack>
      </CardActions>
    </Card>
  );
}
export default ProjectCard;
