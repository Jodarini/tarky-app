import { request, gql }from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
// api endpoint
   const allItems = gql `
   {
      items {
            id
            name
         }
      }
   `
export default function Home() {
   const { data } = useQuery ({queryKey:['items'], queryFn: async () => request('https://api.tarkov.dev/graphql', allItems)})
   console.log(data);
   
   
  return (
    <div>Home</div>
  )
}
