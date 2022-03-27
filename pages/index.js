import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import Layout from "../components/Layout";

export default function HomePage({posts}) {
    console.log(posts);
    return (
        <Layout>
            <h1>Home Page</h1>
        </Layout>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');

        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8');

        const {data: frontmatter} = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        }
    })

    // console.log(posts);

    return {
        props: {
            posts
        }
    }
}
