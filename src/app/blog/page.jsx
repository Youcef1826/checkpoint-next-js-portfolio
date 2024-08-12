
import axios from "axios";
import PostsList from "@/components/blog/PostsList";

export default async function Posts({post}) {

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;

    return (
        
        <section>
            <div className="my-12">
                <h2 className="font-bold text-4xl mb-4">Blog</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <PostsList key={post.id} post={post}>{post.title}</PostsList>
                    ))}
                </ul>
            </div>
        </section>
    )
}