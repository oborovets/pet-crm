import { Box, Typography, Chip } from '../../common';

type Experience = {
  company: string;
  type: string;
  duration: string;
  backgroundColor?: string;
};

type Props = {
  experienceList?: Experience[];
};

const experiences: Experience[] = [
  {
    company: 'TechCorp',
    type: 'Full-Time',
    duration: '2 years',
    backgroundColor: '#3498db', // Синій
  },
  {
    company: 'DevSolutions',
    type: 'Contract',
    duration: '6 months',
    backgroundColor: '#e74c3c', // Червоний
  },
  {
    company: 'CodeWorks',
    type: 'Part-Time',
    duration: '1 year',
    backgroundColor: '#2ecc71', // Зелений
  },
  {
    company: 'InnovateSoft',
    type: 'Freelance',
    duration: '8 months',
    backgroundColor: '#f39c12', // Помаранчевий
  },
  {
    company: 'WebX',
    type: 'Internship',
    duration: '3 months',
    backgroundColor: '#9b59b6', // Фіолетовий
  },
];

console.log(experiences);

console.log(experiences);

export default function ExperienceCard({
  experienceList = experiences,
}: Props) {
  return (
    <Box bgcolor="white" p={2} borderRadius={6}>
      {experienceList?.map(({ company, type, duration, backgroundColor }) => (
        <Box
          key={`${company}_${duration}`}
          display="flex"
          justifyContent="space-between"
        >
          <Box py={1}>
            <Typography
              variant="body1"
              display="inline-block"
              sx={{ marginRight: '8px', width: '100px' }}
            >
              {company}
            </Typography>
            <Chip
              label={type}
              size="small"
              color="success"
              sx={{
                borderRadius: '8px',
                px: 0.5,
                backgroundColor,
                width: '90px',
              }}
            />
          </Box>
          <Typography variant="body2">{duration}</Typography>
        </Box>
      ))}
    </Box>
  );
}
