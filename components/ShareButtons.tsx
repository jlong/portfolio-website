'use client'

import { LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from "react-share"
import { Post } from 'contentlayer/generated'

const site = 'https://32pixels.co'

export const ShareButtons = ({
  post
}: {
  post: Post
}) => (
  <div className="flex items-center gap-2 prose lg:prose-lg">
    <span className="italic">Share this post!</span>

    <div className="flex items-center gap-1">
      <TwitterShareButton
        title={post.title}
        url={site + post.url}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        title={post.title}
        summary={post.summary}
        source="32pixels"
        url={site + post.url}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <EmailShareButton
        title={post.title}
        url={site + post.url}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  </div>
)
