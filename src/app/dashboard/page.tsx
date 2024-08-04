"use client"
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, FolderPlus, FolderSearch, TrendingDown, TrendingUp, UserPlus, UserRoundCog, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch } from "lucide-react";
import { useEffect, useState } from 'react';
import Link from "next/link";
import UserContext from '@/contexts/UserContext';
import AuthContext from '@/contexts/AuthContext';
import { dashboard } from '@/app/api/auth/Dashboard';
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
    const { setUser, user } = React.useContext(UserContext);
    const [dashboardData, setDashboardData] = useState(null);
    let { token, setToken } = React.useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token !== String) {
                    token = localStorage.getItem('token');
                }
                const response = await dashboard(token);
                if (response.success === true) {
                    console.log(response.data)
                    setDashboardData(response.data);
                } else {
                    console.error('Erreur lors de la récupération des données:', response.message);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [token]);

    const kouizTitle = dashboardData?.topKouiz?.title ?? dashboardData?.topKouiz;


    useEffect(() => {
        setDashboardData(dashboardData);
        console.log(dashboardData)
    }, [dashboardData])

    return (
        <>

            <MaxWidthWrapper className="md:pr-0 px-0 mt-14">
                <div className="sm:pt-20 sm:pl-52 pt-20 md:pr-20 dark:bg-sBlue w-full pb-32 px-6">

                    <div className="flex flex-col">
                        <h1 className="text-3xl font-title font-bold text-pBrown">Mon dashboard</h1>
                        <p className="font-body lg:my-4 my-2 text-md">Visualiser des données sur Kouiz.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 grid-rows-3 mt-4 *:bg-pWhite">

                        {dashboardData ? (
                            <>
                                <div className="lg:col-span-1 row-span-1 grid rounded-lg border dark:border-0 justify-center items-center hover:bg-pBrown dark:bg-pBlue hover:backdrop-blur-lg text-pBrown hover:text-pWhite">
                                    <div className="text-3xl wave-title font-title font-bold w-5/6 leading-relaxed">
                                        Hello {dashboardData && dashboardData.username}. <span className="wave no-underline">👋</span>
                                    </div>
                                </div>
                            </>

                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center space-y-6 p-12 rounded-lg border dark:border-0">
                                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                    <Skeleton className="w-[150px] h-[20px] rounded-full" />
                                </div>

                            </>

                        )}

                        {dashboardData ? (
                            <>
                                <div className="grid rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue !p-0">
                                    <div className="flex items-center gap-4 *:hover:text-pWhite h-full w-full p-12">
                                        <div className="flex w-1/2 justify-center items-center text-5xl">
                                            👤
                                        </div>
                                        <div className="flex flex-row justify-between items-center gap-2  text-pBrown">
                                            <div className="font-title w-full flex font-bold text-xl flex-wrap justify-center items-center">
                                                <span className="mr-2 text-5xl">{dashboardData && dashboardData.user_count}</span> Inscrits.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center space-y-6 p-6 rounded-lg border dark:border-0">
                                    <div className="flex justify-around items-center gap-4 *:hover:text-pWhite h-full w-full">
                                        <Skeleton className="w-[60px] h-[60px] rounded-full ml-4" />
                                        <div className="flex flex-col justify-between items-center gap-2">
                                            <Skeleton className="w-[50px] h-[50px] rounded-full" />
                                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {dashboardData ? (
                            <>
                                <div className="grid rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue !p-0">
                                    <div className="flex items-center gap-4 *:hover:text-pWhite h-full w-full p-12">
                                        <div className="flex w-1/2 justify-center items-center text-5xl">
                                            📄
                                        </div>
                                        <div className="flex flex-row justify-between items-center gap-2  text-pBrown">
                                            <div className="font-title w-full flex font-bold text-xl flex-wrap justify-center items-center">
                                                <span className="mr-2 text-5xl">{dashboardData && dashboardData.kouiz_count}</span> Kouiz.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center space-y-6 p-6 rounded-lg border dark:border-0">
                                    <div className="flex justify-around items-center gap-4 *:hover:text-pWhite h-full w-full">
                                        <Skeleton className="w-[60px] h-[60px] rounded-full ml-4" />
                                        <div className="flex flex-col justify-between items-center gap-2">
                                            <Skeleton className="w-[50px] h-[50px] rounded-full" />
                                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {dashboardData ? (
                            <>
                                <div className="grid rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue !p-0">
                                    <div className="flex items-center gap-4 *:hover:text-pWhite h-full w-full p-12">
                                        <div className="flex w-1/2 justify-center items-center text-5xl">
                                            📨
                                        </div>
                                        <div className="flex flex-row justify-between items-center gap-2  text-pBrown">
                                            <div className="font-title w-full flex font-bold text-xl flex-wrap justify-center items-center">
                                                <span className="mr-2 text-5xl">{dashboardData && dashboardData.usersAnswers}</span> Réponses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center space-y-6 p-6 rounded-lg border dark:border-0">
                                    <div className="flex justify-around items-center gap-4 *:hover:text-pWhite h-full w-full">
                                        <Skeleton className="w-[60px] h-[60px] rounded-full ml-4" />
                                        <div className="flex flex-col justify-between items-center gap-2">
                                            <Skeleton className="w-[50px] h-[50px] rounded-full" />
                                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex flex-col justify-evenly col-span-2 rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue *:hover:text-pWhite *:*:*:*:hover:text-pWhite p-12">
                            <div className="flex justify-center items-center text-2xl font-title text-pBrown font-bold">
                                Gérer les utilisateurs.
                            </div>
                            <div className="flex justify-evenly items-center mt-8">

                                <Link href="/users" className="flex flex-col items-center gap-2">
                                    <div className="flex items-center justify-center w-full text-pBrown">
                                        <UserRoundSearch className="w-12 h-12" />
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <div className="font-body w-full justify-center items-center flex font-black text-md text-[#]">
                                            Voir les utilisateurs <ArrowRight className="w-4 h-4 ml-2 " />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col justify-evenly col-span-2 rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue *:hover:text-pWhite *:*:*:*:hover:text-pWhite p-12">
                            <div className="flex justify-center items-center text-2xl font-title text-pBrown font-bold">
                                Gérer les Kouiz.
                            </div>
                            <div className="flex justify-evenly items-center mt-8">

                                <Link href="/kouiz" className="flex flex-col items-center gap-2">
                                    <div className="flex items-center justify-center w-full text-pBrown">
                                        <FolderSearch className="w-12 h-12" />
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <div className="font-body w-full justify-center items-center flex font-black text-md text-[#]">
                                            Voir les Kouiz <ArrowRight className="w-4 h-4 ml-2 " />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {dashboardData ? (
                            <>
                                <div className="flex col-span rounded-lg border dark:border-0 hover:bg-pBrown dark:bg-pBlue !p-0">
                                    <div className="flex items-center gap-4 *:hover:text-pWhite h-full w-full p-12">
                                        <div className="flex w-1/2 justify-center items-center text-5xl">
                                            🌟
                                        </div>
                                        <div className="flex flex-col justify-between items-center gap-2  text-pBrown">
                                            <div className="font-title w-full flex font-bold text-xs text-[#999]">
                                                Votre Kouiz star.
                                            </div>
                                            <div className="font-title w-full flex font-bold text-xl">
                                                {dashboardData && kouizTitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full flex flex-col justify-center space-y-6 p-6 rounded-lg border dark:border-0">
                                    <div className="flex justify-around items-center gap-4 *:hover:text-pWhite h-full w-full">
                                        <Skeleton className="w-[60px] h-[60px] rounded-full ml-4" />
                                        <div className="flex flex-col justify-between items-center gap-2">
                                            <Skeleton className="w-[50px] h-[50px] rounded-full" />
                                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </MaxWidthWrapper >
        </>
    );
}

export default Dashboard;