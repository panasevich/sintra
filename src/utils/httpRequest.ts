import { UrlType } from "./types";

export default function fetchData(url: UrlType["type"]) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => ({ data }))
    .catch((ex) => {
      return { ex };
    });
}
