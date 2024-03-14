'use client'
import styles from "./ArticleShow.module.scss"
import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
//取得特定tag文章的api
import getTagsArticles from "@/api/getTagsArticles";

export default function ArticleShow() {
    //所有研究方向文章
    const [articles, setArticles] = useState([]);
    //當前頁碼，ReactPaginate使用0當第一頁
    const [currentPage, setCurrentPage] = useState(0);
    //每頁顯示的文章數
    const articlesPerPage = 10;

    //取得文章
    useEffect(() => {
        const getTagArticles = async () => {
            const response = await getTagsArticles.GET("Life-Records");
            if (response.data) {
                setArticles(response.data);
            }
        };
        getTagArticles();
    }, []);

    //計算總頁數
    const pageCount = Math.ceil(articles.length / articlesPerPage);
    //計算要顯示的文章是從第幾篇到第幾篇
    const currentArticles = articles.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage);

    //頁碼切換
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    }

    return (
        <>
            <div className={styles.articleShow}>
                {currentArticles.map(article => (
                    <div key={article.uuid} className={styles.articleBox}>
                        <text>{article.modification_date}</text>
                        <img
                            src={article.cover_image_url || "https://fakeimg.pl/300/"} //後面是放預設圖片
                            alt={article.title}
                            className={styles.articleImage}
                        />
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={"< 上一頁"}
                nextLabel={"下一頁 >"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                pageClassName={styles.pageItem}
                pageLinkClassName={styles.pageLink}
                previousClassName={styles.pageItem}
                nextClassName={styles.pageItem}
                breakClassName={styles.pageItem}
            />
        </>
    )
}