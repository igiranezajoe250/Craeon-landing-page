import { NextSeo } from 'next-seo';

export const generateMetaTags = (title: string, description: string, url: string, image: string) => {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={url}
            openGraph={{
                url: url,
                title: title,
                description: description,
                images: [
                    {
                        url: image,
                        alt: title,
                    },
                ],
                site_name: 'Craeon',
            }}
            twitter={{
                handle: '@craeon',
                site: '@craeon',
                cardType: 'summary_large_image',
            }}
        />
    );
};