import { Box, Typography, Stack } from '@mui/material'
import { format, isEqual, startOfDay, add } from 'date-fns';
import ChattingCard from '../Card/ChattingCard';


export default function ChatHistoryCard({ details }) {
  const formatDate = (date) => {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return "Today's Chats";
    } 
    else if (isEqual(today, add(date, { days: 1 }))) {
      return "Yesterday's Chats";
    } else {
      return format(date, 'do MMMM, yyyy');
    }
  }
  return (
    <Box >
        <Typography 
        fontWeight={700}
        md={2}
        >
          {formatDate(startOfDay(new Date(details.datetime)))}

        </Typography>
        <Stack
          spacing={{xs:2, md:3}}>

          {details.chats.map((item, index) => (
            <ChattingCard 
              details={item} 
              key={index} 
              readOnly={true}
            />
          ))}
        </Stack>
    </Box>
  )   
          }