import Image from 'next/image';

export const Loading = () => {
	return (
		<div className="h-full w-full flex flex-col justify-center items-center">
			<Image
				src={'/logo.svg'}
				alt="Logo"
				height={0}
				width={0}
				style={{ width: '120px', height: 'auto' }}
				className="animate-pulse duration-700"
				priority
			/>
		</div>
	);
};
