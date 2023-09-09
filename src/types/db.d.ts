// *.d.ts means that we don't have to import them through out our application it is available by default. (It means definition)
interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

interface Chat {
  id: string;
  messages: Message[];
}

interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
}
