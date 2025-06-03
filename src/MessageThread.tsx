import './Index.css'
import { useState } from 'react'
import clsx from 'clsx'

const message_thread = {
  user_id: 1,
  participants: [
    {
      id: 1,
      name: 'Urien',
      pfp_url: 'https://www.fightersgeneration.com/np2/char1/urien-3rd.jpg'
    },
    {
      id: 2,
      name: 'Ken',
      pfp_url: 'https://www.fightersgeneration.com/np2/char1/ken-3rd.jpg'
    },
    {
      id: 3,
      name: 'Sean',
      pfp_url: 'https://www.fightersgeneration.com/np2/char1/sean-3rd.jpg'
    }
  ],
  content: [
    {
      sender_id: 1,
      content: "Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      sender_id: 3,
      content: "CAPCOM I NEED BUFFS.... CAPCOM YOU WERE RIGHT DURING SECOND IMPACT... BRING BACK SECOND IMPACT....."
    },
    {
      sender_id: 1,
      content: "Listen up I'm going to teach you how to do an unblockable. This hinges on exploiting the block system in third strike. You've gotta hit your opponent from both sides at the same time. Since you can't block in two directions at once, you'll bypass their attempt to defend. This usually relies on a slow-moving projectil and some form of setup that allows you to reach the other side of it."
    },
    {
      sender_id: 2,
      content: "Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    }
  ]
}

type MessageProps = {
  isUser: Boolean
  pfp_url: String
  content: String
  sender: Number
}
function Message({ isUser, pfp_url, content, sender }: MessageProps) {
  const baseMessageClass = "flex flex-row justify-end";
  const otherMessageClass = "justify-end flex-row-reverse";

  const baseContentClass = "mb-1 items-center p-3 rounded-md font-[Inter] text-xs max-w-5/6";
  const userContentClass = "bg-bgBlue";
  const otherContentClass = "bg-bgGray";

  const pfpClass = "object-fill rounded-full size-8"

  return (
    <div className={clsx(baseMessageClass, !isUser && otherMessageClass)}>
      <span className={clsx(baseContentClass, isUser ? userContentClass : otherContentClass)}>
        {content}
      </span>
      <img className={clsx(pfpClass, 'mx-2')} src={pfp_url} alt={`User ID ${sender.toString}`} />
    </ div >
  )
}

export function MessageThread() {
  const shortString = "Hello World"
  const longString = "Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World"

  return (
    <div className="flex flex-col">
      <Message isUser={true} pfp_url='https://www.fightersgeneration.com/np2/char1/urien-3rd.jpg' content={shortString} sender={1} />
      <Message isUser={false} pfp_url='https://www.fightersgeneration.com/np2/char1/sean-3rd.jpg' content={longString} sender={3} />
    </div>
  )
}