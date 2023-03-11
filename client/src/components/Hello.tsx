import { trpc } from "../utils/trpc";

export default function Hello() {
  const greet = trpc.greet.useQuery({ name: "Alex" });

  return (
    <div>
      <h1>{greet.data?.text}</h1>
    </div>
  );
}
