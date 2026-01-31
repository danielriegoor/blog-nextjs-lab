import {
  format,
  formatDistanceToNow as dateFnsformatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";
// import { cacheLife, cacheTag } from "next/cache";

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH:mm:ss", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsformatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatHour(timeStamp: number): string {
  const date = new Date(timeStamp);

  return format(date, "HH:mm:ss", {
    locale: ptBR,
  });
}

// export async function formatHourCached() {
//   "use cache";
//   cacheLife("seconds");
//   cacheTag("formatHourCached");
//   return formatHour(Date.now());
// }
