'use client'

import { useRouter } from "next/navigation";

const Tiktok =  () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    }
    return (
        <>
            Tiktok
            <div>
                <button onClick={handleBtn}>
                    Back Home
                </button>
            </div>
        </>
    );
}
export default Tiktok;