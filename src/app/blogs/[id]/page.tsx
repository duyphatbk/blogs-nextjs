'use client'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';
const ViewDetailBlog = (props: any) => {
    const fetchData: Fetcher<IBlog, string> = (url: string) => fetch(url)
        .then(res => res.json());
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${props.params.id}`,
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
            <Link href={'/blogs'}>
                Go back
            </Link>    
            <Card style={{ width: '18rem' }}>
                <Card.Header>{data?.author}</Card.Header>
                <Card.Body>
                    <Card.Title>{data?.title}</Card.Title>
                    <Card.Text>
                        {data?.content}
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    );
};
export default ViewDetailBlog;