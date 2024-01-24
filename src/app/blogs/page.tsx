'use client'
import useSWR from "swr";
import AppTable from "../components/app.table";

const BlogsPage = () => {
    const fetchData = (url: string) => fetch(url)
        .then(res => res.json());
    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
        fetchData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </div>
    )
}
export default BlogsPage;