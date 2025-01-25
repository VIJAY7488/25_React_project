import { useState } from "react";
import Pagination from "./Pagination";

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: ` Product ${index + 1}`,
  }));

  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }

  let indexOfLastItem = currentPage * itemPerPage;
  let indexOfFirstItem = indexOfLastItem - itemPerPage;
  let currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div>
        <h1 className="h1">Pagination</h1>
        <ul>
          <li className="item">
            <div className="container">
              {currentListOfItems.map((listItem) => (
                <div className="box" key={listItem.id}>
                  {listItem.name}
                </div>
              ))}
            </div>
          </li>
        </ul>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummyData.length / itemPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default PaginationTest;
