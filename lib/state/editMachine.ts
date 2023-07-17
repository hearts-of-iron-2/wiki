import { createMachine } from "xstate";

export const editMachine = createMachine({
  id: "edit",
  initial: "auth",
  states: {
    auth: { on: { NEXT: "meta" } },
    meta: { on: { NEXT: "edit", PREV: "auth" } },
    edit: { on: { NEXT: "finish", PREV: "meta" } },
    finish: { on: { PREV: "edit" } },
  },
});
