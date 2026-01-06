import { Locale } from "@/types/locale";
import itTranslations from "../data/it.json";
import enTranslations from "../data/en.json";

// Helper function to get value from object by dot notation path
const getTranslation = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) || path;
};

const pathExists = (obj: any, path: string) => {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (
      current === undefined ||
      current === null ||
      typeof current !== "object"
    )
      return false;
    current = current[part];
  }
  return current !== undefined;
};

// Recursive function to translate object
export const translateData = (data: any, translations: any): any => {
  if (typeof data === "string") {
    // Try to translate the string if it matches a key path
    const translation = getTranslation(translations, data);
    // If translation is same as key, it might not be a key or missing translation.
    // However, some fields might be URLs or dates which are strings but not keys.
    // Our keys are fairly specific (e.g. "header.", "experience.").
    // Let's check if the translation exists and is different from the key, OR if the key follows our pattern.
    // A safer check: does the key exist in translations?
    const exists = pathExists(translations, data);
    return exists ? translation : data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => translateData(item, translations));
  }

  if (typeof data === "object" && data !== null) {
    const result: any = {};
    for (const key in data) {
      result[key] = translateData(data[key], translations);
    }
    return result;
  }

  return data;
};

export const getLocaleCode = (language: Locale): string => {
  return language === "it" ? "it-IT" : "en-US";
};

export const getTranslations = (language: Locale): any => {
  return language === "it" ? itTranslations : enTranslations;
};

export const DEFAULT_LANGUAGE: Locale = "en";