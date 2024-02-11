/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				'350px': '350px',
				'50px': '50px',
			},
			height: {
				'185px': '185px',
				'50px': '50px',
			},
			colors: {
				'dark-dark-5': '#6B7280',
				'sort-box-color': '#3758F9',
				'sort-box-border-color': '#DFE4EA',
				'filter-text-color': '#8F959E',
				'name-address-color': '#8F959E',
			},
			backgroundColor: {
				'search-box-color': '#3758F9',
				'sortfilter-box-color': '#E1E8FF',
				'profile-box-color': '#F5F6FA',
			},
			fontFamily: {
				sans: ["Inter"],
			},
			fontSize: {
				xxs: '10px',
				24: '24px',
				16: '16px',
				15: '15px',
				13: '13px',
				12: '12px',
			},
			borderRadius: {
				10: '10px',
				20: '20px',
			},
			boxShadow: {
				custom: '0px -4px 20px 0px rgba(0, 0, 0, 0.25)',
			},
			backgroundImage: {
				membercardgold: "url('./src/assets/membercardgold.svg')",
				membercardsilver: "url('./src/assets/membercardsilver.svg')",
				membercardbronze: "url('./src/assets/membercardbronze.svg')",
			},
			animation: {
				'slide-in': 'slide-in 1s ease-in-out',
				'slide-out': 'slide-out 1s ease-in-out',
				'bounce-short': 'bounce 1s ease-in-out 2.5',
			},
		},
	},
	plugins: [],
};
