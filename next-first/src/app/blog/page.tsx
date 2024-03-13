"use client";
import { useQuery } from "react-query";
import { Divider, Heading, Flex } from "@chakra-ui/react";
import { getDataPost } from "@/api/blog";

import Navbar from "@/components/Navbar";
import MyCard from "@/components/MyCard";

export const revalidate = 3600;

export default function Blog() {
  const { data, error, isLoading } = useQuery("post", async () => {
    const res = await getDataPost();
    return res;
  });

  if (error) return <div>Error : {JSON.stringify(error)}</div>;
  if (isLoading) return <div> Loading ... </div>;

  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto my-[20px]">
        <Heading textAlign={"center"}> Blog </Heading>
        <Divider my={5} />
        <Flex direction={"row"} flexWrap={"wrap"}>
          {data?.data.items.map((item: any, index: number) => {
            return (
              <MyCard
                id={item.sys.id}
                key={index}
                title={item.fields.title}
                image={item.fields?.image?.sys?.id}
                slug={item.fields.slug}
              />
            );
          })}
        </Flex>
      </div>
    </>
  );
}
