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
            
            <p>My page is Abdullah</p>
            <div>
                <h1>Mofassel Hosain</h1>
            </div>
            <div> <h1>Mofassel Second Time Push</h1></div>
        </div>
    );
};

export default Home;