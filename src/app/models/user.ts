export interface user{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
    support?:support
}
interface support{
    url:string;
    text:string;
}
export interface usersListResponce{
page:number;
per_page:number;
total:number;
total_pages:number;
data:user[]
}