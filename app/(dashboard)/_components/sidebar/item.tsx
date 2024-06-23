import { Hint } from '@/components/hint';
import { cn } from '@/lib/utils';
import { useOrganization, useOrganizationList } from '@clerk/clerk-react';
import Image from 'next/image';

interface ItemsProps {
	id: string;
	name: string;
	imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemsProps) => {
	const { organization } = useOrganization();
	const { setActive } = useOrganizationList();

	const isActive = organization?.id === id;

	const onClick = () => {
		if (!setActive) return;

		setActive({ organization: id });
	};

	return (
		<div className="aspect-square relative">
			<Hint label={name} side="right" align="start" sideOffset={18}>
				<Image
					src={imageUrl}
					onClick={onClick}
					alt={name}
					fill
					className={cn('rounded-md cursor-pointer opacity-75 hover:opacity-100 trasition', isActive && 'opacity-100')}
				/>
			</Hint>
		</div>
	);
};
