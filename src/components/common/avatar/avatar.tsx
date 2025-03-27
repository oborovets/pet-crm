import { Avatar as MUIAvatar } from '@mui/material';

type Props = {
  alt?: string;
  src?: string;
};

export default function Avatar({ alt, src }: Props) {
  return <MUIAvatar alt={alt ?? 'avatar'} src={src} />;
}
