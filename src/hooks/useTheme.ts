import { useCallback } from "react";

import { useState } from "react";

// 테마 관련 로직
export function useTheme() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}, []);

	return { theme, toggleTheme };
}
