'use client';
import { ContentBody, ContentHeader, ContentWrapper } from "@/components/contentWrapper/ContentWrapper";
import React, { useState } from "react";
import { PageWrapper } from "@/components/pageWrapper/PageWrapper";
import {
  Divider,
  Title,
  Button,
  Stack,
  Group,
  Text,
  Radio,
  Loader,
  TextInput,
  CopyButton,
  ActionIcon, Input
} from "@mantine/core";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";
import { v1, v3, v4, v5, v7 } from 'uuid';

export const UUIDGenerator = () => {
  const [uuidVersion, setUuidVersion] = useState<string>('4'); // Default UUID version
  const [namespace, setNamespace] = useState<string>(''); // Namespace for UUID v3 and v5
  const [name, setName] = useState<string>(''); // Name for UUID v3 and v5
  const [generatedUUID, setGeneratedUUID] = useState<string>(''); // Generated UUID
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Function to generate UUID based on version
  const generateUUID = () => {
    setLoading(true);
    let uuid: string;

    // Generate UUID based on selected version
    switch (uuidVersion) {
      case '1':
        uuid = v1();
        break;
      case '3':
        if (namespace && name) {
          uuid = v3(name, namespace);
        } else {
          uuid = 'Please provide both namespace and name';
        }
        break;
      case '4':
        uuid = v4();
        break;
      case '5':
        if (namespace && name) {
          uuid = v5(name, namespace);
        } else {
          uuid = 'Please provide both namespace and name';
        }
        break;
      case '7':
        uuid = v7();
        break;
      default:
        uuid = '';
    }
    setGeneratedUUID(uuid);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            UUID Generator
          </Title>
          <Divider label={'Generate UUID'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{ width: '100%' }} gap={24}>
            <Text>Select UUID Version:</Text>
            <Group>
              <Radio
                label="UUID v1"
                value="1"
                checked={uuidVersion === '1'}
                onChange={(e) => { setUuidVersion(e.currentTarget.value); setNamespace(''); setName(''); }}
              />
              <Radio
                label="UUID v3"
                value="3"
                checked={uuidVersion === '3'}
                onChange={(e) => { setUuidVersion(e.currentTarget.value); setNamespace(''); setName(''); }}
              />
              <Radio
                label="UUID v4"
                value="4"
                checked={uuidVersion === '4'}
                onChange={(e) => { setUuidVersion(e.currentTarget.value); setNamespace(''); setName(''); }}
              />
              <Radio
                label="UUID v5"
                value="5"
                checked={uuidVersion === '5'}
                onChange={(e) => { setUuidVersion(e.currentTarget.value); setNamespace(''); setName(''); }}
              />
              <Radio
                label="UUID v7"
                value="7"
                checked={uuidVersion === '7'}
                onChange={(e) => { setUuidVersion(e.currentTarget.value); setNamespace(''); setName(''); }}
              />
            </Group>

            {/* Namespace and Name Inputs for versions 3 and 5 */}
            {(uuidVersion === '3' || uuidVersion === '5') && (
              <>
                <TextInput
                  label="Namespace (Hexadecimal)"
                  placeholder="Enter namespace as a hex string"
                  value={namespace}
                  onChange={(e) => setNamespace(e.currentTarget.value)}
                />
                <TextInput
                  label="Name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </>
            )}

            {/* Generate and Refresh Button */}
            <Group>
              <Button onClick={generateUUID} disabled={loading || ((uuidVersion === '3' || uuidVersion === '5')  && !namespace && !name)}>
                {loading ? <Loader size="xs" /> : "Generate UUID"}
              </Button>
            </Group>

            {generatedUUID && (
              <Input
                placeholder={'Generated UUID...'}
                value={generatedUUID}
                readOnly={true}
                rightSection={
                  <CopyButton value={generatedUUID}>
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
