import { fetchRedis } from "./redis";

export const getFriendsByUserId = async (userId: string) => {
  //Retireve friends for current User
  const friendIds = (await fetchRedis(
    "smembers",
    `user:${userId}:friends`
  )) as string[];

  const friends = await Promise.all(
    friendIds.map(async (friendId) => {
      const result = (await fetchRedis("get", `user:${friendId}`)) as string;
      const friend = JSON.parse(result) as User;
      return friend;
    })
  );

  return friends;
};
