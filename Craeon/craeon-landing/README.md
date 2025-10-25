# Craeon Landing Page

Welcome to the Craeon landing page project! This project is designed to showcase the venture capital and financial firm, Craeon. Below is an overview of the project structure and its components.

## Project Structure

```
craeon-landing
├── src
│   ├── assets
│   │   ├── fonts               # Directory for font files
│   │   ├── svgs                # Directory for SVG files
│   │   └── styles              # Directory for CSS styles
│   │       ├── globals.css     # Global CSS styles
│   │       └── tailwind.css    # Tailwind CSS styles
│   ├── components
│   │   ├── common              # Common reusable components
│   │   │   ├── Button.tsx      # Button component
│   │   │   └── Logo.tsx        # Logo component
│   │   ├── layout              # Layout components
│   │   │   ├── Header.tsx      # Header component
│   │   │   └── Footer.tsx      # Footer component
│   │   └── sections            # Section components
│   │       ├── Hero.tsx        # Hero section component
│   │       ├── Portfolio.tsx    # Portfolio section component
│   │       └── Contact.tsx      # Contact section component
│   ├── pages                   # Page components
│   │   ├── index.tsx           # Main landing page
│   │   ├── about.tsx           # About page
│   │   └── contact.tsx         # Contact page
│   ├── seo                     # SEO related files
│   │   ├── meta.ts             # Meta tags generation
│   │   └── sitemap.ts          # Sitemap generation
│   ├── ai-search               # AI search functionalities
│   │   ├── index.ts            # AI search functions
│   │   └── connectors
│   │       └── vectorStore.ts  # Vector store connection functions
│   ├── utils                   # Utility functions
│   │   ├── helpers.ts          # Helper functions
│   │   └── api.ts              # API call functions
│   ├── hooks                   # Custom hooks
│   │   └── useSearch.ts        # Custom search hook
│   └── types                   # TypeScript type definitions
│       └── index.d.ts          # Type definitions
├── public                      # Public files
│   ├── robots.txt              # Robots.txt for SEO
│   └── manifest.json           # Web app manifest
├── package.json                # NPM configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── README.md                   # Project documentation
```

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd craeon-landing
npm install
```

## Running the Project

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start the development server and you can view the landing page at `http://localhost:3000`.

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thank you for checking out the Craeon landing page project! We hope you find it useful and informative.