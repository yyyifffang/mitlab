import axios from "axios";
import { api_url } from "./urls";

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

//一般使用者獲得已發布文章
export async function GetArticles(uuid: string): Promise<ArticlesResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: 'api/public/article/' + { uuid },
            baseURL: api_url,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching articles', error);
        throw error;
    }
}
//取得所有tag
export async function GetTags(tags: string): Promise<ArticlesResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: 'api/public/tags',
            baseURL: api_url,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tags', error);
        throw error;
    }
}