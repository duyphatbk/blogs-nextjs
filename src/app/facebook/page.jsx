'use client'

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    }
    return (
        <>
            Facebook
            <div>
                <button onClick={handleBtn}>
                    Back Home
                </button>
                <Button variant="danger">vamos</Button>
            </div>
        </>
    );
}
export default Facebook;