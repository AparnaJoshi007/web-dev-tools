'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState, useEffect} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, Textarea, Text, Stack, CopyButton, ActionIcon, Group} from "@mantine/core";
import * as yaml from 'js-yaml';
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const JSONToYamlConverter = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [yamlOutput, setYamlOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (jsonInput) {
      try {
        const jsonObject = JSON.parse(jsonInput);
        const result = yaml.dump(jsonObject);
        setYamlOutput(result);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Invalid JSON format');
        setYamlOutput('');
      }
    } else {
      setYamlOutput('');
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
            JSON to YAML Converter
          </Title>
          <Divider label={'Convert JSON to YAML'} labelPosition={'center'} />
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
                <Text c="grape">YAML Output</Text>
                <CopyButton value={yamlOutput}>
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
              {yamlOutput ? (
                <Textarea
                  value={yamlOutput}
                  minRows={10}
                  autosize
                  style={{ width: '100%', height: '300px', overflow: 'auto' }}
                  readOnly
                />
              ) : (
                <Text c={'dimmed'}>No YAML to display</Text>
              )}
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
