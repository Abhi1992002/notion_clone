"use client";
import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

type documentIdPageProps = {
  params: {
    documentsId: Id<"documents">;
  };
};

const DocumentIdPage = ({ params }: documentIdPageProps) => {
  const documents = useQuery(api.documents.getById, {
    documentId: params.documentsId,
  });

  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentsId,
      content,
    });
  };

  if (documents === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (documents === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={documents.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={documents} />
        <Editor onChange={onChange} initialContent={documents.content} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
