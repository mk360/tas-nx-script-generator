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
const appRouter = t.router({
  userById: t.procedure.input((value) => {
    if (typeof value === 'string' || typeof value === 'number') return value as string | number;
  }).query((request) => {
    const { input } = request;
    return userList[input.toString()];
  })
});

export type AppRouter = typeof appRouter;
