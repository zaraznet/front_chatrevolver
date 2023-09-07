import { isBrowser } from "@yoldi/utils/helpers";

export function expose(t: any, key: string) {
  if (isBrowser()) {
    (window as any)[key] = t;
  }
}
