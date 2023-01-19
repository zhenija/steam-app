import React from 'react'

type Props = {
  totalPages: number,
  currentPage: number,
  setCurrentPage: (number: number) => void,
}

export const Pagination : React.FC<Props> = ({ totalPages, currentPage, setCurrentPage}) => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i)
    }
    return (
        <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className='pagination__circle'
            >
                &lt;
            </button>
            {buttons.map(num => (
                <button
                  key={num}
                  className={currentPage === num ?
                     "pagination__circle pagination__circle--active"
                     : "pagination__circle"}
                  onClick={() => setCurrentPage(num)}
                >
                    {num}
                </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className='pagination__circle'
            >
                &gt;
            </button>
        </div>
    )
}
