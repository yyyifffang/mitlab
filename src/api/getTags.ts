import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const api_url = '/api/tags';

//取得所有tags
interface TagsResponse{
    //成功=>message&tags，失敗=>message&error
    message : string;
    tags?:string[];
    error?: string;
}

//取得所有tag
async function GET(): Promise<TagsResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: api_url,
            baseURL: BASE_URL,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            //return backend's error response body
            return error.response.data as TagsResponse;
        }else{
            //非後端error
            return { error:"An unexpected error occurred", message: error.message};
        }
    }
}

export default {
    GET
};