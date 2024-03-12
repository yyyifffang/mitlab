import Link from "next/link"
import styles from "./page.module.scss"

export default function Admin() {
  return (<>
    <header className={styles.header}>
      <h1>管理員專區</h1>
    </header>
    <main>
        <ul className={styles.list}>
            <li><Link href="/admin/articles">管理文章</Link></li>
            <li><Link href="/admin/contact">管理聯絡資訊</Link></li>
            <li><Link href="/admin/qa">管理 QA</Link></li>
        </ul>
    </main>
  </>)
}
