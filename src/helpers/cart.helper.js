import { monthsNames } from '@/helpers/date.helper';

export function formatDateWithLeadTime(leadTime) {
  const currentDateInSecs = Math.round(new Date().getTime() / 1000)
  return formatDate(new Date((currentDateInSecs + leadTime * 60) * 1000))
}

export function formatDate(date) {
  return {
    base: date,
    formatted: `${monthsNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
}
