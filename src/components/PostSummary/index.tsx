import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

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
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
