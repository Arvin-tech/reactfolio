import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Background"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./uhx-logo.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">UHX Travel Central</div>
							<div className="work-subtitle">
								Travel Consultant <br />2023 - Present
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="./ctu-logo.webp"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Cebu Technological University</div>
							<div className="work-subtitle">
								Bachelor of Science in Tourism Management <br /> 2023 - Present
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
