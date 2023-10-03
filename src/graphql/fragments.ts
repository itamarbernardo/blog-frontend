import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFileEntity{
    id,
    attributes{
      alternativeText,
      url
    }
  }

  fragment cover on PostEntity {
    id,
    attributes{
        cover{
          data{
            ...image
          }
        }
    }
  }

  fragment tag on TagEntity {
    id,
    attributes{
      displayName,
      slug
    }
  }

  fragment author on AuthorEntity {
    id,
    attributes{
      displayName,
      slug
    }
  }

  fragment category on CategoryEntity {
    id,
    attributes{
      displayName,
      slug
    }
  }

  fragment tags on PostEntity {
    attributes{
      tags {
        data{
          ...tag
        }
      }
    }
  }

  fragment authorPost on PostEntity {
    attributes{
      author{
        data{
          ...author
        }
      }
    }
  }

  fragment categories on PostEntity {
    attributes{
      categories{
        data{
          ...category
        }
      }
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment post on PostEntity {
    id,
    attributes {
      slug,
      title,
      excerpt,
      createdAt,
      content,
      allowComments,
    },
    ...tags,
    ...cover,
    ...categories,
    ...authorPost
  }

  fragment setting on SettingEntity {
    id,
    attributes {
      blogName,
      blogDescription,
      logo{
        data{
          ...image
        }
      }
      menuLink {
        ...menuLink
      }
      text
    }
  }
`;
