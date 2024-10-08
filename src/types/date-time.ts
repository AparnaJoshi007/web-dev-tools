export type DateFormat = {
  name: string;
  value: string;
  convertToString: (date: Date) => string
  convertToDate: (value: string) => Date
  ValidateFormat: (dateString: string) => boolean
}
