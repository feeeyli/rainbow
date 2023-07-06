import { useEffect, useState } from "react";
import { useInterval } from "@react-hooks-library/core";

function App() {
	const [color, setColor] = useState(0);

	const colors = [
		"bg-red-500",
		"bg-orange-500",
		"bg-amber-500",
		"bg-yellow-500",
		"bg-lime-500",
		"bg-green-500",
		"bg-emerald-500",
		"bg-teal-500",
		"bg-cyan-500",
		"bg-sky-500",
		"bg-blue-500",
		"bg-indigo-500",
		"bg-violet-500",
		"bg-purple-500",
		"bg-fuchsia-500",
		"bg-pink-500",
		"bg-rose-500",
	];

	function nextColor() {
		if (color + 1 === colors.length) return setColor(0);

		setColor((old) => old + 1);
	}

	// useEffect(() => {
	// 	// create a interval and get the id
	// 	const myInterval = setInterval(() => {
	// 		nextColor();
	// 	}, 100);
	// 	// clear out the interval using the id when unmounting the component
	// 	return () => clearInterval(myInterval);
	// }, []);

	useInterval(nextColor, 15);

	return <div className={"h-screen w-screen " + colors[color]}></div>;
}

export default App;
