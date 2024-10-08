import {FileToBase64Converter} from "@/app/file-to-base64-converter/file-to-base64";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'File to Base64 converter',
  description: 'Encode file to base64 string',
  keywords: 'file, base64, encoder, convert'
}

const FileToBase64ConverterPage = () => {
  return (
    <FileToBase64Converter />
  )
}

export default FileToBase64ConverterPage;
