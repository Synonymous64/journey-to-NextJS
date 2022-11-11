import { useRouter } from 'next/router'
//* Dynamic Routing if page is not available the given page will be shown up.
//* To Create dynamic route you have create a file name entacted with square brackets  
const post = () => {
    const router = useRouter(); // & Router Establishing 
    const { sno } = router.query // & Destructuring Router Query (should be same name as the file)
    return (
        <p>
            Post: {sno} //^ Returning the Query
        </p>
    )
}
export default post; //! Exporting the whole modules