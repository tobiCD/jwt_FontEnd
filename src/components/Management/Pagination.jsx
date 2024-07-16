import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import React, {
  useEffect,
  useState
} from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={50}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );


// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById("container")
);