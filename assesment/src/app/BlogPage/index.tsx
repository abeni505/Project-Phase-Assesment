import Image from "next/image";

const BlogContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-12">
      <article className="max-w-4xl w-full">
        <h1 className="text-3xl text-center font-bold mb-6 items-center justify-center">
          Mastering the Art of Code Refactoring
        </h1>
        <p className="text-sm text-gray-500 text-center pb-4">
          Programming, Code
        </p>
        <div className="relative w-full h-60 md:h-80 lg:h-96 mb-8">
          <Image
            src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
            alt="Person programming"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4"></div>
          <div>
            <p className="text-lg font-semibold">No Author</p>
            <p className="text-sm text-gray-500">Programming, Code</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Code refactoring is an essential practice in software development that
          often separates novice programmers from experienced engineers.
          Refactoring isn&apos;t just about tidying up your code; it&apos;s
          about improving its structure, readability, and maintainability.
          Let&apos;s delve into the key aspects of mastering the art of code
          refactoring.
        </p>
      </article>

      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Related Blog 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
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
                  src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
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
                blog. So don&apos;t be afraid to let loose.
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
                src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
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
                  src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
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
                blog. So don&apos;t be afraid to let loose.
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
                src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
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
                  src="https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg"
                  alt="Author"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="ml-2">Fred Boone</p>
                <span className="mx-2">•</span>
                <p>Jan 10 2020</p>
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
                blog. So don&apos;t be afraid to let loose.
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
