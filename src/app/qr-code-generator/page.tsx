import {QRCodeGenerator} from "@/app/qr-code-generator/qr-code-generator";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'QR code generator',
  description: 'Generate QR code from text',
  keywords: 'qr, code, generator, text, square, color, link, low, medium, quartile, high, transparent'
}

const QRCodeGeneratorPage: React.FC = () => {
  return (
    <QRCodeGenerator />
  )
}

export default QRCodeGeneratorPage;
