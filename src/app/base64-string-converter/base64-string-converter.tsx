'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Textarea, Title, Text, Stack, NativeSelect, CopyButton, ActionIcon, Group} from "@mantine/core";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

type SelectedValue = 'STRING_TO_BASE64' | 'BASE64_TO_STRING';

export const Base64StringConverter = () => {
  const [selectedValue, setSelectedValue] = useState<SelectedValue>('STRING_TO_BASE64');
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const getLabelForInput = () => {
    if (selectedValue === 'STRING_TO_BASE64') {
      return 'Enter string to encode';
    } else {
      return 'Enter string to decode';
    }
  }

  const getLabelForOutput = () => {
    if (selectedValue === 'STRING_TO_BASE64') {
      return 'Base64 encoded string';
    } else {
      return 'Decoded string';
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setInputValue(inputValue);

    if(selectedValue === 'BASE64_TO_STRING') {
      try {
        const result = atob(inputValue);
        setOutputValue(result);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Invalid base64 string');
        return;
      }
    } else {
      setOutputValue(btoa(inputValue));
    }
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Base64 to string encoder/decoder
          </Title>
          <Divider label={'Encode and Decode strings into base64 format'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <NativeSelect
              label={<Text c="grape">Select Encode/Decode operation</Text>}
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.currentTarget.value as SelectedValue)
                setInputValue('')
              }}
              data={[
                { label: 'Encode to base64', value: 'STRING_TO_BASE64' },
                { label: 'Decode to string', value: 'BASE64_TO_STRING' }
              ]}
            />
            <Textarea
              minRows={8}
              autosize
              label={<Text c="grape">{getLabelForInput()}</Text>}
              placeholder="Your string here"
              onChange={handleChange}
              value={inputValue}
              error={error}
            />

            <div>
              <Group justify={'space-between'}>
                <Text c="grape">{getLabelForOutput()}</Text>
                <CopyButton value={outputValue}>
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
                placeholder="Computed string here"
                value={outputValue}
                readOnly={true}
              />
            </div>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}
