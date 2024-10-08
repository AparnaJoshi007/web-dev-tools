import {PasswordGenerator} from "@/app/password-generator/password-generator";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Password generator',
  description: 'Generate random password of desired length',
  keywords: 'password, generator, random'
}

const PasswordGeneratorPage: React.FC = () => {
  return (
    <PasswordGenerator />
  )
}

export default PasswordGeneratorPage;
