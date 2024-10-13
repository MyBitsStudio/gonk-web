import SocialBar from "@/components/socialBar";
import ContractAddress from "@/components/contractAddress";


export default function Divider() {
    return (
        <span className="flex items-center mx-4">
            <span className="h-px flex-1 bg-green-600"></span>
            <span className="shrink-0 px-6"> <ContractAddress /></span>
            <span className="h-px flex-1 bg-green-600"></span>
        </span>

    )
}