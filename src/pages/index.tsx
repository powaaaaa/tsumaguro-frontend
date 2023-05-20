import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  if (router.isReady) {
    router.push("/Home");
  }
};

export default Index;
