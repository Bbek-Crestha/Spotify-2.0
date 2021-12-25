import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
	return (
		<div>
			<img
				className="mb-5 w-52"
				src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
				alt="spotify"
			/>

			{Object.values(providers).map((provider) => (
				<div>
					<button>Login with {provider.name}</button>
				</div>
			))}
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
