'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState, useEffect} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, Textarea, Text, Stack, CopyButton, ActionIcon, Group} from "@mantine/core";
import {marked} from 'marked';
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const MarkdownToHtmlConverter = () => {
  const [markdownInput, setMarkdownInput] = useState<string>('');
  const [htmlOutput, setHtmlOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const result = marked(markdownInput);
      setHtmlOutput(result);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('Error converting Markdown to HTML');
      setHtmlOutput('');
    }
  }, [markdownInput]);

  const handleMarkdownInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(e.currentTarget.value);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Markdown to HTML Converter
          </Title>
          <Divider label={'Convert Markdown to HTML'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            {/* Markdown Input Section */}
            <>
              <Textarea
                minRows={10}
                autosize
                style={{ width: '100%', height: '300px', overflow: 'auto' }}
                label={<Text c="grape">Markdown Input</Text>}
                placeholder="Enter your Markdown here"
                value={markdownInput}
                onChange={handleMarkdownInputChange}
                error={error} // Display error if Markdown conversion fails
              />
              {error && <Text c="red" mt="sm">{error}</Text>}
            </>

            {/* HTML Output Section */}
            <div>
              <Group justify={'space-between'}>
                <Text c="grape">HTML Output</Text>
                <CopyButton value={htmlOutput}>
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
              {htmlOutput ? (
                <Textarea
                  value={htmlOutput}
                  minRows={10}
                  autosize
                  style={{ width: '100%', height: '300px', overflow: 'auto' }}
                  readOnly
                />
              ) : (
                <Text c={'dimmed'}>No HTML to display</Text>
              )}
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
