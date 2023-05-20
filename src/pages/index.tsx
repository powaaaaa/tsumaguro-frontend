import { useRouter } from "next/router";
import HomePage from "./Home";
import indexCustom from "./indexCustom";

const Index = () => {
  const router = useRouter();
  if (router.isReady) {
    router.push("/Home");
  }
};

export default Index;
