import classnames from "classnames";
import { twMerge } from "tailwind-merge";

// classnames is a CommonJS module in this project; use the default export.
const clsx = classnames;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
