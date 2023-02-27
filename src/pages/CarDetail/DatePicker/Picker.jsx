import * as React from 'react';
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


export const Picker = ({start, setStart, end, setEnd}) => {
  
  const handleChangeStart = (newValue) => {
    setStart(newValue);
    console.log(start)
  };
  const handleChangeEnd = (newValue) => {
    setEnd(newValue);
    console.log(end)
  };
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
        label="Start Book"
        inputFormat="YYYY/MM/DD"
        value={start}
        onChange={handleChangeStart}
        renderInput={(params) => <TextField {...params} />} />

        <DesktopDatePicker
        label="End Book"
        inputFormat="YYYY/MM/DD"
        value={end}
        onChange={handleChangeEnd}
        renderInput={(params) => <TextField {...params} />} />
      </Stack>
    </LocalizationProvider>
  );
}

export default Picker;