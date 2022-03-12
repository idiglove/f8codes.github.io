export type TagsQuery = {
  nodes: {
    node: {
      frontmatter: {
        tags: string[];
      };
    };
  };
};

export type PageQuery = {
  totalCount: number;
  edges: [
    {
      node: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
          path: string;
          thumbnail: string;
        };
        excerpt: string;
      };
    }
  ];
};
