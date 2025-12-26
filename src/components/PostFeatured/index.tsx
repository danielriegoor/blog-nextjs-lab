import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_8.png',
          alt: 'bryen',
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          24/07/2025 10:00
        </time>
        <PostHeading as="h1" url={postLink}>
          animi earum maiores asperiores suscipit nisi
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          libero rem nulla, consequatur veritatis assumenda, possimus obcaecati
          debitis? Neque architecto dignissimos iusto quibusdam? Vitae?
        </p>
      </div>
    </section>
  );
}
