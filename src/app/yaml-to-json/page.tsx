import {YAMLToJsonConverter} from "@/app/yaml-to-json/yaml-to-json";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'YAML to JSON converter',
  description: 'Convert YAML to JSON',
  keywords: 'json, yaml, converter'
}

const YAMLToJSONPage: React.FC = () => {
  return (
    <YAMLToJsonConverter />
  )
}

export default YAMLToJSONPage;
