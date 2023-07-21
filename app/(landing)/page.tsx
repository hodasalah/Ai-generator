//app/page.tsx
import {Button} from '@/components/ui/button';
import Link from 'next/link';
export default function LandingPage() {
	return (
		<div>
			<h1>welcome to landing page (unprotected)</h1>
			<Link href='/sign-in'>
				<Button>Login</Button>
			</Link>
			<Link href='/sign-up'>
				<Button>register</Button>
			</Link>
		</div>
	);
}
