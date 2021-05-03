export const parseDate = (date) => {
  const dt = new Date(date);

  return dt.toLocaleString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const capitalise = (word) => word[0].toUpperCase() + word.slice(1);
