import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api_url = '/api/sudo/article'

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
    //成功=>message&data，失敗=>message&error
    message: string;
    data?: Data[];
    error? :string;
}

//刪除特定文章
interface DeleteResponse {
    //成功=>message&uuid，失敗=>message&error
    message: string;
    uuid?: string;
    error?: string;
}

//使用uuid刪除特定文章
async function deleted(uuid: string): Promise<DeleteResponse> {
    try {
        const response = await axios({
            method: 'delete',
            url: `${api_url}/${uuid}`,
            baseURL: BASE_URL,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            //return backend's error response body
            return error.response.data as DeleteResponse;
        }else{
            //非後端error
            return { error:"An unexpected error occurred", message: error.message};
        }
    }
}

export default {
    deleted
}