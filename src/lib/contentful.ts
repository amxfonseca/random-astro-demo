import contentful, {type EntryFieldTypes} from "contentful";

const [host, accessToken] = import.meta.env.DEV
    ? ["preview.contentful.com", import.meta.env.CONTENTFUL_PREVIEW_TOKEN]
    : ["cdn.contentful.com", import.meta.env.CONTENTFUL_DELIVERY_TOKEN]

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken, host
});

interface ContentfulPage {
    contentTypeId: "page",
    fields: {
        title: EntryFieldTypes.Text
        content: EntryFieldTypes.RichText,
    }
}

export const getPage = (id: string) => contentfulClient.getEntry<ContentfulPage>(id)
