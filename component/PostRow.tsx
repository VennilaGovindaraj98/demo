interface PostParams {
  id:     number;
  title:  string;
  body:   string;
}

interface postsParams {
  posts: PostParams[]
}

function PostRow ({posts}:  postsParams) {
  return (
    <>
      {posts.map(post => {
        return (<>
        <tr key={post.id}>
        <td> {post.id} </td>
        <td> {post.title} </td>
        <td>{post.body}</td>
        </tr>
        </>)
      })}
    </>
  )

}

export default PostRow