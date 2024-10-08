import {JSONToXmlConverter} from "@/app/json-to-xml/json-to-xml";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'JSON to XML converter',
  description: 'Convert JSON to XML',
  keywords: 'json, xml, converter'
}

const JSONToXMLPage: React.FC = () => {
  return (
    <JSONToXmlConverter />
  )
}

export default JSONToXMLPage;
