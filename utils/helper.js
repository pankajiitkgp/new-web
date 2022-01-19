export const getFormattedDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options).split(' ').slice(1).join(' ')
}
