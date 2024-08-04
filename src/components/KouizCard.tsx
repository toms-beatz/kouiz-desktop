import Link from "next/link";
import { Eye, PenLine, Delete, PencilRuler, Trash2 } from "lucide-react";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";

export const KouizCard = ({ id, emoji, title, description }) => {

    return (
        <>
            <div className="bg-pWhite dark:bg-pBlue border dark:border-0 rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="text-2xl">{emoji}</div>
                    </div>

                    <h2 className="font-title font-bold text-xl">{title}</h2>
                    <div className="text-md">{description}</div>
                </div>


                <div className="flex mt-auto justify-between">
                    <Link href={`/kouiz/${id}`} className="hover:underline text-pBrown font-title flex items-center text-sm">Voir<Eye className="ml-1 w-4 h-4" /></Link>
                    <Link href={`/kouiz/${id}/edit`} className="hover:underline text-pBrown font-title flex items-center text-sm">Modifier<PencilRuler className="ml-1 w-4 h-4" /></Link>
                </div>
            </div>
        </>
    );
}
