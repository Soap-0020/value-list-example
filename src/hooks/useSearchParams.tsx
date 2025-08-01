"use client";

import {
  useSearchParams as nextUseSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";
import SearchParamValue from "../types/searchParamValue";

const useSearchParams = () => {
  const router = useRouter();
  const searchParams = nextUseSearchParams();
  const pathname = usePathname();

  const edit = (values: SearchParamValue[]) => {
    const params = new URLSearchParams(searchParams);

    for (const value of values) {
      params.set(value.key, value.value);
    }

    return `${pathname}?${params.toString()}`;
  };

  const update = (values: SearchParamValue[]) => {
    const newLink = edit(values);

    router.push(newLink, { scroll: false });
    return newLink;
  };

  return {
    values: new URLSearchParams(searchParams),
    update,
    edit,
  };
};

export default useSearchParams;
