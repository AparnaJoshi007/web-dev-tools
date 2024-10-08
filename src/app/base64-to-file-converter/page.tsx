import {Base64ToFileConverter} from "@/app/base64-to-file-converter/base64-to-file-converter";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Base64 to file converter',
  description: 'Convert valid base64 string to file',
  keywords: 'base64, file, encoder, convert'
}

const Base64ToFileConverterPage = () => {
  return (
    <Base64ToFileConverter />
  )
}

export default Base64ToFileConverterPage;
