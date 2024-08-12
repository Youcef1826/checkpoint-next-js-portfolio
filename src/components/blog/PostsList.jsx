import Link from "next/link";

export default function PostsList({ post }) {

    return (

        <li 
        className="border-[1px] border-slate-100 py-2 px-4 rounded-md shadow-sm w-fit hover:bg-slate-100"
        key={post.id}>
            <h2 className="font-medium "><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
        </li>
    );
};