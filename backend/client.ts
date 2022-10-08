import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./src/server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:6000'
    })
  ]
});
