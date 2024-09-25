import HomeLayout from "@/Layouts/HomeLayout";

const Home = () => {
    return (
        <>
            <h1>Welcome to the website</h1>
            <p>This is the home page.</p>
        </>
    );
};
Home.layout = (page) => <HomeLayout children={page} />

export default Home;
