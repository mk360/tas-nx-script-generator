import { initTRPC } from "@trpc/server";
interface User {
  name: string;
  age: number;
}

const userList: Record<string, User> = {
  24: {
    name: 'Kazuya Mishima',
    age: 47
  }
};


const t = initTRPC.create();

export const appRouter = t.router({
  userById: t.procedure.input((val: number) => {
    return val;
  }).query((req) => {
    return userList[req.input.toString()];
  })
});

export type AppRouter = typeof appRouter;
