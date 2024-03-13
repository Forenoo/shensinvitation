"use client";

import React, { useEffect, useState } from "react";
import UndanganCard from "./UndanganCard";

interface CatalogItem {
  id: string;
  picture: string;
  themeId: string;
  type: string;
}

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function CatalogPagination() {
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const [catalogData, setCatalogData] = useState<CatalogItem[]>([]);

  const getCatalogData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/undangan", {
        cache: "no-cache",
        method: "GET",
      }).then((res) => res.json());

      const data = await res;
      setCatalogData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalogData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-[1.25rem] md:grid-cols-2 xl:grid-cols-3 xl:gap-[1.5625rem]">
        {catalogData
          ?.slice(startIndex, endIndex)
          .map((item) => (
            <UndanganCard
              key={item.id}
              picture={item.picture}
              themeId={item.themeId}
              invitationType={item.type}
            />
          ))}
      </div>

      <Pagination className="my-[2rem]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : undefined
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex >= catalogData.length
                  ? "pointer-events-none cursor-not-allowed opacity-50"
                  : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
