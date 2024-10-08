'use client';
import { ContentBody, ContentHeader, ContentWrapper } from "@/components/contentWrapper/ContentWrapper";
import React, { useState } from "react";
import { PageWrapper } from "@/components/pageWrapper/PageWrapper";
import { Divider, Title, TextInput, Text, Stack, Button, Group, ColorInput, NativeSelect } from "@mantine/core";
import { QRCodeCanvas } from "qrcode.react";

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [fgColor, setFgColor] = useState<string>('#000000');
  const [errorLevel, setErrorLevel] = useState<ErrorCorrectionLevel>('L');

  const handleDownloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png");

      // Create an anchor element and trigger a download
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            QR Code Generator
          </Title>
          <Divider label={'Generate a QR code with customizable options'} labelPosition={'center'} />
        </ContentHeader>
        <ContentBody>
          <Stack style={{ width: '100%' }} gap={24}>
            <TextInput
              label={<Text c="grape">Input Text</Text>}
              placeholder="Enter text for QR code"
              value={inputText}
              onChange={(e) => setInputText(e.currentTarget.value)}
            />

            <ColorInput
              label={<Text c="grape">Background Color</Text>}
              value={bgColor}
              onChange={setBgColor}
            />

            <ColorInput
              label={<Text c="grape">Foreground Color</Text>}
              value={fgColor}
              onChange={setFgColor}
            />

            <NativeSelect
              label={<Text c="grape">Error Correction Level</Text>}
              value={errorLevel}
              onChange={(e) => setErrorLevel(e.target.value as ErrorCorrectionLevel)}
              data={[
                { value: 'L', label: 'L - 7% error recovery' },
                { value: 'M', label: 'M - 15% error recovery' },
                { value: 'Q', label: 'Q - 25% error recovery' },
                { value: 'H', label: 'H - 30% error recovery' },
              ]}
            />

            <div style={{ textAlign: 'center' }}>
              {inputText && (
                <QRCodeCanvas
                  id="qr-code"
                  value={inputText}
                  size={256}
                  bgColor={bgColor}
                  fgColor={fgColor}
                  level={errorLevel}
                  marginSize={5}
                />
              )}
            </div>

            <Group justify={'center'}>
              <Button onClick={handleDownloadQRCode} disabled={!inputText}>
                {"Download QR Code"}
              </Button>
            </Group>
          </Stack>
        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  );
};

