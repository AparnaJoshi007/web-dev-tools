'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Textarea, Title, Text, Stack, FileInput, Button, Group, CopyButton, ActionIcon} from "@mantine/core";
import { FaFileUpload } from 'react-icons/fa';
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const FileToBase64Converter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [base64String, setBase64String] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    setBase64String('');
    setError(null);
  };

  const handleConvert = () => {
    if (!file) {
      setError('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64String(result.split(',')[1]);
      setError(null);
    };
    reader.onerror = () => {
      setError('Error reading file');
    };
    reader.readAsDataURL(file);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            File to Base64 Converter
          </Title>
          <Divider label={'Convert file to base64 string'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <FileInput
              label={<Text c="grape"><span style={{ fontWeight: 700 }}>Choose a file</span> or drag it here.</Text>}
              placeholder="Choose a file"
              onChange={handleFileChange}
              rightSection={<FaFileUpload />}
              style={{
                border: '2px dotted #ccc',
                padding: '20px',
                textAlign: 'center'
              }}
              accept="*"
              multiple={false}
              clearable
              withAsterisk
              onDrop={(event) => {
                event.preventDefault();
                const droppedFile = event.dataTransfer.files[0];
                handleFileChange(droppedFile);
              }}
              onDragOver={(event) => event.preventDefault()}
            />
            <Button onClick={handleConvert}>Convert</Button>
            <div>
              <Group justify={'space-between'}>
                <Text c="grape">Base64 String</Text>
                <CopyButton value={base64String}>
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
              </Group>
              <Textarea
                minRows={8}
                autosize
                placeholder="Base64 output will appear here"
                value={base64String}
                readOnly={true}
                error={error}
                style={{ flexGrow: 1 }}
              />
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
