import {UUIDGenerator} from "@/app/uuid-generator/uuid-generator";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'UUID generator',
  description: 'Generate random UUID of desired version',
  keywords: 'uuid, generator, random'
}

const UUidGeneratorPage = () => {
  return(
    <UUIDGenerator />
  )
}

export default UUidGeneratorPage;
