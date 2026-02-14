import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function TechStackBadge({ stackItem, icon }) {
  return (
    <Badge
      variant="outline"
      className="px-0.5 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
    >
      <TechStackLogo icon={icon} />
      {stackItem}
    </Badge>
  );
}

function TechStackLogo({ icon }) {
  return (
    <Avatar className="size-4">
      <AvatarImage src={icon} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
