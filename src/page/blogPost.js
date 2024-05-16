import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function Blogpost() {
  const initialComments = [
    { id: 1, user: "Alice", content: "Great post!" },
    { id: 2, user: "Bob", content: "Nice job!" },
  ];

  const handleShareBlog = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: "Check out this blog!",
          url: window.location.href,
        });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing blog:", error);
    }
  };

  const [comments, setComments] = useState(initialComments);
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-center font-bold mb-4">Blog Title</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>

            <span className="text-gray-700">Useer name</span>
          </div>
          <span className="text-gray-500">July 15, 2024</span>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula vehicula risus, id tempus lorem sollicitudin vitae.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Duis sollicitudin ullamcorper odio, ut
            interdum lectus. Mauris accumsan libero libero, ac lacinia est
            consectetur eget. Suspendisse vitae mi nec orci sodales pharetra.
            Donec in nisi non odio faucibus commodo. Pellentesque vel semper
            justo. Nulla facilisi. Proin pretium tincidunt risus. Duis et nunc
            ex. Nulla facilisi. Ut vehicula feugiat nisl vel fringilla. In
            molestie id dui non vehicula.
          </p>
        </div>
        <div className="flex gap-5">
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleShareBlog}
          >
            Share
          </button>
          <div className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-24">
            <FacebookShareButton url={window.location.href}>
              Facebook
            </FacebookShareButton>
          </div>
          <div className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-22">
            <TwitterShareButton url={window.location.href}>
              Twitter
            </TwitterShareButton>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <textarea
              className="w-full h-24 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add your comment..."
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add Comment
            </button>
          </div>

          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-100 p-4 mb-2 rounded">
              <div className="flex justify-between">
                <span className="font-semibold">{comment.user}</span>
                <span className="text-gray-500">Today</span>
              </div>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
