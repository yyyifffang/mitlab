const express = require('express')
const cors = require('cors')
const { v4 } = require('uuid')
const app = express()
app.use(cors())
const port = 3002;

//模擬的文章數據
const articles=[
  {
    "uuid": "1",
    "title": "114碩士生招收名額",
    "content": "yaya，14個好了",
    "cover_image_url": "test",
    "tags": "Life Records",
    "is_published": true,
    "creation_date": "2023-05-16",
    "modification_date": "2023-08-21"
  },
  {
    "uuid": "2",
    "title": "研究方向測試",
    "content": "yaya，14個好了",
    "cover_image_url": "test",
    "tags": "Research Area",
    "is_published": true,
    "creation_date": "2023-05-16",
    "modification_date": "2023-08-21"
  },
  {
    "uuid": "3",
    "title": "QA測試",
    "content": "yaya，14個好了",
    "cover_image_url": "test",
    "tags": "QA",
    "is_published": true,
    "creation_date": "2023-05-16",
    "modification_date": "2023-08-21"
  },
];

const tags=["Life Records","Research Area","QA"]

//管理員獲取所有文章
app.get('/api/sudo/articles',(req,res) => {
  res.json({
    message: "Get article successfully",
    data: articles
  });
});

//管理員使用uuid查詢單一文章
app.get('/api/sudo/article/:uuid',(req,res)=>{
  const {uuid} = req.params;
  const article = articles.find(article => article.uuid ===uuid);

  if(article){
    res.json({
      message: "Get specific article successfully",
      data: article
    });
  };
})

//管理員使用uuid刪除特定文章
app.delete('/api/sudo/article/:uuid',(req,res)=>{
  const {uuid} = req.params;
  const articleIndex = articles.findIndex(article => article.uuid === uuid);

  if(articleIndex !== -1){
    //從陣列中刪除文章
    articles.splice(articleIndex, 1);
    res.json({
      message: "Delete article successfully",
      uuid: uuid,
    });
  }
})

//根據特定標籤獲取文章
app.get('/api/articles/:tag_name',(req, res) =>{
  const {tag_name} = req.params;
  const filteredArticles = articles.filter(article =>
    article.tags.includes(tag_name) && article.is_published
  );

  if(filteredArticles.length){
    res.json({
      message: `Get articles with tag :${tag_name} successfully`,
      data: filteredArticles
    });
  }
})

//使用文章uuid檢視已公開的文章
app.get('/api/article/:uuid',(req,res)=>{
  const {uuid} = req.params;
  const article = articles.find(article => article.uuid ===uuid && article.is_published === true);

  if(article){
    res.json({
      message:"Get specific published article successfully",
      data:article
    });
  }
})

//取得所有tags
app.get('/api/tags',(req,res)=>{
  res.json({
    message: "Get tags successfully",
    //返回所有標籤
    tags: tags
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(v4())
})