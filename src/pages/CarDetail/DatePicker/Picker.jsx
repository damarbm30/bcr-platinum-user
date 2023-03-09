import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment/moment";

export const Picker = ({ start, end, onChangeStart, onChangeEnd}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker label="Start Book (max 7 hari)" inputFormat="YYYY/MM/DD" value={start} onChange={onChangeStart} renderInput={(params) => <TextField {...params} />} />

        <DesktopDatePicker label="End Book" inputFormat="YYYY/MM/DD" value={end} onChange={onChangeEnd} renderInput={(params) => <TextField {...params} />} />
      </Stack>
    </LocalizationProvider>
  );
};

export default Picker;
