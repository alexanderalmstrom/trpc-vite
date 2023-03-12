import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { z } from "zod";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
  greet: publicProcedure
    .input(z.object({ name: z.string() }).optional())
    .query(({ input }) => {
      return {
        text: `Hello ${input?.name ?? "world"}`,
      };
    }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    return {};
  },
}).listen(3000);
