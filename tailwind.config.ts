import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					container: '#a078ff',
					fixed: '#e9ddff',
					'fixed-dim': '#d0bcff',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					container: '#00cbe6',
					fixed: '#a2eeff',
					'fixed-dim': '#2fd9f4',
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					container: '#8392a6',
					fixed: '#d4e4fa',
					'fixed-dim': '#b9c8de',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					dim: 'hsl(var(--surface-dim))',
					bright: 'hsl(var(--surface-bright))',
					container: 'hsl(var(--surface-container))',
					'container-low': 'hsl(var(--surface-container-low))',
					'container-lowest': 'hsl(var(--surface-container-lowest))',
					'container-high': 'hsl(var(--surface-container-high))',
					'container-highest': 'hsl(var(--surface-container-highest))',
					variant: 'hsl(var(--surface-variant))',
				},
				on: {
					surface: 'hsl(var(--on-surface))',
					'surface-variant': 'hsl(var(--on-surface-variant))',
					background: 'hsl(var(--on-surface))',
					primary: '#3c0091',
					'primary-fixed': '#23005c',
					'primary-fixed-variant': '#5516be',
					secondary: '#00363e',
					'secondary-fixed': '#001f25',
					'secondary-fixed-variant': '#004e5a',
					tertiary: '#233143',
					'tertiary-fixed': '#0d1c2d',
					'tertiary-fixed-variant': '#39485a',
					error: '#690005',
				},
				error: {
					DEFAULT: '#ffb4ab',
					container: '#93000a',
				},
				'inverse-primary': '#6d3bd7',
				'inverse-surface': '#dce1fb',
				'outline-variant': '#494454',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				display: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				mono: ['monospace'],
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(93, 230, 255, 0.5), 0 0 20px rgba(93, 230, 255, 0.3)',
					},
					'50%': {
						boxShadow: '0 0 20px rgba(93, 230, 255, 0.8), 0 0 40px rgba(93, 230, 255, 0.5)',
					},
				},
				'pulse-glow-light': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(0, 168, 204, 0.3), 0 0 20px rgba(0, 168, 204, 0.2)',
					},
					'50%': {
						boxShadow: '0 0 20px rgba(0, 168, 204, 0.5), 0 0 40px rgba(0, 168, 204, 0.3)',
					},
				},
				'data-stream': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'pulse-glow-light': 'pulse-glow-light 2s ease-in-out infinite',
				'data-stream': 'data-stream 2s linear infinite',
			},
			spacing: {
				"1/8": "12.5%",
			},
			boxShadow: {
				'glow-secondary': '0 0 15px rgba(93, 230, 255, 0.3)',
				'glow-primary': '0 0 15px rgba(160, 120, 255, 0.3)',
				'glow-lg': '0 0 30px rgba(93, 230, 255, 0.4)',
				'glow-secondary-light': '0 0 15px rgba(0, 168, 204, 0.2)',
				'glow-primary-light': '0 0 15px rgba(139, 92, 246, 0.2)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;