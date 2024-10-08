'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState, useEffect} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, Textarea, Text, Stack, CopyButton, ActionIcon, Group} from "@mantine/core";
import * as convert from 'xml-js';
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const JSONToXmlConverter = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [xmlOutput, setXmlOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (jsonInput) {
      try {
        const jsonObject = JSON.parse(jsonInput);
        const result = convert.js2xml(jsonObject, { compact: true, spaces: 2 }); // Convert JSON to XML
        setXmlOutput(result);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Invalid JSON format');
        setXmlOutput('');
      }
    } else {
      setXmlOutput('');
      setError(null);
    }
  }, [jsonInput]);

  const handleJSONInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.currentTarget.value);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            JSON to XML Converter
          </Title>
          <Divider label={'Convert JSON to XML'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <>
              <Textarea
                minRows={10}
                autosize
                style={{ width: '100%', height: '300px', overflow: 'auto' }}
                label={<Text c="grape">JSON Input</Text>}
                placeholder="Enter your JSON here"
                value={jsonInput}
                onChange={handleJSONInputChange}
                error={error}
              />
              {error && <Text c="red" mt="sm">{error}</Text>}
            </>

            <div>
              <Group justify={'space-between'}>
                <Text c="grape">XML Output</Text>
                <CopyButton value={xmlOutput}>
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
              {xmlOutput ? (
                <Textarea
                  value={xmlOutput}
                  minRows={10}
                  autosize
                  style={{ width: '100%', height: '300px', overflow: 'auto' }}
                  readOnly
                />
              ) : (
                <Text c={'dimmed'}>No XML to display</Text>
              )}
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
