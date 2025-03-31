'use client';

import { Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
  bgcolor?: string;
  borderRadius?: string;
};

const StyledBox = styled(MUIBox)<Props>((props) => {
  return {
    backgroundColor: props?.bgcolor,
    borderRadius: props.borderRadius ?? '12px',
  };
});

export default StyledBox;
