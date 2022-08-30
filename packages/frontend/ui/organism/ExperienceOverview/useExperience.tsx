import { Experience } from "@ui-molecules/Experience/Experience";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export const Context = createContext(null);

function Provider({ children }: PropsWithChildren) {
  return <Context.Provider value={null}>{children}</Context.Provider>;
}

export function useExperience(experiences: Experience[]) {
  const [selected, setSelected] = useState<Experience>();

  function onSelectHandler(selectedId: Experience["id"]) {
    const experience = experiences.find(({ id }) => id === selectedId);
    setSelected(experience);
  }

  function deselect() {
    setSelected(undefined);
  }

  return {
    selected,
    onSelectHandler,
    deselect,
    Provider,
    useContext: useContext(Context),
  };
}
