import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import NewContentForm from "../components/NewContentForm";
import { getToken } from "../functions/localstorage";

export default function Dashboard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["content_data"],
    queryFn: () =>
      fetch("https://facade-service-7x5inv6roa-lz.a.run.app/api/content", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      }).then((res) => res.json()),
    refetchInterval: 60 * 1000,
  });

  if (isLoading) return <Loading />;

  if (error) return <Error message={error.message} />;

  if (data.error) return <Error message={data.error} />;

  return (
    <div>
      <NewContentForm />
      {data.map((c) => (
        <p key={c._id}>
          <Link to={c._id}>{c.title}</Link>
          {new Date() - new Date(c.created_at) < 1000 * 60 * 10 && "NEW!"}
        </p>
      ))}
    </div>
  );
}
