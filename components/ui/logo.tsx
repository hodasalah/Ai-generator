interface LogoProps {
	white?: boolean;
}
const Logo: React.FC<LogoProps> = ({white}) => {
	return (
		<div className='w-full h-auto'>
			{white ? (
				<img src='/images/logo2.svg' alt='logo' />
			) : (
				<img src='/images/logo.svg' alt='logo' />
			)}
		</div>
	);
};

export default Logo;
