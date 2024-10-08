import isNil from 'lodash/isNil';

const ISO8601_REGEX
  = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
const ISO9075_REGEX
  = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,6})?(([+-])([0-9]{2}):([0-9]{2})|Z)?$/;

const RFC3339_REGEX
  = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,9})?(([+-])([0-9]{2}):([0-9]{2})|Z)$/;

const RFC7231_REGEX = /^[A-Za-z]{3},\s[0-9]{2}\s[A-Za-z]{3}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}\sGMT$/;

const UNIX_TIMESTAMP_REGEX = /^[0-9]{1,10}$/;

const TIMESTAMP_REGEX = /^[0-9]{1,13}$/;

const MONGO_OBJECTID_REGEX = /^[0-9a-fA-F]{24}$/;

const createRegexMatcher = (regex: RegExp) => {
  return (date?: string) => !isNil(date) && regex.test(<string>date);
}

const isISO8601DateString = createRegexMatcher(ISO8601_REGEX);
const isISO9075DateString = createRegexMatcher(ISO9075_REGEX);
const isRFC3339DateString = createRegexMatcher(RFC3339_REGEX);
const isRFC7231DateString = createRegexMatcher(RFC7231_REGEX);
const isUnixTimestamp = createRegexMatcher(UNIX_TIMESTAMP_REGEX);
const isTimestamp = createRegexMatcher(TIMESTAMP_REGEX);
const isMongoObjectId = createRegexMatcher(MONGO_OBJECTID_REGEX);
const isUtcDateString = (date?: string) => !isNil(date) && new Date(date).toUTCString() === date;

export {
  isISO8601DateString,
  isISO9075DateString,
  isRFC3339DateString,
  isRFC7231DateString,
  isUnixTimestamp,
  isTimestamp,
  isMongoObjectId,
  isUtcDateString
}
