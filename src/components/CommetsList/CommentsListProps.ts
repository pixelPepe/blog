export interface CommentsListPropsI {
  comments: {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  }[];
}
