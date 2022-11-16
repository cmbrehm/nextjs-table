import { useMemo } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Table from './table'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar';

export default function Home() {
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
    <div className="flex flex-col h-screen justify-between w-screen">
      <div className={styles.title}>
        <h1>THE APP</h1>
      </div>
      <div className={styles.main}>
        <Navbar />
      </div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
    </div>
  )
}
