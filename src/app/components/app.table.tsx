'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModel from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.model';
import Link from 'next/link';
import useSWR, { mutate } from 'swr';
import { toast } from 'react-toastify';

interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const { blogs } = props;

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [blog, setBlog] = useState<IBlog | null>(null);
    const handleDeleteModal = (id: number) => {
        if (confirm(`Do you want to delete blog ${id}`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success(`Deleted blog ${id} succeed!...`);
                        mutate("http://localhost:8000/blogs");
                    }
                });
        }
    }
    return (
        <>
            <div className='my-3'
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <h3>Table Blogs</h3>
                <Button variant='secondary'
                    onClick={() => setShowModalCreate(true)}
                >Add New</Button>
            </div>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>

                                    <Link href={`/blogs/${item.id}`}
                                        className='btn btn-primary'
                                    >
                                        View
                                    </Link>

                                    <Button variant='warning' className='mx-3'
                                        onClick={() => {
                                            setBlog(item);
                                            setShowModalUpdate(true);
                                        }
                                        }
                                    >Edit</Button>
                                    <Button variant='danger'
                                        onClick={() => handleDeleteModal(item.id)}
                                    >Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModel showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <UpdateModal
                setShowModalUpdate={setShowModalUpdate}
                showModalUpdate={showModalUpdate}
                blog={blog}
                setBlog={setBlog}
            />
        </>

    );
}

export default AppTable;