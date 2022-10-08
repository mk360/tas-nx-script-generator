import { createTRPCReact } from "@trpc/react";
import type { AppRouter } from '../../backend/src/server';

export const trpc = createTRPCReact<AppRouter>();
