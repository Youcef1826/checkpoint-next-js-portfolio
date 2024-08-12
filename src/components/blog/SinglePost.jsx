
export default function singlePost({ post }) {

    return (
        
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <span>{post.userId}</span>
        </article>
    );
};
