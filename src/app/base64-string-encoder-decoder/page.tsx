import {Base64StringEncoderDecoder} from "@/app/base64-string-encoder-decoder/base64-string-encoder-decoder";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Base64 to string encoder/decoder',
  description: 'Encode or decode base64 string',
  keywords: 'base64, string, encoder, decoder'
}

const Base64StringConverterPage: React.FC = () => {
  return (
    <Base64StringEncoderDecoder />
  );
}

export default Base64StringConverterPage;
