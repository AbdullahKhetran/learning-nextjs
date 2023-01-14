# Next.js 13 Generating Static Params

The generateStaticParams server function can be used in combination with dynamic route segments to define the list of route segment parameters that will be statically generated at build time instead of on-demand.

This replaces getStaticPaths of Next.js 12 with a simplified API. generateStaticParams doesn't require any context parameters. It runs at build time before the corresponding Layouts or Pages are generated. It will not be called again during revalidation (ISR).

The primary benefit of the generateStaticParams function in it's smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically deduped. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.

[Read the Generating Static Params](https://beta.nextjs.org/docs/data-fetching/generating-static-params)

[Read the dynamic segments docs](https://beta.nextjs.org/docs/routing/defining-routes#dynamic-segments)

See [generateStaticParams server function documentation](https://beta.nextjs.org/docs/api-reference/generate-static-params) for more information and advanced use cases.

Create app/[name] directory

Update app/[name]/page.tsx file

Update app/page.tsx file

Start the Server:

        npm run dev

Open the Browser:

        http://localhost:3000/
