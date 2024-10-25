'use client';
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import React, {useState} from "react";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import {Divider, Title, ColorPicker, Text, Stack, TextInput, CopyButton, ActionIcon} from "@mantine/core";
import Color from 'color';
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";

export const ColorFormatConverter = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  const color = Color(selectedColor);

  const getCopyButton = (value: string) => (
    <CopyButton value={value}>
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
  )

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Color Format Converter
          </Title>
          <Divider label={'Pick a color to convert'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{width: '100%'}} gap={24}>
            <ColorPicker
              value={selectedColor}
              onChange={setSelectedColor}
              format="hex"
              fullWidth
            />
            <TextInput
              label={<Text c="grape">HEX</Text>}
              value={selectedColor}
              rightSection={getCopyButton(selectedColor)}
              readOnly
            />
            <TextInput
              label={<Text c="grape">RGB</Text>}
              value={color.rgb().string()}
              rightSection={getCopyButton(color.rgb().string())}
              readOnly
            />
            <TextInput
              label={<Text c="grape">HSL</Text>}
              value={color.hsl().string()}
              rightSection={getCopyButton(color.hsl().string())}
              readOnly
            />
            <TextInput
              label={<Text c="grape">CMYK</Text>}
              value={color.cmyk().string()}
              rightSection={getCopyButton(color.cmyk().string())}
              readOnly
            />
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};
