import { useRouter } from 'next/navigation';


export default () => {
    const router = useRouter();
    localStorage.removeItem('token')
    router.push('auth')
}