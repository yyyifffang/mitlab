'use client';
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import "./navbar.scss"

export default function Navbar() {
  const pathname = usePathname()
  const [droping, setDroping] = useState(false)
  useEffect(() => {
    document.querySelector(".mobile-navbar-container")
      .style.height = droping? "max-content": "0"
  }, [droping])
  useEffect(() => {
    setDroping(false)
  }, [pathname])
  
  return (<>
    <nav className="navbar-container">
      <ul className="navbar">
        <li><Link href="/">首頁</Link></li>
        <li><Link href="/jsleu">關於教授</Link></li>
        <li><Link href="../research">研究方向</Link></li>
        <li className="dropdown">
          <div className="dropbtn">MIT Lab</div>
          <ul className="dropdown-content">
            <li><Link href="/mitlab/members">實驗室成員</Link></li>
            <li><Link href="/mitlab/lifestream">生活紀錄</Link></li>
            <li><Link href="/mitlab/award">特殊榮譽</Link></li>
            <li><Link href="/mitlab/publications">論文/專題</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">聯絡我們</Link></li>
      </ul>
      <div className="navbar-icon" onClick={() => {setDroping(!droping)}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <nav className="mobile-navbar-container">
      <ul>
        <li><Link href="/">首頁</Link></li>
        <li><Link href="/jsleu">關於教授</Link></li>
        <li><Link href="/research">研究方向</Link></li>
        <li>
          <div>MIT Lab</div>
          <ul>
            <li><Link href="/mitlab/members">實驗室成員</Link></li>
            <li><Link href="/mitlab/lifestream">生活紀錄</Link></li>
            <li><Link href="/mitlab/award">特殊榮譽</Link></li>
            <li><Link href="/mitlab/publications">論文/專題</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">聯絡我們</Link></li>
      </ul>
    </nav>
  </>)
}
