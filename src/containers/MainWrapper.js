import React from 'react';

const MainWrapper = ({ children, type }) => {
	const isMainWrapperHeader = type === 'header' && 'main-wrapper--header';
	return (
		<div className={`main-wrapper ${isMainWrapperHeader}`} >{children}</div>
	)
}

export default MainWrapper;