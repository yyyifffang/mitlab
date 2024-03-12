import React from "react";
import styles from './ArticleListAndRow.module.scss'
import ArticleList from "./ArticleList";

export default function ArticleRow({ article, DeleteData }) {
        console.log(article);
    return (
        <>
           <tr className={styles.tr}>
                <td >
                    <button
                        className={`${styles.button} ${article.is_published ? styles.published : styles.unpublished}`}>
                        {article.is_published ? '已發佈' : '未發佈'}
                    </button>
                </td>
                <td >{article.title}</td>
                <td >{article.tags}</td>
                <td >{article.creation_date}</td>
                <td >{article.modification_date}</td>
                <td >
                    <button className={`${styles.button} ${styles.edit}`}>編輯</button>
                </td>
                <td >
                    <button 
                        className={`${styles.button} ${styles.delete}`}
                        onClick={() => DeleteData(article.uuid)}>
                        刪除
                    </button>
                </td>
            </tr>
        </>
    )
};