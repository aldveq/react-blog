import { useState } from "react";

const useInput = initialState => {
	const [value, setValue] = useState(initialState);

	return [
		{
			value,
			onChange: (e) => setValue(e.target.value)
		},
		() => setValue(initialState)
	];
}

export default useInput;