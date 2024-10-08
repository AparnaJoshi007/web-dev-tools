import { ColorFormatConverter } from "@/app/color-converter/color-converter";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Color format converter',
  description: 'Convert color to different formats such as RGB, HSL, and CMYK',
  keywords: 'color, converter, hex, rgb, hsl, cmyk'
}

const ColorConverterPage = () => {
  return (
    <ColorFormatConverter />
  )
}

export default ColorConverterPage;
