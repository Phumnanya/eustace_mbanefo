'use client';
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function SEO({title, description}) {
    const pathname = usePathname();
    const canonical = `https://solarscript.com.ng${pathname}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Solarscript Tech",
        "url": "https://solarscript.com.ng",
        "logo": "https://solarscript.com.ng/app/icon.jpg"
    };
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href="{canonical}" />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="{title}" />
            <meta property="og:description" content="{description}" />
            <meta property="og:url" content="{canonical}" />

            <script type="application/ld+json" 
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
        </Head>
    );
}

/*
"dev": "next dev --turbopack",
"start": "next start",

//deployment
"dev": "node server.js",
"start": "NODE_ENV=production node server.js",
*/
