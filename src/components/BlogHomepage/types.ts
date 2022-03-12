import { PageQuery, TagsQuery } from "./../../templates/query.types";
export type BlogHomepageProps = {
  data: {
    tagsQuery: TagsQuery;
    pageQuery: PageQuery;
  };
  navigation?: {
    pageContext: {
      currentPage: number;
      numPages: number;
    };
  };
};
