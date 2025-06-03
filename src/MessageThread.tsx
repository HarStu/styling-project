import './Index.css'
import clsx from 'clsx'

type User = {
  id: number,
  name: String,
  pfp_url: String
}

type UserMessage = {
  msg_id: number,
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
      msg_id: 0,
      sender_id: 1,
      content: "Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      msg_id: 1,
      sender_id: 3,
      content: "CAPCOM I NEED BUFFS.... CAPCOM YOU WERE RIGHT DURING SECOND IMPACT... BRING BACK SECOND IMPACT....."
    },
    {
      msg_id: 2,
      sender_id: 1,
      content: "Listen up I'm going to teach you how to do an unblockable. This hinges on exploiting the block system in third strike. You've gotta hit your opponent from both sides at the same time. Since you can't block in two directions at once, you'll bypass their attempt to defend. This usually relies on a slow-moving projectil and some form of setup that allows you to reach the other side of it."
    },
    {
      msg_id: 3,
      sender_id: 2,
      content: "Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    },
    {
      msg_id: 4,
      sender_id: 1,
      content: "No really -- Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      msg_id: 5,
      sender_id: 1,
      content: "I'm so serious -- Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      msg_id: 6,
      sender_id: 1,
      content: "I'm so serious -- Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector? Who up throwing they aegis reflector?"
    },
    {
      msg_id: 7,
      sender_id: 2,
      content: "It's for real. Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    },
    {
      msg_id: 8,
      sender_id: 2,
      content: "LOCK IN. LISTEN. Imagine not having a built-in unblockable. This post brought to you by SA3 DENJIN gang"
    },
  ]
}

type MessageProps = {
  msgId: number
  isUser: Boolean
  pfp_url: String
  content: String
  sender: Number
  sameTop: Boolean
  sameBottom: Boolean
}
function Message({ msgId, isUser, pfp_url, content, sender, sameTop, sameBottom }: MessageProps) {
  const baseMessageClass = "flex flex-row justify-end";
  const otherMessageClass = "justify-end flex-row-reverse";

  const baseContentClass = "mb-1 items-center p-3 font-[Inter] font-md text-xs max-w-5/6";
  const userContentClass = "bg-bgBlue";
  const otherContentClass = "bg-bgGray";

  const pfpClass = "object-fill rounded-full size-8"

  let rounding = "";
  if (isUser) {
    rounding += " rounded-tl-md rounded-bl-md"
    rounding += (sameTop ? " rounded-tr-none" : " rounded-tr-md")
    rounding += (sameBottom ? " rounded-br-none" : " rounded-br-md")
  } else {
    rounding += " rounded-tr-md rounded-br-md"
    rounding += (sameTop ? " rounded-tl-none" : " rounded-tl-md")
    rounding += (sameBottom ? " rounded-bl-none" : " rounded-bl-md")
  }

  console.log(`"msg ${msgId}: sameTop ${sameTop}, sameBottom ${sameBottom}`)

  return (
    <div className={clsx(baseMessageClass, !isUser && otherMessageClass)}>
      <span className={clsx(baseContentClass, rounding, isUser ? userContentClass : otherContentClass)}>
        {content}
      </span>
      <img className={clsx(pfpClass, 'mx-2')} src={pfp_url} alt={`User ID ${sender.toString}`} />
    </ div >
  )
}

export function MessageThread() {

  const getPfpUrl = (participants: User[], sender_id: number) => {
    const match = participants.find((user) => user.id === sender_id)
    if (match === undefined) {
      throw new Error('Message unassociated with any user found in thread')
    } else {
      return match.pfp_url
    }
  }

  return (
    <div className="flex flex-col">
      {message_thread.messages.map((message, idx, messageList) => {

        const props: MessageProps = {
          msgId: message.msg_id,
          isUser: message.sender_id === message_thread.user_id,
          pfp_url: getPfpUrl(message_thread.participants, message.sender_id),
          content: message.content,
          sender: message.sender_id,
          sameTop: (idx !== 0 ? messageList[idx - 1].sender_id === message.sender_id : false),
          sameBottom: (idx < messageList.length - 1 ? message_thread.messages[idx + 1].sender_id === message.sender_id : false)
        }

        return <Message {...props} />
      })}
    </div>
  )
}