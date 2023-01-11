import { useRouter } from "next/router";

const newN = () => {
    const router = useRouter()
    const pageNumber = router.query.newN
    return (
        <div>
            <h2>dynamic route {pageNumber}</h2>
        </div>
    );
};

export default newN;