import Link from "next/link";
import { Eye, PenLine, Delete, PencilRuler, Trash2 } from "lucide-react";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';

export const UserCard = ({ id, username, birthdate, email, registerDate, role }) => {


    const calculateAge = (birthdate) => {
        const diff = Date.now() - new Date(birthdate).getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const age = calculateAge(birthdate);

    //affiche la date de naissance sous le format jj/mm/aaaa
    const date = new Date(birthdate);
    const birthdateFormated = date.toLocaleDateString();

    const register = new Date(registerDate);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    const inscription = register.toLocaleString('fr-FR', options);

    const inscriptionFormated = formatDistance(
        new Date(registerDate),
        new Date(),
        { addSuffix: true, locale: fr }
    );


    return (
        <>
            <div className="bg-pWhite dark:bg-pBlue border dark:border-0 rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="text-2xl font-bold font-title">{username}</div>
                        <div className={cn(badgeVariants({ variant: "default" }), `${role === "admin" ? "bg-pBlue hover:bg-pBlue dark:bg-sBlue dark:hover:bg-sBlue" : "bg-pBrown hover:bg-pBrown"}  text-pWhite flex justify-center`)}>
                            <span>{role === "admin" ? "👑" : "👤"}</span>
                            <span className="mx-2">{role}</span>
                        </div>
                    </div>
                    <Link href={`mailto:${email}`} className="font-body font-black text-md hover:underline text-pBrown">✉️ {email}</Link>
                    <div className="text-md">🎂 {birthdateFormated} ({age} ans)</div>
                    <div>
                        <div className="text-md">📝 Inscrit {inscriptionFormated}<span className="text-sm"> ({inscription})</span></div>
                        
                    </div>

                </div>

                <div className="flex mt-auto justify-between">
                    <Link href={`/users/${id}/edit`} className="hover:underline text-pBrown font-title flex items-center text-sm">Modifier<PencilRuler className="ml-1 w-4 h-4" /></Link>
                    <Link href={`/users/${id}/delete`} className="hover:underline text-pBrown font-title flex items-center text-sm">Supprimer<Trash2 className="ml-1 w-4 h-4" /></Link>
                </div>
            </div>
        </>
    );
}
