import { Children } from "react";

// TabButton
export default function TabButton({children, onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
