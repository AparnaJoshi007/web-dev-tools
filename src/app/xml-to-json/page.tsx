import {XMLToJsonConverter} from "@/app/xml-to-json/xml-to-json";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'XML to JSON converter',
  description: 'Convert XML to JSON',
  keywords: 'json, xml, converter'
}

const XMLToJSONPage: React.FC = () => {
  return (
    <XMLToJsonConverter />
  )
}

export default XMLToJSONPage;
