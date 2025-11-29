import itTranslations from "../data/it.json";
import enTranslations from "../data/en.json";

export const formatPeriod = (
  startDate: string | undefined,
  endDate: string | null | undefined,
  language: "it" | "en"
): string | undefined => {
  if (!startDate) return undefined;

  const translations = language === "it" ? itTranslations : enTranslations;

  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : startDate ? new Date() : null;

  const startStr = start?.toLocaleDateString(
    language === "it" ? "it-IT" : "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );

  const endStr = endDate
    ? new Date(endDate)?.toLocaleDateString(
        language === "it" ? "it-IT" : "en-US",
        {
          month: "short",
          year: "numeric",
        }
      )
    : translations.dates.present;

  // Calculate duration
  let years = end && start ? end.getFullYear() - start.getFullYear() : 0;
  let months = end && start ? end.getMonth() - start.getMonth() : 0;

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
      years === 1 ? translations.dates.year : translations.dates.years
    }`;
  }

  if (months > 0) {
    if (duration) duration += " ";
    duration += `${months} ${
      months === 1 ? translations.dates.month : translations.dates.months
    }`;
  }

  if (startStr && endStr)
    return `${capitalize(startStr)} - ${capitalize(endStr)} (${duration})`;
  if (endStr) return `${capitalize(endStr)}`;

  return undefined;
};

// Capitalize first letter of months (for Italian mostly, as English is auto-capitalized)
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
