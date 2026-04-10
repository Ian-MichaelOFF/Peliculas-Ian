const API = "https://api.themoviedb.org/3"
export function get(patch){
    return fetch(API + patch,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDEzMTQ3MDY1NjJiMDBhYzM0YWVhNjNkYzk0OTA4ZiIsIm5iZiI6MTc3NTc4MTYxMS4zOTY5OTk4LCJzdWIiOiI2OWQ4NDZlYmM5NjUzM2Y3Njg4N2I5YTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GD613MlCGB8wsiYxseWm7J05Jyzi2CbPkA5cZu46Lng", "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result)=> result.json());
}