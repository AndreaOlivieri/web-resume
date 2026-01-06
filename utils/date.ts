import { Locale } from "@/types/locale";
import { getLocaleCode, getTranslations } from "./i18n";

export const formatPeriod = (
  startDate: string | undefined,
  endDate: string | null | undefined,
  language: Locale
): string | undefined => {
  const translations = getTranslations(language);
  const localeCode = getLocaleCode(language);

  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : startDate ? new Date() : null;

  const startStr = start?.toLocaleDateString(localeCode, {
    month: "short",
    year: "numeric",
  });

  let endStr;
  if (endDate) {
    endStr = new Date(endDate).toLocaleDateString(localeCode, {
      month: "short",
      year: "numeric",
    });
  } else if (startDate) {
    endStr = translations.dates.present;
  }

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
