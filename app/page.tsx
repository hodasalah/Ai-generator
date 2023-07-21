import {Button} from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Image src='/images/logo.png' alt='logo' height={50} width={50} />
			<Button variant='destructive'>Hello</Button>
		</>
	);
}
