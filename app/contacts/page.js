import Contacts from "./Contacts";

import { metaData } from "@/utils/metadata";

export const metadata = metaData('Контакти')

export default function Page () {
  return(
    <Contacts></Contacts>
  )
}