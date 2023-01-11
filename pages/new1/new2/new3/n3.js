import Head from "next/head";
import Link from "next/link";


const n3 = () => {
    return (
        <div>
            <Head>
                <title>new3 page</title>
            </Head>
            <h2>n3 to test</h2>
            <Link href={'/new1'}>go to home</Link>
        </div>
    );
};

export default n3;