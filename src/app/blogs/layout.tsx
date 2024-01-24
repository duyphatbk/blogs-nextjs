export const metadata = {
    title: 'Blogs List',
    description: 'Blogs List',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    );

}
