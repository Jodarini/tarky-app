import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
const allItems = gql`
  {
    items {
      id
      name
    }
  }
`;
interface Item {
  id: string;
  name: string;
}
interface Items {
  items: Item[];
}
export default function Home() {
  const { data } = useQuery<Items>({
    queryKey: ["items"],
    queryFn: async () => request("https://api.tarkov.dev/graphql", allItems),
  });
  const listItems = data?.items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <>
      items
      {listItems}
    </>
  );
}
