interface LogoProps {
	white?: boolean;
}
const Logo: React.FC<LogoProps> = ({white}) => {
	return (
		<div className='w-full h-auto'>
			{white ? (
				<img src='/images/log3.svg' alt='logo' />
			) : (
				<img src='/images/log2.svg' alt='logo' />
			)}
		</div>
	);
};

export default Logo;
