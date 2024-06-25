import Image from 'next/image';

interface EmptyStateProps {
	icon: string;
	title: string;
	description: string;
}

export const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
	return (
		<div className="h-full flex flex-col items-center justify-center">
			<Image src={icon} height={140} width={140} alt="" />
			<h2 className="text-2xl font-semibold mt-6">{title}</h2>
			<p className="text-muted-foreground text-sm mt-2">{description}</p>
		</div>
	);
};
