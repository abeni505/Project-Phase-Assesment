import Image from "next/image";

const BlogContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-12">
      <article className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6">
          The essential guide to Competitive Programming
        </h1>
        <div className="relative w-full h-60 md:h-80 lg:h-96 mb-8">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Person programming"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src="/author-image.jpg"
              alt="Author"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Author Name</p>
            <p className="text-sm text-gray-500">Position or Date</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          We know that data structures and algorithms can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Competitive programming is a great way to improve your problem-solving
          skills, learn new algorithms, and prepare for coding interviews. This
          guide will cover the basics, from understanding data structures to
          implementing algorithms efficiently.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you’re just starting or looking to sharpen your skills, this
          guide will provide the tips and strategies to excel in competitive
          programming contests. By following these steps, you’ll build a strong
          foundation in algorithms and data structures, enabling you to solve
          complex problems with ease.
        </p>
        <p className="text-lg text-gray-700">
          Let’s dive into the world of competitive programming and start your
          journey to becoming a coding expert!
        </p>
      </article>

      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Related Blog 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-40">
              <Image
                src="/related-blog-image.jpg"
                alt="Related blog"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Design Liberalized Exchange Rate Management
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Image
                  src="/author-image.jpg"
                  alt="Author"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="ml-2">Fred Boone</p>
                <span className="mx-2">•</span>
                <p>Jan 10, 2020</p>
              </div>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  UI/UX
                </span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  Development
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                A little personality goes a long way, especially on a business
                blog. So don’t be afraid to let loose.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>2.3k Likes</p>
                <a href="/blog/slug" className="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-40">
              <Image
                src="/related-blog-image.jpg"
                alt="Related blog"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Design Liberalized Exchange Rate Management
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Image
                  src="/author-image.jpg"
                  alt="Author"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="ml-2">Fred Boone</p>
                <span className="mx-2">•</span>
                <p>Jan 10, 2020</p>
              </div>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  UI/UX
                </span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  Development
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                A little personality goes a long way, especially on a business
                blog. So don’t be afraid to let loose.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>2.3k Likes</p>
                <a href="/blog/slug" className="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-40">
              <Image
                src="/related-blog-image.jpg"
                alt="Related blog"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Design Liberalized Exchange Rate Management
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Image
                  src="/author-image.jpg"
                  alt="Author"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="ml-2">Fred Boone</p>
                <span className="mx-2">•</span>
                <p>Jan 10, 2020</p>
              </div>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  UI/UX
                </span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  Development
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                A little personality goes a long way, especially on a business
                blog. So don’t be afraid to let loose.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>2.3k Likes</p>
                <a href="/blog/slug" className="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Repeat the above block for each related blog post */}
        </div>
      </section>
    </main>
  );
};

export default BlogContent;
