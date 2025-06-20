import getItems from "../config/getItems";
import ClientIndex from "../clientPages";
import { Suspense } from "react";

export default async function Home() {
  const items = await getItems();

  return (
    <Suspense>
      <ClientIndex items={items} />
    </Suspense>
  );
}
