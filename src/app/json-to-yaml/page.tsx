import {JSONToYamlConverter} from "@/app/json-to-yaml/json-to-yaml";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'JSON to YAML converter',
  description: 'Convert JSON to YAML',
  keywords: 'json, yaml, converter'
}

const JSONToYAMLPage: React.FC = () => {
  return (
    <JSONToYamlConverter />
  )
}

export default JSONToYAMLPage;
