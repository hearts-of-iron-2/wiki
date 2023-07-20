import { createMachine } from "xstate";

export const editMachine = createMachine({
  id: "edit",
  initial: "auth",
  states: {
    auth: { on: { NEXT: "edit" } },
    edit: { on: { NEXT: "finish" } },
    finish: { on: { PREV: "edit" } },
  },
});
