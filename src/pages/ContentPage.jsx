import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../functions/localstorage";

export default function ContentPage() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: [`single_id_${id}`],
    queryFn: () =>
      fetch(
        `https://facade-service-7x5inv6roa-lz.a.run.app/api/content/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.title}</h1>
      {data.content_text.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <img src={data.img_url} alt={data.title} />
    </div>
  );
}
