import {  SvgIcon } from '@mui/material';
import { ReactComponent as Reactsvg } from '../skill/react.svg';

export const DynamicFaIcon = ({ name }) => {
  const IconComponent = 


  return <IconComponent />;
};

function ReactIcon({name}) {
  return (
    <SvgIcon {...props}>
      <Reactsvg />
    </SvgIcon>
  );
}

