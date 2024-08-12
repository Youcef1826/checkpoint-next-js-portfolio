
import axios from "axios";

export default async function PostPage({params}) {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const post = res.data;

    return (
        <section>
            <article className="shadow-md rounded-lg w-[50%] py-12 px-24 mx-auto">
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                <p>{post.body}</p>
            </article>
        </section>
    )
}