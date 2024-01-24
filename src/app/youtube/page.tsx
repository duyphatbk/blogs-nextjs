'use client'

import { useRouter } from "next/navigation";
const Youtube =  () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    }
    return (
        <>
            Youtube
            <div>
                <button onClick={handleBtn}>
                    Back Home
                </button>
            </div>
        </>
    );
}
export default Youtube;