// import classes from "./Accordion.module.css";
import { createContext, useState } from "react";
import { useContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
    // openItem,
    // closeItem,
  };
  // function openItem(id) {
  //   setOpenItemId(id);
  // }
  // function closeItem() {
  //   setOpenItemId(null);
  // }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion-related must be wrapped by <Accordion>");
  }
  return ctx;
}

Accordion.item = AccordionItem;
Accordion.title = AccordionTitle;
Accordion.content = AccordionContent;
