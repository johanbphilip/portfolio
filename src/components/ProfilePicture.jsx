import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ProfilePicture() {
  return (
    <Avatar className="size-25">
      <AvatarImage src="/profilepic.jpg" className="object-cover" />
      <AvatarFallback>JP</AvatarFallback>
    </Avatar>
  );
}
