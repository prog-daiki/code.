import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合し、Tailwindの競合を解決する関数
 * @param inputs 結合するクラス名の配列
 * @returns 結合され、最適化されたクラス名の文字列
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
