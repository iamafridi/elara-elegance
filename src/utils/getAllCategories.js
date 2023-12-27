export const getAllCategories = async () =>{
const rest = await fetch(" https://the-news-portal-server.vercel.app/categories");
return rest.json()
}