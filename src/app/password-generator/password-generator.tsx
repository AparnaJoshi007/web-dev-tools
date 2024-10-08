'use client';
import { ContentBody, ContentHeader, ContentWrapper } from "@/components/contentWrapper/ContentWrapper";
import React, {useEffect, useState} from "react";
import { PageWrapper } from "@/components/pageWrapper/PageWrapper";
import {
  Divider,
  Title,
  Button,
  Stack,
  Text,
  Switch,
  Input,
  CopyButton,
  ActionIcon, NumberInput
} from "@mantine/core";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(12);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(true);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars]);

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789'; // Numbers
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'; // Special characters
    let characterSet = chars;

    if (includeNumbers) {
      characterSet += numbers;
    }
    if (includeSpecialChars) {
      characterSet += specialChars;
    }

    // Generate random password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Password Generator
          </Title>
          <Divider label={'Generate a Random Password'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{ width: '100%' }} gap={24}>
            <NumberInput
              label="Password Length"
              value={length}
              onChange={(val) => {
                setLength(Number(val))
                generatePassword();
              }}
              min={1}
              max={128}
            />
            <Switch
              label={<Text c={'blue'}>Include Numbers</Text>}
              checked={includeNumbers}
              onChange={(e) => {
                setIncludeNumbers(e.currentTarget.checked)
                generatePassword();
              }}
            />
            <Switch
              label={<Text c={'blue'}>Include Special Characters</Text>}
              checked={includeSpecialChars}
              onChange={(e) => {
                setIncludeSpecialChars(e.currentTarget.checked)
                generatePassword();
              }}
            />
            <Button onClick={generatePassword}>
              Generate Password
            </Button>
            {generatedPassword && (
              <Input
                placeholder={'Generated Password'}
                value={generatedPassword}
                readOnly={true}
                rightSection={
                  <CopyButton value={generatedPassword}>
                    {({ copied, copy }) => (
                      <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                        {copied ? (
                          <MdCheck />
                        ) : (
                          <MdOutlineContentCopy />
                        )}
                      </ActionIcon>
                    )}
                  </CopyButton>
                }
                rightSectionPointerEvents="all"
              />
            )}
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
