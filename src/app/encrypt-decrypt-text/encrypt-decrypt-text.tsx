'use client';
import {Divider, Title} from "@mantine/core";
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Group, Stack, Textarea, TextInput, Button, Select} from "@mantine/core";
import React, {useState} from "react";
import CryptoJS from 'crypto-js';

const algorithms = [
  { value: 'AES', label: 'AES' },
  { value: 'TripleDES', label: 'Triple DES' },
  { value: 'RC4', label: 'RC4' },
  { value: 'Rabbit', label: 'Rabbit' },
];

export const EncryptDecryptText = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [algorithm, setAlgorithm] = useState<string | null>('AES');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = () => {
    let encrypted;
    switch (algorithm) {
      case 'AES':
        encrypted = CryptoJS.AES.encrypt(text, key).toString();
        break;
      case 'TripleDES':
        encrypted = CryptoJS.TripleDES.encrypt(text, key).toString();
        break;
      case 'RC4':
        encrypted = CryptoJS.RC4.encrypt(text, key).toString();
        break;
      case 'Rabbit':
        encrypted = CryptoJS.Rabbit.encrypt(text, key).toString();
        break;
      default:
        return;
    }
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    let decrypted;
    switch (algorithm) {
      case 'AES':
        decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        break;
      case 'TripleDES':
        decrypted = CryptoJS.TripleDES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        break;
      case 'RC4':
        decrypted = CryptoJS.RC4.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        break;
      case 'Rabbit':
        decrypted = CryptoJS.Rabbit.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        break;
      default:
        return;
    }
    setDecryptedText(decrypted);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Encrypt and Decrypt Text
          </Title>
          <Divider label={'Encrypt Decrypt text using various algorithms'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{ width: '100%' }} gap={24}>
            <Textarea
              label="Text"
              placeholder="Enter text to encrypt or decrypt"
              value={text}
              onChange={(event) => {
                setText(event.currentTarget.value)
                setEncryptedText('')
                setDecryptedText('')
              }}
            />
            <TextInput
              label="Secret Key"
              placeholder="Enter secret key"
              value={key}
              onChange={(event) => {
                setKey(event.currentTarget.value)
                setEncryptedText('')
                setDecryptedText('')
              }}
            />
            <Select
              label="Algorithm"
              placeholder="Select an algorithm"
              data={algorithms}
              value={algorithm}
              onChange={setAlgorithm}
            />
            <Group>
              <Button onClick={handleEncrypt}>Encrypt</Button>
              <Button onClick={handleDecrypt}>Decrypt</Button>
            </Group>
            <Textarea
              label="Encrypted Text"
              placeholder="Encrypted text will appear here"
              value={encryptedText}
              readOnly
              minRows={4}
            />
            <Textarea
              label="Decrypted Text"
              placeholder="Decrypted text will appear here"
              value={decryptedText}
              readOnly
              minRows={4}
            />
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}
