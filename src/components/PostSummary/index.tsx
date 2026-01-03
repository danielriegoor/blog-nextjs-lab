import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type PostSumaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSumary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: PostSumaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
