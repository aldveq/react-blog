import React from "react";
import MainWrapper from "../containers/MainWrapper";
import { Title } from "../components";

const NotFoundPage = () => {
	return (
		<MainWrapper type='body'>
			<div className="not-found-page-wrapper">
				<Title text='Sorry, resource not found 😭!' type='main' />
			</div>
		</MainWrapper>
	)
}

export default NotFoundPage;