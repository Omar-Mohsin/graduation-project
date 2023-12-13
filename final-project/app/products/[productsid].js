import React from "react";
import { useRouter } from "next/router";
import { SelectProductById } from "@/redux/products/productsSlice";
import { useSelector } from "react-redux";

function DetailItem() {
  const router = useRouter();
  const { id } = router.query;
    console.log(id);
  const product = useSelector( SelectProductById(id));

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export default DetailItem;
