import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import Home from "@/components/dashboard/pages/Home";
import Practice from "@/components/dashboard/pages/Practice";
import Vocabulary from "@/components/dashboard/pages/Vocabulary";
import Progress from "@/components/dashboard/pages/Progress";
import Settings from "@/components/dashboard/pages/Settings";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import OnBoarding from "@/components/OnBoarding";
import heroImage from "@/assets/hero-bg-3.png";
const Dashboard = () => {
  const [isOnBoardingCompleted,setIsOnBoardingCompleted] = useState(false);
  const [modalOpen,setModalOpen] = useState(false)
  if(!isOnBoardingCompleted){
    useEffect(() => {
      setModalOpen(true)
    },[])
    return<div className="min-h-screen " style={{ backgroundImage: `url(${heroImage})`,backgroundSize: "cover",backgroundPosition: "center" ,}}>
      <OnBoarding setIsOnBoardingCompleted={setIsOnBoardingCompleted}/>
      <Footer/>
      </div>
  }
  useEffect(() => {
    console.log("isOnBoardingCompleted",isOnBoardingCompleted)
  },[isOnBoardingCompleted])
  return (
    <SidebarProvider>
      <div className="min-h-screen flex md:w-full" style={{ backgroundImage: `url(${heroImage})` ,backgroundSize: "cover",backgroundPosition: "center" }} >
        <DashboardSidebar />
        <div className="flex-1 flex flex-col" >
          <DashboardHeader />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;