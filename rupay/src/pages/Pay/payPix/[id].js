import { useRouter } from "next/router"

export default function PayPix() {
    const {query} = useRouter()
    return(
        <>
        Ola {query.id}
        </>
    )
}