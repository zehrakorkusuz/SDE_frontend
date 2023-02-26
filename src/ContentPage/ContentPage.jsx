import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://facade-service-7x5inv6roa-lz.a.run.app/api/content/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.title}</h1>
      {data.content_text.split("\n").map((line) => (
        <p>{line}</p>
      ))}
      <img src={data.img_url} alt={data.title} />
    </div>
  );
}
