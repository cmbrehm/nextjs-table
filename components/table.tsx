import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable({
    columns,
    data,
  }
  )
  return (
    <div className="container mx-auto">
      <table>
        <thead className="bg-grey-50">
          {// Loop over the header rows
           headerGroups.map(headerGroup => (
             // Apply the header row props
             <tr {...headerGroup.getHeaderGroupProps()}>
               {// Loop over the headers in each row
               headerGroup.headers.map(column => (
                 // Apply the header cell props
                 <th 
                  className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps()}>
                   {// Render the header
                   column.render('Header')}
                 </th>
               ))}
             </tr>
           ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {// Loop over the table rows
           rows.map(row => {
             // Prepare the row for display
             prepareRow(row)
             return (
               // Apply the row props
               <tr 
                className="text-gray-500"
                {...row.getRowProps()}>
                 {// Loop over the rows cells
                 row.cells.map(cell => {
                   // Apply the cell props
                   return (
                     <td 
                      className="px-6 py-4 whitespace-nowrap"
                      {...cell.getCellProps()}>
                       {// Render the cell contents
                       cell.render('Cell')}
                     </td>
                   )
                 })}
               </tr>
             )
           })}
        </tbody>
      </table>
    </div>
  )
}
