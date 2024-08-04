
"use client"
import { KouizCard } from "@/components/KouizCard"; // Add the missing import statement

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { redirect } from "next/navigation";
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Eye, Delete, CirclePlus, PenLine } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { listAllKouiz } from '@/app/api/auth/ListAllKouiz';
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';
import UserContext from '@/contexts/UserContext';
import React from "react";
import { list } from "postcss";
import AuthContext from "@/contexts/AuthContext";


const Kouiz = () => {

    const [kouiz, setKouiz] = useState([]);
    let { token, setToken } = React.useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token !== String) {
                    token = localStorage.getItem('token');
                }
                const response = await listAllKouiz(token);
                if (response.success === true) {
                    setKouiz(response.data.data);
                    console.log(kouiz)
                } else {
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <MaxWidthWrapper className="md:pr-0 px-0 mt-14">
                <div className="sm:pt-20 sm:pl-52 pt-20 md:pr-20 dark:bg-sBlue w-full pb-32 px-6">
                    <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-title font-bold text-pBrown">Mes Kouiz.</h1>
                            <p className="font-body lg:my-4 my-2 text-md">Gérez vos Kouiz ici.</p>
                        </div>

                    </div>



                    {kouiz.length > 0 ? (
                        <>
                            <div className="grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 lg:gap-2 gap-4 *:p-6 mt-4">
                                {kouiz.map((kouiz) => (
                                    <KouizCard key={kouiz.id} id={kouiz.id} emoji={kouiz.emoji} title={kouiz.title} description={kouiz.description} />
                                ))}
                            </div>
                        </>

                    ) : (
                        <>
                            <div className="bg-pWhite dark:bg-pBlue border dark:border-0 rounded-xl space-y-2 flex flex-col w-full p-12">
                                <div className="flex flex-col justify-center items-center w-full gap-8">
                                    <svg aria-hidden="true" className="inline w-8 h-8 text-pGray animate-spin dark:text-gray-600 fill-pBrown dark:fill-pBrown" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </MaxWidthWrapper >
        </>
    );
}

export default Kouiz;