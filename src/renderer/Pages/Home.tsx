import { type FC, useEffect, useRef, useState } from "react";
import icon from "../../../assets/icon.png";

import Button from "../Components/Button";

import wallpaper1 from "../../../assets/wallpapers/wallpaper1.jpg";
import wallpaper2 from "../../../assets/wallpapers/wallpaper2.jpg";
import wallpaper3 from "../../../assets/wallpapers/wallpaper3.jpg";
import wallpaper4 from "../../../assets/wallpapers/wallpaper4.jpg";
import wallpaper5 from "../../../assets/wallpapers/wallpaper5.jpg";

import "./Home.css";

const wallpapers = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];

const App: FC = () => {
	const [currentWallpaper, setWallpaper] = useState(0);
	const backgroundRef = useRef<HTMLImageElement>(null);
	const transitionRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setWallpaper((currentWallpaper + 1) % 5);
			if (transitionRef.current && backgroundRef.current) {
				transitionRef.current.src =
					wallpapers[(currentWallpaper + 1) % 5];
				transitionRef.current.className =
					"menu-background-transition opacity1 animateOpacity";
				setTimeout(() => {
					backgroundRef.current!.src =
						wallpapers[(currentWallpaper + 1) % 5];

					transitionRef.current!.className =
						"menu-background-transition opacity0";
				}, 0.5e3);
			}
		}, 5e3);

		return () => {
			clearInterval(intervalId);
		};
	});

	return (
		<>
			<header className="header">
				<a className="localshop-icon" href="/">
					<img
						src={icon}
						alt="Local Shop icon"
						className="height-width-100"
					/>
				</a>
			</header>
			<div className="background-container">
				<div className="menu-background-shadow height-width-100">
					<img
						className="menu-background"
						ref={backgroundRef}
						src={wallpaper1}
						alt="Changing background"
					/>
					<img
						className="menu-background-transition opacity0 animateOpacity"
						ref={transitionRef}
						src={wallpaper2}
						alt=""
					/>
				</div>
			</div>
			<section className="offers-section">
				<h1>
					Local offers<span>✨</span>
				</h1>
				<h3>Never miss out on the latest local products</h3>
				<Button
					buttonstyle="BlueStyle"
					onClick={() => {
						window.location.href = "/categories";
					}}
				>
					Browse
				</Button>
			</section>
		</>
	);
};

export default App;
