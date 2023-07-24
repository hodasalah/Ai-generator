'use client';

import {Menu} from 'lucide-react';
import {useEffect, useState} from 'react';
import Sidebar from './sidebar';
import {Button} from './ui/button';
import {Sheet, SheetContent, SheetTrigger} from './ui/sheet';

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className='p-0' side={'left'}>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
