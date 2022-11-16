import { useMemo } from 'react'
import { Tab } from '@headlessui/react'
import Table from './table'
import Form from './form'

export default function Navbar() {
  const tabs = [
    "Single",
    "Multiple",
    "File Upload"
    ]
    
      const columns = useMemo(() => [
    {
      Header: "Submitted By",
      accessor: 'submitted-by',
    },
    {
      Header: "Input Filename",
      accessor: 'input-filename',
    },
    {
      Header: "Output Filename",
      accessor: 'output-filename',
    },
    {
      Header: "Date Created",
      accessor: 'date-created',
    },
    {
      Header: "Status",
      accessor: 'status',
    },
  ], [])

  const data = useMemo(() => [
      { 
        "submitted-by": "Clay",
        "input-filename": "asdfsafse.xls",
        "output-filename": "asda.txt",
        "date-created": "2022-11-27T20:30:00.000",
        "status": "READY"
      },
      { 
        "submitted-by": "Clay",
        "input-filename": "asdfsafse.xls",
        "output-filename": "asda.txt",
        "date-created": "2022-11-27T20:30:00.000",
        "status": "READY"
      }
 
    ], [])


  return (
    <Tab.Group>
      <Tab.List className="bg-blue-500 w-screen">
          {tabs.map(t=>(
            <Tab className="px-20 ui-selected:uppercase ui-selected:underline">{t}</Tab>
          ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Form /></Tab.Panel>
        <Tab.Panel className="py-15 m-10"><Table columns={columns} data={data}/></Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}