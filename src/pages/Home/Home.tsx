import ContentHome from "@/components/Content/ContentHome";
import Footer from "@/components/Footer/Fotter";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full h-full bg-[#18181b]">
      <Header />
      <ContentHome />
      <Footer />
    </div>
  );
}