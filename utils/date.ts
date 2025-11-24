export const formatPeriod = (
  startDate: string,
  endDate: string | null | undefined,
  language: "it" | "en"
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const startStr = start.toLocaleDateString(language === "it" ? "it-IT" : "en-US", {
    month: "short",
    year: "numeric",
  });

  const endStr = endDate
    ? new Date(endDate).toLocaleDateString(language === "it" ? "it-IT" : "en-US", {
        month: "short",
        year: "numeric",
      })
    : language === "it"
    ? "Oggi"
    : "Present";

  // Calculate duration
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Add 1 month to include the current month in the count
  months++;
  if (months === 12) {
      years++;
      months = 0;
  }

  let duration = "";
  if (years > 0) {
    duration += `${years} ${
      language === "it" ? (years === 1 ? "anno" : "anni") : years === 1 ? "year" : "years"
    }`;
  }

  if (months > 0) {
    if (duration) duration += " ";
    duration += `${months} ${
      language === "it" ? (months === 1 ? "mese" : "mesi") : months === 1 ? "month" : "months"
    }`;
  }

  // Capitalize first letter of months (for Italian mostly, as English is auto-capitalized)
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return `${capitalize(startStr)} - ${capitalize(endStr)} (${duration})`;
};
