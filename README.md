# Next.js Portfolio with Sanity.io

[![Next.js](https://img.shields.io/badge/Next.js-13-blue)](https://nextjs.org/)
[![Sanity.io](https://img.shields.io/badge/Sanity.io-CMS-green)](https://www.sanity.io/)

## Overview

This is a sleek portfolio website built using Next.js 13 with app router and Sanity.io for content management. Showcase your skills, projects, and blogs in a modern and responsive design.

## Features

- Next.js 13 for fast rendering and optimal performance
- App router for client-side navigation
- Sanity.io for easy content management
- Responsive design
- SEO-friendly

## Prerequisites

- Node.js >= 14.x
- npm >= 6.x
- Sanity CLI (Optional)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/musebe/Next-sanity-portfolio.git
cd your-nextjs-portfolio
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running in Production

To start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Sanity.io Setup

If you're using Sanity.io for content management, make sure to set up your Sanity project:

1. Install Sanity CLI:

```bash
npm install -g @sanity/cli
```

2. Initialize a new Sanity project:

```bash
sanity init
```

3. Deploy the GraphQL schema:

```bash
sanity graphql deploy
```

4. Add your Sanity project ID and dataset to `.env`:

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=your_dataset_name
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-nextjs-portfolio)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)



// Log each content item for debugging
  // data.content.forEach((contentItem, index) => {
  //   console.log(`Content Item ${index}:`, contentItem);
  // });

  // function logChildrenOfContentItems(contentItems) {
  //   contentItems.forEach((contentItem, index) => {
  //     console.log(`Content Item ${index}:`);
  //     contentItem.children.forEach((child, childIndex) => {
  //       console.log(`  Child ${childIndex}:`, child);
  //     });
  //     console.log('');
  //   });
  // }

  // // Assuming you have an array of content items called 'data.content'
  // logChildrenOfContentItems(data.content);

   <p>
            {value.children.map((child, index) => {
              if (child.marks && child.marks.includes('code')) {
                const codeText = child.text;
                console.log('Original codeText:', codeText); // Debugging step

                // Remove all backticks
                const cleanedCodeText = codeText.replace(/`/g, '');
                console.log('Cleaned codeText:', cleanedCodeText); // Debugging step

                return (
                  <code
                    key={index}
                    className='bg-slate-900 dark:bg-indigo-200 text-white dark:text-neutral-900 rounded p-6 w-full inline-block overflow-x-auto'
                  >
                    {cleanedCodeText}
                  </code>
                );
              }
              return child.text;
            })}
          </p>