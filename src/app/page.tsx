import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import getItems from "../functions/getItems";

export default async function Home() {
  const items = await getItems();

  return (
    <div>
      <CardContainer>
        {items.map((item) => (
          <Card item={item} key={item.name} />
        ))}
      </CardContainer>
    </div>
  );
}
