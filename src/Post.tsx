import "./Index.css"

type User = {
  name: String
  pfp_url: string
}

type Content = {
  timestamp: String
  group: String
  img_url: string
  description: String
  like_count: number
  comment_count: number
}

type FullPost = {
  user: User
  content: Content
}

const post: FullPost = {
  user: {
    name: "Helena",
    pfp_url: '/helena.png',
  },
  content: {
    timestamp: "2025-04-01T12:00:00",
    group: "Group name",
    img_url: "/flowers.jpg",
    description: "Post description",
    like_count: 21,
    comment_count: 4
  }
}


export function Post() {
  const dateDif = (ts: String) => {
    console.log(`PLACEHOLDER DATEDIF. ${ts}`)
    return "3 min ago"
  }

  return (
    <div className="flex flex-row h-128 w-128">
      <span className="flex-col w-1/6">
        <img className="object-fill rounded-full w-2/3 m-2" src={post.user.pfp_url} alt="pfp" />
      </span>
      <div className="flex flex-col font-[Inter] w-full text-sm my-3">
        <div>
          <div>
            <span>
              {post.user.name}
            </span>
            <span className="text-textGray">
              {" in " + post.content.group}
            </span>
          </div>
          <div className="text-textGray">
            {dateDif(post.content.timestamp)}
          </div>
        </div>
        <img className="aspect-square object-cover rounded my-4" src={post.content.img_url} alt="content" />
        <div className="text-lg">
          {post.content.description}
        </div>
        <div className="text-sm flex gap-2 flex-row">
          <img src='/heart.svg' />
          <div className="flex text-md items-center">
            {post.content.like_count.toString() + " likes"}
          </div>
          <div className="flex mx-1.5" />
          <img src='comments.svg' />
          <div className="flex text-md items-center">
            {post.content.comment_count.toString() + " comments"}
          </div>
        </div>
      </div>
    </div>
  )
}