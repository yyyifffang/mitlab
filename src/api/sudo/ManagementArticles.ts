import axios from "axios";
import { api_url } from "../urls";

//獲取article的所有data
interface Data {
    uuid: string;
    title: string;
    content: string;
    cover_image_url: string | null;
    tags: string | null;
    is_published: boolean;
    creation_date: string;
    modification_date: string | null;
}

//獲取文章的資料
interface ArticlesResponse {
    message: string;
    data: Data[];
}
//刪除特定文章
interface DeleteResponse {
    message: string;
    uuid: string;
}

//獲取所有文章
export async function fetchAllArticles(): Promise<ArticlesResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: 'api/sudo/articles',
            baseURL: api_url,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

//獲取特定文章
export async function fetchArticlesByUuid(uuid: string): Promise<ArticlesResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: 'api/sudo/articles/' + { uuid },
            baseURL: api_url,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching articles', error);
        throw error;
    }
}

//刪除特定文章
export async function deleteArticlesByUuid(uuid: string): Promise<DeleteResponse> {
    try {
        const response = await axios({
            method: 'delete',
            url: 'api/sudo/article/' + { uuid },
            baseURL: api_url,
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting article', error);
        throw error;
    }
}