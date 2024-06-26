
import { useParams } from "react-router-dom";
import WriteBlog from "../layouts/Component/WriteBlog";
import DisplayBlogs from "../layouts/Component/DisplayBlogs";


const Blog = () => {
  const { aID } = useParams();

 // Define the URL you want to redirect to
 const redirectTo = (url) => {
  console.log("Redirecting to:", url); // Debug statement
  window.location.href = url;
};

// Check the value of aID and redirect accordingly
const handleRedirection = (redirectUrl) => {
  console.log("Handling redirection:", redirectUrl); // Debug statement
  redirectTo(redirectUrl);
};

console.log("aID:", aID); // Debug statement


  return (
    <>
   
   <h1>Blog / {aID}</h1>
      {aID === "read" ? (
        <DisplayBlogs handleRedirection={handleRedirection} />
      ) : aID === "write" ? (
        
        <WriteBlog />
      ) : (
        // Redirect to another website when aID is a valid URL
        handleRedirection(aID)
      )}
    </>
  );
};

export default Blog;

// const Blog = () => {
//   const { aID } = useParams();
//   let content;
  
//   if (aID === "read") {
//     content = <DisplayBlogs handleRedirection={handleRedirection} />;
//   } else if (aID === "write") {
//     content = <WriteBlog />;
//   } else {
//     content = <p>Content for this blog is not available.</p>;
//   }

//   return (
//     <>
//       <h1>Blog / {aID}</h1>
//       {content}
//     </>
//   );
// };

// export default Blog;