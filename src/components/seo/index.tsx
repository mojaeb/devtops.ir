import * as React from "react"
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"
import {useStaticQuery, graphql} from "gatsby"


interface ISEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
}


const SEO: React.FC<ISEOProps> = ({title = null, description = null, image = null, article = false}) => {
    const {pathname} = useLocation();
    const {site} = useStaticQuery(query);
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        image: defaultImage,
    } = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };




    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name={"google-site-verification"} content={`NqyD3H7BsvtpUmy9iA2eUn13pkkA-r_VCCOUy0Ncuyw`} />
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            {seo.url && <meta property="og:url" content={seo.url}/>}
            {(article ? true : null) && <meta property="og:type" content="article"/>}
            {seo.title && <meta property="og:title" content={seo.title}/>}
            {seo.description && (
                <meta property="og:description" content={seo.description}/>
            )}
            {seo.image && <meta property="og:image" content={seo.image}/>}
        </Helmet>
    )
};
export default SEO


const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl
                image
            }
        }
    }
`;
