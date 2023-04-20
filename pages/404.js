import Heading from "@/components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <Heading text="Error" />
      <h2>Something is going wrong...</h2>
    </div>
  );
};

export default Error;
