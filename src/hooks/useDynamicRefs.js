import { createRef, useMemo } from "react";

export default function useDynamicRefs(array) {
  const getRefs = useMemo(() => {
    const refs = [];
    array.forEach(() => refs.push(createRef()));
    return refs;
  });

  const refs = getRefs;
  return refs;
}
