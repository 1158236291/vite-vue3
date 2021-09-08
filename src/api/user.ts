import request from "../utils/axios";
//根据后端返回接口格式定义
interface HttpResponse {
    status: number;
    statusText: string;
    data: {
        [key: string]: any;
    };
}

interface LoginData {
    username: string;
    password: string;
}
interface LoginParams {
    username: string;
    password: string;
}

export class UserService {
    //data是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    //responseType 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    static async login(data: LoginData): Promise<HttpResponse> {
        return request({
            url:"/api/user",
            method: "post",
            responseType: "json", //响应格式
            data
        });
    }
     // `params` 是即将与请求一起发送的 URL 参数
    static async getUserInfo(params: LoginParams): Promise<HttpResponse> {
        return request({
            url:'/api/getUserInfo',
            method: "get",
            responseType: "json", //响应格式
            params
        });
    }
}
