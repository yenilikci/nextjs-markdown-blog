import Image from "next/image";
import Layout from "../components/Layout";

export default function NotFoundPage() {
    return (
        <Layout title="Page not found">
            <div className="flex flex-col items-center mt-20">
                <Image src="/images/logo.png" width={70} height={70} className="bg-gray-800 rounded-2xl"/>

                <h1 className="text-6xl my-5">
                    Whoops!
                </h1>

                <h2 className="text-gray-400 text-4xl mb-5">
                    This page doesn't exist.
                </h2>
            </div>
        </Layout>
    );
}
