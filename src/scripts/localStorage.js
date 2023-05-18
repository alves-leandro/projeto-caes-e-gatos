export const getLocalStorage = () => {
	const userType = localStorage.getItem("@userType") || "";
	const user = JSON.parse(localStorage.getItem("@user")) || "";

	return { user, userType };
};
