import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import Blog1 from "./blog1";
import Blog2 from "./blog2";

export default function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="px-12 py-4 mt-2 ">
        <div className="text-4xl font-medium">Blog</div>
        <div className="">Some of the best blogs from allover the world</div>
      </div>
      {currentPage === 1 ? <Blog1 /> : <Blog2 />}
      <div className="flex overflow-x-auto sm:justify-center ">
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
