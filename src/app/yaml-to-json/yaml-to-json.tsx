'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState, useEffect} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, Textarea, Text, Stack, CopyButton, ActionIcon, Group} from "@mantine/core";
import yaml from 'js-yaml';
import { JSONTree } from 'react-json-tree';
import {jsonTree} from "@/themes/jsonTree";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const YAMLToJsonConverter = () => {
  const [yamlInput, setYamlInput] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jsonOutput, setJsonOutput] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Automatically convert YAML to JSON as user types
  useEffect(() => {
    if (yamlInput) {
      try {
        const result = yaml.load(yamlInput);
        setJsonOutput(result);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Invalid YAML format');
        setJsonOutput(null);
      }
    } else {
      setJsonOutput(null);
      setError(null);
    }
  }, [yamlInput]);

  const handleYAMLInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setYamlInput(e.currentTarget.value);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            YAML to JSON Converter
          </Title>
          <Divider label={'Convert YAML to JSON'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <>
              <Textarea
                minRows={15}
                autosize
                style={{ height: '300px', overflow: 'auto' }}
                label={<Text c="grape">YAML Input</Text>}
                placeholder="Enter your YAML here"
                value={yamlInput}
                onChange={handleYAMLInputChange}
                error={error} // Shows error message if YAML is invalid
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
                <div style={{height: '300px', overflow: 'auto'}}>
                  <JSONTree
                    data={jsonOutput}
                    hideRoot={true}
                    theme={jsonTree}
                  />
                </div>
              ) : (
                <Text c="dimmed">No JSON to display</Text>
              )}
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
