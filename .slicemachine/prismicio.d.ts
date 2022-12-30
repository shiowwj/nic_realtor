// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Articles Section documents */
interface ArticlesSectionDocumentData {
    /**
     * articlesSectionTitle field in *Articles Section*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_section.articlessectiontitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    articlessectiontitle: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Articles Section*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_section.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticlesSectionDocumentDataSlicesSlice>;
}
/**
 * Slice for *Articles Section → Slice Zone*
 *
 */
type ArticlesSectionDocumentDataSlicesSlice = ArticlesViewSectionSlice;
/**
 * Articles Section document from Prismic
 *
 * - **API ID**: `articles_section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlesSectionDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticlesSectionDocumentData>, "articles_section", Lang>;
/** Content for blogPosts documents */
interface BlogpostsDocumentData {
    /**
     * Slice Zone field in *blogPosts*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blogposts.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogpostsDocumentDataSlicesSlice>;
}
/**
 * Slice for *blogPosts → Slice Zone*
 *
 */
type BlogpostsDocumentDataSlicesSlice = BlogPostCardSlice;
/**
 * blogPosts document from Prismic
 *
 * - **API ID**: `blogposts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BlogpostsDocumentData>, "blogposts", Lang>;
/** Content for Consultation Block documents */
interface ConsultationBlockDocumentData {
    /**
     * Slice Zone field in *Consultation Block*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: consultation_block.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ConsultationBlockDocumentDataSlicesSlice>;
}
/**
 * Slice for *Consultation Block → Slice Zone*
 *
 */
type ConsultationBlockDocumentDataSlicesSlice = ArticlesViewSectionSlice;
/**
 * Consultation Block document from Prismic
 *
 * - **API ID**: `consultation_block`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ConsultationBlockDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ConsultationBlockDocumentData>, "consultation_block", Lang>;
/** Content for CTA learn more documents */
interface CtaLearnMoreDocumentData {
    /**
     * Slice Zone field in *CTA learn more*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_learn_more.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<CtaLearnMoreDocumentDataSlicesSlice>;
}
/**
 * Slice for *CTA learn more → Slice Zone*
 *
 */
type CtaLearnMoreDocumentDataSlicesSlice = CtaBlockSlice;
/**
 * CTA learn more document from Prismic
 *
 * - **API ID**: `cta_learn_more`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CtaLearnMoreDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CtaLearnMoreDocumentData>, "cta_learn_more", Lang>;
export type AllDocumentTypes = ArticlesSectionDocument | BlogpostsDocument | ConsultationBlockDocument | CtaLearnMoreDocument;
/**
 * Primary content in ArticlesViewSection → Primary
 *
 */
interface ArticlesViewSectionSliceDefaultPrimary {
    /**
     * Title field in *ArticlesViewSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: articles_view_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ArticlesViewSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: articles_view_section.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ArticlesViewSection → Items
 *
 */
export interface ArticlesViewSectionSliceDefaultItem {
    /**
     * ArticleViewSectionImage field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewsectionimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    articleviewsectionimage: prismicT.ImageField<never>;
    /**
     * ArticleViewCardTitle field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewcardtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    articleviewcardtitle: prismicT.RichTextField;
    /**
     * ArticleViewCardDescription field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewcarddescription
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    articleviewcarddescription: prismicT.RichTextField;
}
/**
 * Default variation for ArticlesViewSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ArticlesViewSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticlesViewSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticlesViewSectionSliceDefaultPrimary>, Simplify<ArticlesViewSectionSliceDefaultItem>>;
/**
 * Primary content in ArticlesViewSection → Primary
 *
 */
interface ArticlesViewSectionSliceWithoutImagePrimary {
    /**
     * Title field in *ArticlesViewSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: articles_view_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ArticlesViewSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: articles_view_section.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ArticlesViewSection → Items
 *
 */
export interface ArticlesViewSectionSliceWithoutImageItem {
    /**
     * ArticleViewSectionImage field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewsectionimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    articleviewsectionimage: prismicT.ImageField<never>;
    /**
     * ArticleViewCardTitle field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewcardtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    articleviewcardtitle: prismicT.RichTextField;
    /**
     * ArticleViewCardDescription field in *ArticlesViewSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles_view_section.items[].articleviewcarddescription
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    articleviewcarddescription: prismicT.RichTextField;
}
/**
 * without image variation for ArticlesViewSection Slice
 *
 * - **API ID**: `withoutImage`
 * - **Description**: `ArticlesViewSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticlesViewSectionSliceWithoutImage = prismicT.SharedSliceVariation<"withoutImage", Simplify<ArticlesViewSectionSliceWithoutImagePrimary>, Simplify<ArticlesViewSectionSliceWithoutImageItem>>;
/**
 * Slice variation for *ArticlesViewSection*
 *
 */
type ArticlesViewSectionSliceVariation = ArticlesViewSectionSliceDefault | ArticlesViewSectionSliceWithoutImage;
/**
 * ArticlesViewSection Shared Slice
 *
 * - **API ID**: `articles_view_section`
 * - **Description**: `ArticlesViewSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticlesViewSectionSlice = prismicT.SharedSlice<"articles_view_section", ArticlesViewSectionSliceVariation>;
/**
 * Primary content in BlogPostCard → Primary
 *
 */
interface BlogPostCardSliceDefaultPrimary {
    /**
     * image field in *BlogPostCard → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post_card.primary.cardImage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cardImage: prismicT.ImageField<never>;
    /**
     * Title field in *BlogPostCard → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: blog_post_card.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *BlogPostCard → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: blog_post_card.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for BlogPostCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogPostCard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostCardSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BlogPostCardSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BlogPostCard*
 *
 */
type BlogPostCardSliceVariation = BlogPostCardSliceDefault;
/**
 * BlogPostCard Shared Slice
 *
 * - **API ID**: `blog_post_card`
 * - **Description**: `BlogPostCard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostCardSlice = prismicT.SharedSlice<"blog_post_card", BlogPostCardSliceVariation>;
/**
 * Primary content in CtaBlock → Primary
 *
 */
interface CtaBlockSliceDefaultPrimary {
    /**
     * Title field in *CtaBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *CtaBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Default variation for CtaBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CtaBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CtaBlockSliceDefaultPrimary>, never>;
/**
 * Primary content in CtaBlock → Primary
 *
 */
interface CtaBlockSliceWithCtaButtonPrimary {
    /**
     * Title field in *CtaBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *CtaBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * CTA Button Text field in *CtaBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta_block.primary.cta_button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_button_text: prismicT.KeyTextField;
}
/**
 * With CTA Button variation for CtaBlock Slice
 *
 * - **API ID**: `withCtaButton`
 * - **Description**: `CtaBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBlockSliceWithCtaButton = prismicT.SharedSliceVariation<"withCtaButton", Simplify<CtaBlockSliceWithCtaButtonPrimary>, never>;
/**
 * Slice variation for *CtaBlock*
 *
 */
type CtaBlockSliceVariation = CtaBlockSliceDefault | CtaBlockSliceWithCtaButton;
/**
 * CtaBlock Shared Slice
 *
 * - **API ID**: `cta_block`
 * - **Description**: `CtaBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBlockSlice = prismicT.SharedSlice<"cta_block", CtaBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArticlesSectionDocumentData, ArticlesSectionDocumentDataSlicesSlice, ArticlesSectionDocument, BlogpostsDocumentData, BlogpostsDocumentDataSlicesSlice, BlogpostsDocument, ConsultationBlockDocumentData, ConsultationBlockDocumentDataSlicesSlice, ConsultationBlockDocument, CtaLearnMoreDocumentData, CtaLearnMoreDocumentDataSlicesSlice, CtaLearnMoreDocument, AllDocumentTypes, ArticlesViewSectionSliceDefaultPrimary, ArticlesViewSectionSliceDefaultItem, ArticlesViewSectionSliceDefault, ArticlesViewSectionSliceWithoutImagePrimary, ArticlesViewSectionSliceWithoutImageItem, ArticlesViewSectionSliceWithoutImage, ArticlesViewSectionSliceVariation, ArticlesViewSectionSlice, BlogPostCardSliceDefaultPrimary, BlogPostCardSliceDefault, BlogPostCardSliceVariation, BlogPostCardSlice, CtaBlockSliceDefaultPrimary, CtaBlockSliceDefault, CtaBlockSliceWithCtaButtonPrimary, CtaBlockSliceWithCtaButton, CtaBlockSliceVariation, CtaBlockSlice };
    }
}
