import {DateTimeConverter} from "@/app/date-time-converter/date-time-converter";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Date and time converter',
  description: 'Convert date into different formats such as ISO, Unix, and more',
  keywords: 'date, time, converter, iso, unix, utc, timezone, year, month, day, minute, second'
}

const DateTimePage = () => {
  return (
    <DateTimeConverter />
  )
}

export default DateTimePage;
