function PaginationComponent ({setCurrentPage,currentPage,pages}) {

    const handleNextPage = (e) => {
        setCurrentPage(currentPage < (pages - 1) ? currentPage + 1 : pages -1 )
        
    }
    return (
        <div className="pagination">
          <ul className="pagination-list">
              <li data-first-page className="pagination-item" onClick={() => {setCurrentPage(0)}}>
                  <span> « </span>
              </li>
              <li data-prev-page="" class="pagination-item" onClick={() => setCurrentPage(currentPage !== 0 && currentPage > 0 ? currentPage - 1 : 0 ) }><span>️‹</span>️</li>        

              {Array.from(Array(pages), (value,index) => (
                <li className="pagination-item"> 
                    <li className={`pagination-item ${index === currentPage ? 'pagination-item--active' : ''}`}
                        value={index} 
                        onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1}
                    </li>
                </li>
            )
          )}
          <li data-next-page="" class="pagination-item" onClick={(e) => handleNextPage(e.target.value)} ><span>️ › </span></li>
          <li data-last-page className="pagination-item" onClick={(e) => setCurrentPage(pages - 1)}><span> »️ </span></li>
          </ul>
        </div>
    )

}

export default PaginationComponent