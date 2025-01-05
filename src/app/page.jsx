import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";



const page = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl container mx-auto">
      <Navbar logoText="MyApp" buttonText="Contact Us" />
      <main className="flex-grow flex items-center justify-center">
        <Banner />
      </main>
    </div>
  );
};

export default page;