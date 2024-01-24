export const metadata = {
    title: 'View Detail Blogs',
    description: 'View Detail Blogs',
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
