/**
 * Formatting and normalization utilities for BIOJÄSI ®
 */

export function formatMxn(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDateMx(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Enforces "Mayúscula Afectiva" in 2nd person singular pronouns and possessives
 */
export function enforceMayusculaAfectiva(text: string): string {
  return text
    .replace(/\btu\b/g, 'Tu')
    .replace(/\btus\b/g, 'Tus')
    .replace(/\bti\b/g, 'Ti')
    .replace(/\btú\b/g, 'Tú');
}
