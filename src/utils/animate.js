export function showElement(ref) {
  if (ref.current) ref.current.classList.add("fade-in");
}

export function showGroupElements(ref, items) {
  if (ref.current)
    ref.current
      .querySelectorAll(items)
      .forEach((item) => item.classList.add("fade-in"));
}
