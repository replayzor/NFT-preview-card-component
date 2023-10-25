const cardData = {
	title: "Equilibrium #3429",
	description: "Our Equilibrium collection promotes balance and calm.",
	price: "0.041 ETH",
	timeLeft: "3 days left",
	creator: "Jules Wyvern",
};

function App() {
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className="bg-cardBG p-6 rounded-2xl h-[500px] w-72 shadow-2xl">
				<div>
					<img className="rounded-xl" src="./image-equilibrium.jpg" alt="" />
					<div className="flex justify-start">
						<h1 className="cursor-pointer font-bold text-xl pt-6 text-white hover:text-primaryCyan">
							{cardData.title}
						</h1>
					</div>
					<div className="flex  text-primaryBlue text-sm font-extralight pt-4">
						{cardData.description}
					</div>
					<div className="flex items-center text-primaryCyan justify-between pt-4">
						<img
							className="mr-2 h-4 items-center"
							src="./icon-ethereum.svg"
							alt=""
						/>
						<span className="mr-auto ">{cardData.price}</span>
						<div className="flex items-center text-primaryBlue">
							<img src="./icon-clock.svg" alt="" className="mr-1 h-4" />
							<span>{cardData.timeLeft}</span>
						</div>
					</div>
					<div className="border-[1px] my-3 border-line"></div>
					<div className="flex  items-center pr-4">
						<img
							src="./image-avatar.png"
							alt="avatar"
							className="h-7 border-[1px] mr-5 border-white rounded-full"
						/>
						<div className="text-sm text-primaryBlue">
							Creation of{" "}
							<span className="text-white cursor-pointer hover:text-primaryCyan">
								{cardData.creator}
							</span>
						</div>
					</div>
				</div>
				<div className="attribution pt-10 text-white tracking-widest">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						rel="noreferrer"
						target="_blank"
						className="mx-2"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="https://github.com/replayzor">Ionut Oltean</a>.
				</div>
			</div>
		</div>
	);
}

export default App;
