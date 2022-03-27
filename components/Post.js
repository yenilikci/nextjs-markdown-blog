import Image from "next/image";
import Link from "next/link";

export default function Post({post}) {
    return (
        <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
            <Image src={post.frontmatter.cover_image} height={420} width={600}
                   className="mb-4 rounded"/>

            <div className="flex justify-between items-center">
                <span className="font-light 800 text-sm">
                    {post.frontmatter.date}
                </span>
                <div>
                    {post.frontmatter.category}
                </div>
            </div>

            <div className="mt-2">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-2xl text-gray-700 font-bold hover:underline">
                        {post.frontmatter.title}
                    </a>
                </Link>
                <p className="mt-2 text-gray-600 text-sm">
                    {post.frontmatter.excerpt}
                </p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-gray-900 hover:text-blue-600">Read More</a>
                </Link>
                <div className="flex items-center">
                    <img src={post.frontmatter.author_image}
                         className="mx-2 w-8 h-8 object-cover rounded-full hidden sm:block"/>
                    <h3 className="text-gray-600 font-bold">
                        {post.frontmatter.author}
                    </h3>
                </div>
            </div>
        </div>
    )
}
