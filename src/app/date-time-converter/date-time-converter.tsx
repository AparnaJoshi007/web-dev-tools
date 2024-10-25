'use client';
import {ActionIcon, CopyButton, Divider, Group, Input, NativeSelect, Title, Text} from "@mantine/core";
import {PageWrapper} from "@/components/pageWrapper/PageWrapper";
import React, {useMemo, useEffect} from "react";
import {ContentBody, ContentHeader, ContentWrapper} from "@/components/contentWrapper/ContentWrapper";
import {MdCheck, MdOutlineContentCopy} from "react-icons/md";
import {DateFormat} from "@/types/date-time";
import dayjs from "dayjs";
import {
  isISO8601DateString,
  isISO9075DateString,
  isMongoObjectId,
  isRFC3339DateString,
  isRFC7231DateString,
  isTimestamp,
  isUnixTimestamp,
  isUtcDateString
} from "@/app/date-time/validator";

const DateFormats: DateFormat[] = [{
  name: 'ISO 8601',
  value: 'ISO_8601',
  convertToDate: (iso8601String) => dayjs(iso8601String).toDate(),
  convertToString: (date) => dayjs(date).toISOString(),
  ValidateFormat: (dateString) => isISO8601DateString(dateString)
}, {
  name: 'ISO 9075',
  value: 'ISO_9075',
  convertToDate: (iso9075String) => dayjs(iso9075String).toDate(),
  convertToString: (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
  ValidateFormat: (dateString) => isISO9075DateString(dateString)
}, {
  name: 'UTC Format',
  value: 'UTC',
  convertToDate: (utcString) => dayjs(utcString).toDate(),
  convertToString: (date) => new Date(date).toUTCString(),
  ValidateFormat: (dateString) => isUtcDateString(dateString)
}, {
  name: 'RFC 3339',
  value: 'RFC_3339',
  convertToDate: (rfc3339String) => dayjs(rfc3339String).toDate(),
  convertToString: (date) => dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ'),
  ValidateFormat: (dateString) => isRFC3339DateString(dateString)
}, {
  name: 'RFC 7231',
  value: 'RFC_7231',
  convertToDate: (rfc7231String) => dayjs(rfc7231String).toDate(),
  convertToString: (date) => dayjs(date).format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
  ValidateFormat: (dateString) => isRFC7231DateString(dateString)
}, {
  name: 'Unix timestamp',
  value: 'UNIX_TIMESTAMP',
  convertToDate: (unixTimestamp) => dayjs.unix(parseInt(unixTimestamp)).toDate(),
  convertToString: (date) => dayjs(date).unix().toString(),
  ValidateFormat: (dateString) => isUnixTimestamp(dateString)
}, {
  name: 'Timestamp',
  value: 'TIMESTAMP',
  convertToDate: (timestamp) => dayjs(parseInt(timestamp)).toDate(),
  convertToString: (date) => dayjs(date).valueOf().toString(),
  ValidateFormat: (dateString) => isTimestamp(dateString)
}, {
  name: 'Mongo ObjectID',
  value: 'MONGO_OBJECT_ID',
  convertToDate: (mongoObjectId) => new Date(parseInt(mongoObjectId.substring(0, 8), 16) * 1000),
  convertToString: (date) => `${Math.floor(date.getTime() / 1000).toString(16)}0000000000000000`,
  ValidateFormat: (dateString) => isMongoObjectId(dateString)
}]

const renderDateTime = (label: string, date: string) => (
  <Input.Wrapper label={<Text c="grape">{label}</Text>}>
    <Input
      placeholder={'Date...'}
      value={date}
      readOnly={true}
      rightSection={
        <CopyButton value={date}>
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
  </Input.Wrapper>
)

export const DateTimeConverter = () => {
  const errorString = 'Please enter correct date for the selected date format';

  const [dateString, setDateString] = React.useState<string>('');
  const [selectedFormat, setSelectedFormat] = React.useState<DateFormat>(DateFormats[0]);
  const [error, setError] = React.useState<string | null>(null);
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [dateString, error, selectedFormat]);

  const normalizedDate = useMemo(() => {
    if(!dateString) {
      return currentDate
    }

    const { convertToDate } = selectedFormat;

    try {
      return convertToDate(dateString);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      return undefined;
    }
  }, [currentDate, dateString, selectedFormat])

  const handleDateChange = (value: string) => {
    setDateString(value);

    if (!selectedFormat.ValidateFormat(value)) {
      setError(errorString);
    } else {
      setError(null);
    }
  }

  const handleFormatChange = (value: string) => {
    const newFormat = DateFormats.find((format) => format.value === value) || DateFormats[0];
    setSelectedFormat(newFormat);

    if (!newFormat.ValidateFormat(dateString)) {
      setError(errorString);
    } else {
      setError(null);
    }
  };

  const formatDateUsingFormatter = (formatter: (date: Date) => string, date?: Date) => {
    if (!date || !dayjs(date).isValid()) {
      return '';
    }

    if (dateString && !selectedFormat.ValidateFormat(dateString)) {
      return '';
    }

    return formatter(date)
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title order={2}>
            Date-time converter
          </Title>
          <Divider label={'Convert date and time into different formats'} labelPosition={'center'} />
        </ContentHeader>

        <ContentBody>
          <Group style={{width: '100%'}}>
            <Input
              style={{ flexGrow: 2}}
              placeholder="Date string"
              value={dateString}
              onChange={(e) =>handleDateChange(e.target.value)}
              error={error}
            />
            <NativeSelect
              style={{ flexGrow: 1}}
              value={selectedFormat.value}
              onChange={(e) => handleFormatChange(e.target.value)}
              data={DateFormats.map((format) => ({ label: format.name, value: format.value }))}
            />
          </Group>
          <Divider my="lg" style={{ width: '100%' }} />

          {
            DateFormats.map((format, index) => {
              return (
                <Group key={index} grow style={{width: '100%'}}>
                  {
                    renderDateTime(format.name, formatDateUsingFormatter(format.convertToString, normalizedDate))
                  }
                </Group>
              )
            })
          }

        </ContentBody>
      </ContentWrapper>
    </PageWrapper>
  )
}
