import Apartments from "./Apartments";

import { metaData } from "@/utils/metadata";

export const metadata = metaData('Свободни Апартаменти')

export default function Page () {
  return(
    <Apartments></Apartments>
  )
}