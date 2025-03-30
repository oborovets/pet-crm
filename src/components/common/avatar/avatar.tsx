import { Avatar as MUIAvatar, AvatarProps } from '@mui/material';

type Props = {
  alt?: string;
  src?: string;
  sx?: AvatarProps['sx'];
};

export default function Avatar({ alt, src, sx }: Props) {
  return <MUIAvatar alt={alt ?? 'avatar'} src={src} sx={sx} />;
}
