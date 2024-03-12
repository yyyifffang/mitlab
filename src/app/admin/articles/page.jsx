'use client'
import { useEffect } from "react";
import styles from "./page.module.scss"
import ArticleList from "./component/ArticleList";
const backend = process.env.NEXT_PUBLIC_API_URL;
export default function Admin() {
  return (
    <main>
        <div className={styles.adminHeader}>文章管理頁面</div>
      <ArticleList />
    </main>
  )
}
