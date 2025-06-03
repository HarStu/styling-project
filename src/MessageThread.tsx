import './Index.css'
import { useState } from 'react'
import clsx from 'clsx'

type User = {
  id: number,
  name: String,
  pfp_url: String
}

type UserMessage = {
  sender_id: number,
  content: String
}

type MessageThread = {
  user_id: number,
  participants: User[]
  messages: UserMessage[]
}

const message_thread: MessageThread = {
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
  messages: [
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
    },
    {
      sender_id: 1,
      content: "No really -- Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      sender_id: 1,
      content: "I'm so serious -- Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      sender_id: 2,
      content: "It's for real. Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    },
    {
      sender_id: 2,
      content: "LOCK IN. LISTEN. Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    },
  ]
}

type MessageProps = {
  isUser: Boolean
  pfp_url: String
  content: String
  sender: Number
  sameTop: Boolean
  sameBottom: Boolean
}
function Message({ isUser, pfp_url, content, sender, sameTop, sameBottom }: MessageProps) {
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
  const generateMessageProps = (message_thread: MessageThread) => {
    // values I need to get to complete a message:
    //  - isUser (does message_thread.content[i].id === message_thread.user_id?)
    //  - pfp_url (search in 'participants' for associated id)
    //  - content ()
    //  - sender
    //  - sameTop (does message_thread.content[i-1].id === message_thread.user_id? always FALSE on the first one)
    //  - sameBottom (does message_thread.content[i+1].id === message_thread.user_id? always FALSE on the last one)

    const messagePropsList: MessageProps[] = message_thread.messages.map((message, i) => {
      const messageProps: Partial<MessageProps> = {};
      messageProps.isUser = message.sender_id === message_thread.user_id;
      messageProps.content = message.content;
      messageProps.sender = message.sender_id;
      const participant = message_thread.participants.find((user) => user.id === message.sender_id)
      if (participant === undefined) {
        throw new Error('Message unassociated with any user found in thread')
      } else {
        messageProps.pfp_url = participant.pfp_url
      }
      if (i != 0) {
        messageProps.sameTop = message_thread.messages[i - 1].sender_id === messageProps.sender;
      } else {
        messageProps.sameTop = false;
      }
      if (i < message_thread.messages.length - 2) {
        messageProps.sameTop = message_thread.messages[i + 1].sender_id === messageProps.sender;
      } else {
        messageProps.sameTop = false;
      }
      return messageProps
    })
    return messagePropsList;
  }

  return (
    <div className="flex flex-col">
      {generateMessageProps(message_thread).map((mp) => <Message isUser={mp.isUser} pfp_url={mp.pfp_url} content={mp.content} sender={mp.sender} sameTop={mp.sameTop} sameBottom={mp.sameBottom} />)}
    </div>
  )
}