const express = require('express')
const cors = require('cors')
const { v4 } = require('uuid')
const app = express()
app.use(cors())
const port = 3002

app.get('/', (req, res) => {
  res.json([
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
      "title": "6G平台",
      "content": "6G平台棒",
      "cover_image_url": "test",
      "tags": "Research Area",
      "is_published": true,
      "creation_date": "2023-05-15",
      "modification_date": "2023-09-30"
    },
    {
      "uuid": "3",
      "title": "回答問題",
      "content": "不要有問題",
      "cover_image_url": "test",
      "tags": "QA",
      "is_published": false,
      "creation_date": "2023-01-11",
      "modification_date": "2023-06-23"
    },
    {
      "uuid": "4",
      "title": "實驗室尾牙",
      "content": "好吃",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2024-01-11"
    },
    {
      "uuid": "5",
      "title": "實驗室座位表",
      "content": "還不知道",
      "cover_image_url": "test",
      "tags": "QA",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2024-02-29"
    },
    {
      "uuid": "6",
      "title": "低軌衛星",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Research Area",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "7",
      "title": "第七篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "QA",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "8",
      "title": "第八篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Research Area",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "9",
      "title": "第九篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "10",
      "title": "第十篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "11",
      "title": "第11篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "12",
      "title": "第12篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
    {
      "uuid": "13",
      "title": "第13篇文章",
      "content": "正在進行中",
      "cover_image_url": "test",
      "tags": "Life Records",
      "is_published": true,
      "creation_date": "2023-01-11",
      "modification_date": "2023-12-12"
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(v4())
})