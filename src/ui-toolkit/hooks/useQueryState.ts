import { useRouter } from "next/router";
import { useCallback } from "react";

export function useQueryState(key: string, defaultValue = "", replaceHistory = true) {
  let { query, pathname, replace, push } = useRouter();
  let value = query[key] ?? defaultValue;

  const setValue = useCallback(
    (val: string) => {
      const transitionOptions = {
        pathname,
        query: {
          ...query,
          [key]: val,
        },
      };
      const navigate = replaceHistory ? replace : push;
      navigate(transitionOptions);
    },
    [key, query, pathname, replace, replaceHistory, push]
  );

  return [value, setValue] as [string, (val: string) => void];
}
