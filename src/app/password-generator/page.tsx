import {PasswordGenerator} from "@/app/password-generator/password-generator";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Password generator',
  description: 'Generate random password of desired length',
  keywords: 'password, generator, random, length, strength, time, entropy, hash, hashing, algorithm, algorithms, md5, sha1, sha256, sha512, bcrypt, scrypt, argon2, argon2id, argon2i, argon2d'
}

const PasswordGeneratorPage: React.FC = () => {
  return (
    <PasswordGenerator />
  )
}

export default PasswordGeneratorPage;
