import { useRef, useEffect } from "react";
function YourComponent() {
	const feedContainerRef = useRef(null);
	useEffect(() => {
		if (feedContainerRef.current) {
			feedContainerRef.current.scrollTop =
				feedContainerRef.current.scrollHeight;
		}
	}, []);
	return (
		<div
			ref={feedContainerRef}
			style={{ maxHeight: "500px", overflowY: "auto" }}>
			{" "}
			{/* Your dynamic feed items go here */}{" "}
		</div>
	);
}