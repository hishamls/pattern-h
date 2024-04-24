// import { useAccordionContext } from "./Accordion";

import { createContext, useContext } from "react";

const AccordItemContext = createContext();

export default function AccordionItem({ id, className, children }) {
  // const {
  //   openItemId,
  //   toggleItem,
  //   //  openItem,
  //   //   closeItem,
  // } = useAccordionContext();

  // const isOpen = openItemId === id;

  // function handelClick() {
  //   // if (isOpen) {
  //   //   closeItem();
  //   // } else {
  //   //   openItem(id);
  //   // }
  //   toggleItem(id);
  // }

  return (
    <AccordItemContext.Provider value={id}>
      <li className={className}>{children}</li>
      <br />
    </AccordItemContext.Provider>
  );
}

export function useAccordionItemContext() {
  const ctx = useContext(AccordItemContext);
  if (!ctx) {
    throw new Error("Accordion-related must be wrapped by <Accordion.Item>");
  }
  return ctx;
}
