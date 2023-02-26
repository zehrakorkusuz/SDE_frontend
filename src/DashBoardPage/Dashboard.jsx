import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://facade-service-7x5inv6roa-lz.a.run.app/api/content", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return data.map((c) => (
    <p>
      <Link to={c._id} key={c._id}>
        {c.title}
      </Link>
    </p>
  ));
}
