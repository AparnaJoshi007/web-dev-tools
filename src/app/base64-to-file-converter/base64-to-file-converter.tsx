'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Textarea, Title, Text, Stack, TextInput, Button, Group} from "@mantine/core";

export const Base64ToFileConverter = () => {
  const [fileName, setFileName] = useState<string>('');
  const [fileExtension, setFileExtension] = useState<string>('');
  const [base64String, setBase64String] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: `application/${fileExtension}` });
      const url = URL.createObjectURL(blob);
      setFileUrl(url);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('Invalid base64 string');
    }
  };

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `${fileName}.${fileExtension}`;
      link.click();
    }
  };

  const handlePreview = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  const handleBase64StringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBase64String(e.currentTarget.value);
    setFileUrl(null);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Base64 to File Converter
          </Title>
          <Divider label={'Convert base64 string to file'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <TextInput
              label={<Text c="grape">File Name</Text>}
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.currentTarget.value)}
            />
            <TextInput
              label={<Text c="grape">File Extension</Text>}
              placeholder="Enter file extension (e.g., txt, pdf)"
              value={fileExtension}
              onChange={(e) => setFileExtension(e.currentTarget.value)}
            />
            <Textarea
              minRows={8}
              autosize
              label={<Text c="grape">Base64 String</Text>}
              placeholder="Enter base64 string"
              value={base64String}
              onChange={handleBase64StringChange}
              error={error}
            />
            <Group>
              <Button onClick={handleConvert}>Convert</Button>
              <Button onClick={handlePreview} disabled={!fileUrl}>Preview</Button>
              <Button onClick={handleDownload} disabled={!fileUrl}>Download</Button>
            </Group>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
