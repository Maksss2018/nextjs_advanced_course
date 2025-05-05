"use client";
import { useRouter } from "next/navigation";
export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Order product page</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
