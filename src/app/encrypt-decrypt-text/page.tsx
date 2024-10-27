import {Metadata} from "next";
import {EncryptDecryptText} from "@/app/encrypt-decrypt-text/encrypt-decrypt-text";

export const metadata: Metadata = {
  title: 'Encrypt and decrypt text',
  description: 'Encrypt and decrypt text using various algorithms such as AES, DES, and more',
  keywords: 'encrypt, decrypt, text, string, AES, DES, RSA'
}

const EncryptDecryptTextPage = () => {
  return (
    <EncryptDecryptText />
  )
}

export default EncryptDecryptTextPage;
