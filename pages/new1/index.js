import Head from "next/head";
import Link from "next/link";


const Home = () => {
    return (
        <div>
            <Head>
                <title>Home page</title>
            </Head>
            <h2>new test home</h2>
            <Link href={'/new1/new2/new3/n3'}>
                got to n3 page
            </Link>
        </div>
    );
};

export default Home;