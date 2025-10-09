/* eslint-disable @typescript-eslint/no-explicit-any */
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
import OnBoarding from "@/components/OnBoarding";
import heroImage from "@/assets/bg-background.jpg";
import { checkOnBoarding, getUserProfile } from "@/apis/users";
import useUserStore from "@/store/user";

const Dashboard = () => {
  const [isOnBoardingCompleted, setIsOnBoardingCompleted] = useState<null | boolean>(null);
  const setUser = useUserStore().setUser;

  // Check if user finished onboarding
  useEffect(() => {
    const checkOnBoardingUser = async () => {
      try {
        const response: any = await checkOnBoarding();
        setIsOnBoardingCompleted(!!response);
      } catch (err) {
        console.error("Error checking onboarding:", err);
        setIsOnBoardingCompleted(false);
      }
    };
    checkOnBoardingUser();
  }, []);

  // Fetch user profile
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response: any = await getUserProfile();
        setUser(response);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    getProfile();
  }, [setUser]);

  // Show loader until onboarding status is known
  if (isOnBoardingCompleted === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Show onboarding if not completed
  if (!isOnBoardingCompleted) {
    return (
      <div
        className="min-h-screen"
        // style={{
        //   backgroundImage: `url(${heroImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <OnBoarding setIsOnBoardingCompleted={setIsOnBoardingCompleted} />
        {/* <Footer /> */}
      </div>
    );
  }

  // Main dashboard
  return (
    <SidebarProvider>
      <div
        className="min-h-screen flex md:w-full"
        // style={{
        //   backgroundImage: `url(${heroImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
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
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
