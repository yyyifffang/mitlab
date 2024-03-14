import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api_url = '/api/articles'

//獲取article的所有data
interface Data {
    uuid: string;
    title: string;
    content: string;
    cover_image_url: string | null;
    tags: string;
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

//取得特定tag之已發布文章
async function get(tag_name: string): Promise<ArticlesResponse> {
    try{
        const response = await axios({
            method: 'get',
            url: `${api_url}/${tag_name}`,
            baseURL: BASE_URL,
        });
        return response.data;
    }catch(error){
        if (axios.isAxiosError(error) && error.response) {
            //return backend's error response body
            return error.response.data as ArticlesResponse;
        }else{
            //非後端error
            return { error:"An unexpected error occurred", message: error.message};
        }
    }

}

export default{
    get
}