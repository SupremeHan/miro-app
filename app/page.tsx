'use client';

import { UserButton } from '@clerk/clerk-react';

export default function Home() {
	return (
		<div className="flex flex-col gap-y-4">
			<div>Auth users only</div>
			<div>
				<UserButton />
			</div>
		</div>
	);
}
