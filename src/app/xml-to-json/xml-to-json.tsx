'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState, useEffect} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, Textarea, Text, Stack, CopyButton, ActionIcon, Group} from "@mantine/core";
import * as convert from 'xml-js';
import { JSONTree } from 'react-json-tree';
import {jsonTree} from "@/themes/jsonTree";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const XMLToJsonConverter = () => {
  const [xmlInput, setXmlInput] = useState<string>(''); // Input XML string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jsonOutput, setJsonOutput] = useState<any>(null); // JSON output object
  const [error, setError] = useState<string | null>(null); // Error message if XML is invalid

  useEffect(() => {
    if (xmlInput) {
      try {
        const result = convert.xml2js(xmlInput, { compact: true });
        setJsonOutput(result);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Invalid XML format');
        setJsonOutput(null);
      }
    } else {
      setJsonOutput(null);
      setError(null);
    }
  }, [xmlInput]);

  const handleXMLInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setXmlInput(e.currentTarget.value);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            XML to JSON Converter
          </Title>
          <Divider label={'Convert XML to JSON'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <>
              <Textarea
                minRows={10}
                autosize
                style={{ width: '100%', height: '300px', overflow: 'auto' }}
                label={<Text c="grape">XML Input</Text>}
                placeholder="Enter your XML here"
                value={xmlInput}
                onChange={handleXMLInputChange}
                error={error} // Shows error message if XML is invalid
              />
              {error && <Text c="red" mt="sm">{error}</Text>}
            </>

            <div>
              <Group justify={'space-between'}>
                <Text c="grape">JSON Output</Text>
                <CopyButton value={JSON.stringify(jsonOutput)}>
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
              {jsonOutput ? (
                <div style={{ height: '300px', overflow: 'auto' }}>
                  <JSONTree
                    data={jsonOutput}
                    hideRoot={true}
                    theme={jsonTree}
                  />
                </div>
              ) : (
                <Text c={'dimmed'}>No JSON to display</Text>
              )}
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
