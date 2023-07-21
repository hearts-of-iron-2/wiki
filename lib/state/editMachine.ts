import { createMachine } from "xstate";

export const editMachine = createMachine({
  id: "editMachine",
  initial: "edit",
  states: {
    edit: { on: { NEXT: "finish" } },
    finish: { on: { PREV: "edit" } },
  },
});
