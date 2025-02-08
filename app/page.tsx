"use client"
import  Header from "../components/Header";
import Menu from "../components/Menu";
import Banner from '../components/Banner';
import ExploreCategories from '../components/ExploreCategories';
import ItemList from '../components/ItemList';
import BannerMid from '../components/BannerMid';
import HowItWorks from '../components/HowItWork';
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
import SocialButtons from "../components/SocialButtons"
import RoundedBox from '../components/RoundedBox'
import { itemCardSign,itemCardLightBox,itemCardBraille,itemCardAdvertisingSign } from '../utils/listItems';

export default function Home() {
  return (
    <div>
      <main className="">
      <Header/>
      <Menu />
      <Banner />
      <HowItWorks/>
      <ExploreCategories />
      <ItemList title="BẢNG HIỆU" items={itemCardSign} />
      <ItemList title="HỘP ĐÈN" items={itemCardLightBox} />
      <ItemList title="CHỮ NỔI" items={itemCardBraille} />
      <ItemList title="LED" items={itemCardAdvertisingSign} />
      {/* <BannerMid /> */}
      <Testimonials/>
      <SocialButtons/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <RoundedBox color="bg-red-500">Your Text Here</RoundedBox>
      <RoundedBox color="bg-blue-500">Your Text Here</RoundedBox>
      <RoundedBox color="bg-yellow-500">Your Text Here</RoundedBox>
    </div>
  );
      <Footer />
      </main>
    </div>
    
  );
}