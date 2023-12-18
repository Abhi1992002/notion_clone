"use client";
import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";

type documentIdPageProps = {
  params: {
    documentsId: Id<"documents">;
  };
};

const DocumentIdPage = ({ params }: documentIdPageProps) => {
  const documents = useQuery(api.documents.getById, {
    documentId: params.documentsId,
  });

  if (documents === undefined) {
    return <div>Loading...</div>;
  }

  if (documents === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={documents.coverImage} />
      {/* <div className="h-[35vh]"></div> */}
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={documents} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
