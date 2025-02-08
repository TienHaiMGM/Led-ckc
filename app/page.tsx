"use client"
import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'
import Banner from '../components/Banner';
import ExploreCategories from '../components/ExploreCategories';
import ItemList from '../components/ItemList';
import BannerMid from '../components/BannerMid';
import HowItWorks from '../components/HowItWork';
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
      <ItemList bgGradient="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" title="BẢNG HIỆU" items={itemCardSign} />
      <ItemList bgGradient ="bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16]" title="HỘP ĐÈN" items={itemCardLightBox} />
      <ItemList bgGradient="bg-gradient-to-bl from-[#86efac] via-[#fcd34d] to-[#f9a8d4]" title="CHỮ NỔI" items={itemCardBraille} />
      <ItemList bgGradient="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#dc2626] via-[#f87171] to-[#fecaca]" title="LED" items={itemCardAdvertisingSign} />
      {/* <BannerMid /> */}
      <Testimonials/>
      <SocialButtons/>
      <Footer />
      </main>
    </div>
    
  );
}