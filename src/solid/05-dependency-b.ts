import { LocalDataBaseService, JsonDataBaseService, PostProvider, WebApiPostService } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        const data = new WebApiPostService();
        this.posts = await data.getPosts();
        // this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}