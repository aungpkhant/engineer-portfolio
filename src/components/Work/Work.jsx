import React from "react";
import styles from "./Work.module.css";
import { ProjectCard } from "../index";
import slugify from "../../util/slugify";
import { Helmet } from "react-helmet";

export const projects = [
	{
		title: "The Nova Rover",
		brief_desc:
			"The next generation Mars rovers built by Monash University students.",
		description:
			"I work as a Software Engineer for the team. My main responsibilities includes developing, implementing and testing path planning alogrithms, such as A*, D* and Bug motion using ROS1. I am also working on a Gazebo simulation environment, where the alogrithms are tested before deploying in real-life scenes. Building prototype Mars rovers is one of the most rewarding experience in my uni life.",
		tags: ["Autonomous", "Sensor Integration", "Hackathon"],
		imgLink: "rover1.png",
		images: ["rover1.png", "rover2.png", "rover3.png", "rover4.png"],
		technology: ["ROS", "Gazebo", "AI"],
		language: ["Python", "C++"],
	},
	{
		title: "Socially Aware Warehouse Robot",
		brief_desc:
			"Teaching robots to respect people's social boundaries while navigating.",
		description:
			"This is an undergoing honors project which I have been actively working on. The goal is to use learning-based approach (Reinforcement Learning) for robots to learn social cues through interaction with simulated people. The end result would be a collision-free, autonomous and socially compliant warehouse robot that will aid human workers. ",
		tags: ["Machine Learning", "Sensors", "Honors Project"],
		imgLink: "Social1.png",
		images: [
			"Social1.png",
			"Social2.png",
			"Social3.png",
			"Social4.png",
			"Social5.png",
		],
		technology: ["ROS", "Gazebo", "Deep Reinforcement Learning"],
		language: ["Python", "C++"],
	},
	{
		title: "Anti-Sleep System",
		brief_desc:
			"A safety sytem that monitors sleepiness for long haul drivers.",
		description:
			"Developed an Anti-Sleep System for drowsy drivers. The system incorporates three tracking parameters. These are the number of times the driver blinks, the presence of hands on the steering wheel and the heart rate. When all three checks are met, the car will slow and will alert the company that the driver is no longer fit for the journey. This system can be integrated into autonomous cars to reduce fatalities due to road accidents. The prototyping was achieved using a raspberry pi, which tracks the eye blinks, and communicates serially to the Arduino, which keeps track of heart rate and hand presence. The raspberry pi will notify and alert the company via SMS/call.",
		tags: ["Sensors", "AI", "Hackathon"],
		imgLink: "anti-sleep1.png",
		images: [
			"anti-sleep1.png",
			"anti-sleep2.png",
			"anti-sleep3.png",
			"anti-sleep4.png",
		],
		technology: ["AI for eye tracking", "Arduino"],
		language: ["C", "Python"],
	},
	{
		title: "Byte-by-Byte",
		brief_desc: "Projecting delivery food menus into Augmented Reality.",
		description:
			"The future is here. My team and I created an app for Android and IOS, which projects food menu items onto Augmented Reality space to increase customers' confidence in the product. We also provided the menu owners a way to scan their food in point cloud and upload it to their digital menu for the customers to see.",
		tags: ["Augmented Reality", "IOS", "Android", "Hackathon"],
		imgLink: "byte1.png",
		images: ["byte1.png", "byte2.png", "byte3.gif", "byte4.gif"],
		technology: ["Android", "IOS"],
		language: ["Swift", "Java"],
	},
	{
		title: "Modubrace",
		brief_desc: "Fixing scoliosis in a cost effective way.",
		description:
			"Designed a brace for patients with scoliosis, which is a condition in which the spine curves due to hereditary factors, spinal infection or neuromuscular disorder. This was developed during a 48-hour hackathon held by Melbourne University Biomedical Engineering Society. This design fetched the first place due to meeting factors such as sustainability, cost-effectiveness and solves the issue that braces in the current market failed to address which is muscle atrophy - the deterioration of muscle due to being over-reliant on the brace. The solution was to integrate Electrical Muscle Simulation (EMS) which evokes the contraction of muscle using electrical impulses.",
		tags: ["Medical Device", "Scoliosis", "Hackathon"],
		imgLink: "modubrace1.png",
		images: ["modubrace1.png"],
		technology: ["Solidworks", "Slicer"],
	},
	{
		title: "Puck Picking Robot",
		brief_desc:
			"A Robot car that can sense, pick and stack pucks by the color order.",
		description:
			"This was a student project led by myself and two other students. We created a robot car that can sense, pick and stack pucks according to the color order provided by the referee. The sensors on board include ultrasonics distance meters for collision avoidance and a self-made rgb color sensor. Actuators include 3 steppper motor for the wheels and for the lift mechanism for the arm, and a servo to control the gripper. PSOC, a micro-controller from Cypress, acts as the brain of the car.",
		tags: ["Sensors", "Autonomous", "ECE3091"],
		imgLink: "puck1.png",
		images: ["puck1.png", "puck2.png", "puck3.png"],
		technology: ["Solidworks", "Slicer"],
		language: ["C"],
	},
	{
		title: "Ultrasonic Distance Meter",
		brief_desc: "Measure distance using ultrasounds.",
		description:
			"This device measures the distance of objects using the time of flight of ultrasonic waves. Using the same principle as echolocation it measures the time taken for the ultrasonic signal being transmitted and returned. The distance is obtained by taking the product the speed of sound and the time is taken (one-way). The sensor being used have a reliable range of 3 - 35 cm and an accuracy error of +/- 3mm.",
		tags: ["Sensors", "Micro-controller"],
		imgLink: "Ultrasonic1.png",
		images: ["Ultrasonic1.png"],
		technology: ["PSOC", "Analogue Electronics"],
		language: ["C"],
	},
	{
		title: "HeartRate Sensor",
		brief_desc:
			"Measure heartrate using an infra-red LED and a photodiode.",
		description:
			"This device measure a person's heartbeat using the principle of photophlethysmography. The intuition behind this is very simple. The pulse, which is the increase in blood cells being pumped will absorb more light from the LED and thus, resulting in a decrease in the intensity of light being shown onto the LDR. Due to the photoelectric effect, the decrease in light will increase the LDR resistance and an increase in voltage is observed. The increase in voltage is registered as a pulse.",
		tags: ["Sensors", "Micro-controller", "Signal Processing"],
		imgLink: "HeartRate1.png",
		images: ["HeartRate1.png"],
		technology: ["PSOC", "Analogue Electronics"],
		language: ["C"],
	},
	{
		title: "Pulse Width Modulation with Op-Amps",
		brief_desc: "",
		description:
			"A technique that changed the electronics world has to be the PWM. It is a very clever technique that reduces the power being supplied to load with no drawbacks. The basic idea is that instead of a constant supply of power to the load, the circuit is being turned on and off at a very fast rate. The switching happens extremely that human eyes would not even notice the difference between the PWM controlled LED and an ordinary LED circuit. Motor control and efficiency have improved since the advent of PWM as it contributes to the inertia of the motor.",
		tags: ["Analogue Electronics", "PWM"],
		imgLink: "PWM1.png",
		images: ["PWM1.png"],
		technology: ["Analogue Electronics"],
	},
	{
		title: "Image stitching using homography",
		brief_desc: "How panoramas are made.",
		description:
			"This program stitches the two photos into a panorama using homography with bilinear interpolation. A homography is essentially a matrix which maps or relates one picture to the other. This means a keypoint in image 1 can be related by some mathematical function to the same keypoint in image 2. The homography was obtained using RANSAC on SIFT keypoints. Then the method of billinear interpolation was performed to interpolate the intensity of the image being stitched. In the end, some blurring and blending techniques such as guassian blur, brightness matching and pixel re-adjuistments are done to improve the visuals,and to make the stitched transition between two images less noticeable.",
		tags: ["Image Processing"],
		imgLink: "Image_Stitching1.png",
		images: ["Image_Stitching1.png"],
		technology: ["MATLAB"],
	},
];
projects.map((project, index) => {
	project.slug = slugify(project.title);
	project.index = index;
});

export default function Work() {
	const projectCards = projects.map((project) => (
		<ProjectCard {...project} />
	));

	return (
		<div className={styles.workContainer}>
			<Helmet>
				<title>
					Zwe Htet | David | Melbourne based Electrical and Computer
					Engineer Portfolio from Monash University
				</title>
				<meta
					name="description"
					content="
                Throughout his years at Monash, Zwe Lin Htet worked on a wide array of engineering projects, the most notable one being The Mars Nova Rover. Finishing his Monash Electrical and Computer Engineering degree by the end of 2020, he is ready for employment and tackle any challenge"
				/>
			</Helmet>
			<div className={styles.headerContainer}>
				<h4>Work</h4>
				{`${projects.length} Projects`}
			</div>
			<div>{projectCards}</div>
		</div>
	);
}
