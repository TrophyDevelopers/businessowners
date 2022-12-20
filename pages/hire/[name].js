import { useRouter } from "next/router";
import services from "../api/services"
export default function Hire() {
  const router = useRouter();
  const { name } = router.query;
  const service = services.find(service => service.id === name)
  return( <h1> Request { service.id}</h1>)
} 
