import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import ProductList from "@/components/productList";
import BestSeller from "@/components/BestSeller";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import FutureProd from "@/components/FutureProd";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <HomeComponent />
      <ProductList />
      <BestSeller/>
      <Hero2 />
      <Hero3 />
      <FutureProd />
      <Footer />

    </>
  );
}
