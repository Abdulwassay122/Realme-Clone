import Navbar from "@/components/Header/Navbar";
import {Section} from "@/components/Herosection/Section";
import Smartphones from "@/components/Herosection/Smartphones";
import Accessories from "@/components/Herosection/Accessories";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
   <>
    <Navbar/>
    <Section/>
    <Smartphones/>
    <Accessories/>
    <Footer/>
   </>
  );
}
