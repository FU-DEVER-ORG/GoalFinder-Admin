const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;  

//cookie keys storage
const ACCESS_TOKEN = '_access_token';
const REFRESH_TOKEN = '_refresh_token';
const SUB_ACCOUNT_ID = '_sub_account_id';

//...more in need
//addition in here
const constants = {
    API_SERVER,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    SUB_ACCOUNT_ID
}
export default constants;