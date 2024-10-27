import type {Navigation as NavigationType} from "@/types/navigation";
import {CiCalendarDate, CiMobile3, CiTextAlignLeft} from "react-icons/ci";
import {VscFileBinary} from "react-icons/vsc";
import {IoMdColorPalette} from "react-icons/io";
import {PiBracketsAngleBold, PiBracketsCurly} from "react-icons/pi";
import {TbHexagon3D, TbPasswordFingerprint} from "react-icons/tb";
import {BsQrCodeScan} from "react-icons/bs";

export const Navigation: NavigationType[] = [
  {
    group: 'Generic Converters',
    items: [
      {
        label: 'Date-time Converter',
        slug: '/date-time-converter',
        description: 'Convert date-time between different formats',
        icon: CiCalendarDate
      },
      {
        label: 'Base64 string encoder/decoder',
        slug: '/base64-string-encoder-decoder',
        description: 'Encode or decode base64 string',
        icon: VscFileBinary
      },
      {
        label: 'Base64 to File converter',
        slug: '/base64-to-file-converter',
        description: 'Convert base64 string to file',
        icon: VscFileBinary
      },
      {
        label: 'File to Base64 converter',
        slug: '/file-to-base64-converter',
        description: 'Convert file to base64 string',
        icon: VscFileBinary
      },
      {
        label: 'Color converter',
        slug: '/color-format-converter',
        description: 'Convert color between different formats',
        icon: IoMdColorPalette
      }
    ]
  },
  {
    group: 'Generators',
    items: [
      {
        label: 'QR Code Generator',
        slug: '/qr-code-generator',
        description: 'Generate QR code with customizable options',
        icon: BsQrCodeScan
      },
      {
        label: 'UUID Generator',
        slug: '/uuid-generator',
        description: 'Generate UUID with v1, v3, v4, v5 and v7 versions',
        icon: TbHexagon3D
      },
      {
        label: 'Password Generator',
        slug: '/password-generator',
        description: 'Generate random password with customizable options',
        icon: TbPasswordFingerprint
      }
    ]
  },
  {
    group: 'File Converters',
    items: [
      {
        label: 'XML to JSON',
        slug: '/xml-to-json',
        description: 'Convert XML to JSON',
        icon: CiTextAlignLeft
      },
      {
        label: 'YAML to JSON',
        slug: '/yaml-to-json',
        description: 'Convert YAML to JSON',
        icon: CiTextAlignLeft
      },
      {
        label: 'JSON to XML',
        slug: '/json-to-xml',
        description: 'Convert JSON to XML',
        icon: PiBracketsCurly
      },
      {
        label: 'JSON to YAML',
        slug: '/json-to-yaml',
        description: 'Convert JSON to YAML',
        icon: PiBracketsCurly
      },
      {
        label: 'Markdown to HTML',
        slug: '/markdown-to-html',
        description: 'Convert markdown to HTML',
        icon: PiBracketsAngleBold
      }
    ]
  }, {
    group: 'Cryptography Tools',
    items: [
      {
        label: 'Encrypt/Decrypt Text',
        slug: '/encrypt-decrypt-text',
        description: 'Encrypt and decrypt text using various algorithms',
        icon: TbPasswordFingerprint
      }
    ]
  }
]
