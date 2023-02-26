import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChangeTextForm from "../components/ChangeTextForm";
import ContentTextParagraphs from "../components/ContentTextParagraphs";
import Error from "../components/Error";
import Loading from "../components/Loading";
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

  const [isModifingText, setIsModifingText] = useState(false);

  if (isLoading) return <Loading />;

  if (error) return <Error message={error.message} />;

  if (data.error) return <Error message={data.error} />;

  return (
    <div>
      <Link to={"/dashboard"}>Go Back</Link>
      <h1>{data.title}</h1>
      {(isModifingText && (
        <ChangeTextForm
          id={id}
          content_text={data.content_text}
          closeModify={() => setIsModifingText(false)}
        />
      )) || (
        <ContentTextParagraphs
          content_text={data.content_text}
          onClick={() => setIsModifingText(true)}
        />
      )}
      <img src={data.img_url} alt={data.title} />
    </div>
  );
}
