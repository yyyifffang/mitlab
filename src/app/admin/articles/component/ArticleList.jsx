'use client'
import React, { useState, useEffect } from 'react';
import ArticleRow from './ArticleRow';
import styles from './ArticleListAndRow.module.scss'

import managementArticles from '@/api/sudo/managementArticles';
import fetchAllArticles from '@/api/sudo/fetchAllArticles';
import getTags from '@/api/getTags';

export default function ArticleList() {
    //取得文章列表
    const [articles, setArticles] = useState([]);
    //篩選標籤
    const [filterTag, setFilterTag] = useState('');
    //搜尋文章標題
    const [searchTitle, setSearchTitle] = useState("");
    //排序日期
    const [sortDirection, setSortDirection] = useState('desc');
    //get後端tag
    const [tags,setTags] = useState([]);

    //刪除文章功能
    const DeleteArticle = async(uuid)  => {
        const response = await managementArticles.DELETE(uuid);
        if(!response.error){
            const updateArticles = articles.filter(article => article.uuid !== uuid);
            setArticles(updateArticles);
        };
    };

    useEffect(() => {
        //取得所有文章
        const getAllArticles = async () => {
            const response = await fetchAllArticles.GET();
            if(response.data){
                setArticles(response.data);
            }
        };
        getAllArticles();
        //獲取後端寫死的所有tags
        const getAllTags = async() => {
            const tagsResponse = await getTags.GET();
            if(tagsResponse.tags){
                setTags(tagsResponse.tags);
            }
        };
        getAllTags();
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
        //檢查標籤，因為tags是用逗號分隔的字串，所以要先將其分割成數組再匹配
        const tagMatch = filterTag ? article.tags.split(",").includes(filterTag) : true;
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
            <div className={styles.searchAndFilterContainer}>
                <div style={{display :'flex',flexGrow:1,gap:'8px'}}>
                    <input
                        type='text'
                        className={styles.searchInput}
                        placeholder='搜尋文章標題...'
                        value={searchTitle}
                        onChange={handleSearchTitle}
                    />
                </div>
                <select 
                    className={styles.filterSelect}
                    onChange={handleFilterChange} 
                    value={filterTag}
                >
                    <option value="">所有文章</option>
                    {tags.map((tag)=>(
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
                <div>
                    <button className={styles.addArticleButton}>新增文章</button>
                </div>
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
                        <ArticleRow key={article.uuid} article={article} DeleteData={DeleteArticle} />
                    ))}

                </tbody>
            </table>
        </>
    );
}
