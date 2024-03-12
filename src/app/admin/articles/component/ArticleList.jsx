'use client'
import React, { useState, useEffect } from 'react';
import ArticleRow from './ArticleRow';
import styles from './ArticleListAndRow.module.scss'
import { fetchAllArticles } from '@/api/sudo/ManagementArticles';

export default function ArticleList() {
    //取得文章列表
    const [articles, setArticles] = useState([]);
    //篩選標籤
    const [filterTag, setFilterTag] = useState('');
    //搜尋文章標題
    const [searchTitle, setSearchTitle] = useState("");
    //排序日期
    const [sortDirection, setSortDirection] = useState('desc');

    //刪除文章功能
    const DeleteData = (uuid) => {
        //使用filter創建一個不包含要刪除項的新array
        const updateArticles = articles.filter(article => article.uuid != uuid);
        //使用setarticles
        setArticles(updateArticles);
    };

    useEffect(() => {
        const getData = async () => {
            const data = await fetchAllArticles();
            //獲取最新articles狀態
            setArticles(data);
        };
        getData();
    }, []); //[]表示effect只在組件加載時運行一次

    //標籤篩選功能
    //篩選器改變時更新狀態
    const handleFilterChange = (event) => {
        setFilterTag(event.target.value);
    };

    //搜尋文章標題功能
    const handleSearchTitle = (event) => {
        setSearchTitle(event.target.value);
    }
    //時間排序
    const toggleSortDirection = () => {
        setSortDirection(prevDirection => prevDirection === 'asc' ? 'desc' : 'asc');
      };

    //篩選結果
    const filteredArticles = articles
        .filter(article => {
        //檢查標籤
        const tagMatch = filterTag ? article.tags.includes(filterTag) : true;
        //檢查標題
        const titleMatch = article.title.toLowerCase().includes(searchTitle.toLowerCase());
        return tagMatch & titleMatch
        })
        .sort((a,b)=> {
            const dateA =new Date(a.creation_date);
            const dateB =new Date(b.creation_date);
            return sortDirection === 'asc' ? dateA - dateB : dateB - dateA
        });
    

    //渲染文章列表
    return (
        <>
            <div className={`${styles.searchAndFilterContainer} ${styles.searchInput}`}>
                <input
                    type='text'
                    className={styles.searchInput}
                    placeholder='搜尋文章標題...'
                    value={searchTitle}
                    onChange={handleSearchTitle}
                />
                
                <select 
                    className={`${styles.searchAndFilterContainer} ${styles.filterSelect}`}
                    onChange={handleFilterChange} 
                    value={filterTag}
                >
                    <option value="">所有文章</option>
                    <option value="Life Records">Life Records</option>
                    <option value="Research Area">Research Area</option>
                    <option value="QA">QA</option>
                </select>
                <button className={styles.addArticleButton}>新增文章</button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>發佈狀態</th>
                        <th>文章標題</th>
                        <th>標籤</th>
                        <th>
                            建立日期
                            <button onClick={toggleSortDirection}>
                                {sortDirection === 'asc' ? '升序' : '降序'}
                            </button>
                        </th>
                        <th>修改日期</th>
                        <th>編輯</th>
                        <th>刪除</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredArticles.map(article => (
                        <ArticleRow key={article.uuid} article={article} DeleteData={DeleteData} />
                    ))}

                </tbody>
            </table>
        </>
    );
}
