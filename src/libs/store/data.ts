import { writable } from 'svelte/store';
import type { Page } from '../types/page';

export let DATA = writable<Page[]>([
	{
		year: 2023,
		isLocked: new Date().getFullYear() < 2023,
		data: {
			proposal: {
				company_name: 'ROCKET.CHAT',
				title: 'GitHub Pull request reminders app',
				description:
					'The proposed project is to develop a pull request reminder app for Rocket.Chat to help development teams keep track of their GitHub pull request reviews. The app will provide regular reminders and updates to ensure pull requests are reviewed and discussed in a timely manner. The app will leverage existing boilerplate code and GitHub APIs to create dedicated Rocket.Chat channels for each pull request, where stakeholders can collaborate and discuss. Users will receive notifications about updates to the pull request, ensuring everyone is informed and the review process stays on track.',
				mentors: ['Murtaza Patrawala', 'Samad Khan'],
				drive: [
					'Developing a pull request reminder app for Rocket.Chat has the potential to significantly improve the productivity and efficiency of development teams, especially those working on large-scale projects with multiple pull requests. By providing regular reminders and updates, the app will ensure that pull requests are being reviewed and discussed in a timely manner, which can help avoid delays and ensure that deadlines are met.',
					'The creation of dedicated Rocket.Chat channels for each pull request will allow for better collaboration and discussion among teams, including the author of the pull request, the reviewers, and any other team members who need to be informed about the status of the review. This will help ensure that everyone is on the same page and that issues can be addressed quickly.',
					'Moreover, the use of notifications will help to ensure that everyone is informed of updates to the pull request, such as new comments or changes to the code. This will ensure that the review process stays on track and that everyone is aware of any changes that have been made.',
					'Overall, the pull request reminder app will improve the efficiency and effectiveness of development teams, leading to faster and more successful project completion. The app will leverage existing technologies and APIs to create a powerful and easy-to-use solution, making it an ideal project for the Google Summer of Code program.'
				],
				objective: [
					'Create a new Rocket.Chat app that integrates with GitHub APIs to access and monitor pull requests.',
					'Leverage the existing Rocket.Chat authentication and API infrastructure to create dedicated channels for each pull request',
					'Implement regular reminders and notifications to keep the team informed of pending pull requests, status updates, and comments.',
					'Allow for collaboration and discussion within the dedicated Rocket.Chat channels, with the ability to add and remove users as necessary.',
					'Ensure that the app is secure, scalable, and reliable, and able to handle multiple GitHub accounts and repositories.',
					'Create an intuitive and user-friendly interface that is easy to navigate and use.'
				],
				technical_approch: [
					"Rocket.Chat: The app will be built on top of Rocket.Chat's existing infrastructure, leveraging its authentication and API system.",
					"Reminders and Notifications: The app will use Rocket.Chat's notification system to provide regular reminders and updates to the team, ensuring that they stay informed of any changes to the pull request.",
					'GitHub API: The app will integrate with the GitHub API to access and monitor pull requests.',
					'User Management: The app will allow users to be added or removed from the dedicated channel as necessary, ensuring that only the relevant team are included in the discussion.',
					'MongoDB: Rocket.Chat uses MongoDB as its primary database, and the app will use MongoDB to store and manage data related to pull requests and channels.',
					"ReactJS: The app's user interface is built with ReactJS, ensuring a responsive and intuitive interface.",
					'Docker: The app will be containerized using Docker, making it easy to deploy and scale across multiple environments.',
					'GitHub Actions: GitHub Actions will be used to automate the deployment and testing process, ensuring that the app is reliable and free of bugs.'
				],
				experience: [
					'My expertise in advanced TypeScript and JavaScript will be invaluable in building a scalable and efficient pull request reminder app for Rocket.Chat.',
					"As the app's user interface will be built using React, my experience with this technology will be instrumental in creating a user-friendly interface that is both responsive and intuitive.",
					"My knowledge of MongoDB and Sequelize will be critical in designing and implementing the app's database, ensuring that it is optimized for the specific requirements of the project.",
					'With my experience in GitHub, I can leverage its APIs to help the app access and monitor pull requests, as well as automate the deployment and testing process using GitHub Actions.',
					"I will use my expertise to optimize the app's performance, ensuring it runs smoothly and meets the needs of the development team."
				],
				interaction: [
					"Joined the project's communication channels",
					'Attending meetings and events',
					'Communicating with mentors and other contributors',
					'Submitting pull requests and seeking reviews',
					'Engaging with the community'
				],
				conclusion:
					'I would like to take this opportunity to thank the selection committee for considering my proposal. I am confident that I can make a valuable contribution to the project and the open-source community, and I look forward to the opportunity to work with the mentors and other contributors. Thank you again for your time and consideration.'
			},
			code: null,
			timeline: null,
			status: 'PENDING'
		}
	},
	{
		year: 2024,
		isLocked: new Date().getFullYear() < 2024,
		data: null
	},
	{
		year: 2025,
		isLocked: new Date().getFullYear() < 2025,
		data: null
	}
]);
