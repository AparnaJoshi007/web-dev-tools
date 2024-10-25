import {DateTimeConverter} from "@/app/date-time-converter/date-time-converter";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Date and time converter',
  description: 'Convert date into different formats such as ISO, Unix, and more',
  keywords: 'Date, ISO, Unix, RFC, UTC'
}

const DateTimePage = () => {
  return (
    <DateTimeConverter />
  )
}

export default DateTimePage;
