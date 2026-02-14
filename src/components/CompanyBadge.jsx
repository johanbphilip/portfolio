import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function CompanyBadge({ company, icon }) {
  return (
    <Badge
      variant="secondary"
      className="px-1 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
    >
      <CompanyLogo icon={icon} />
      {company}
    </Badge>
  );
}

function CompanyLogo({ icon }) {
  return (
    <Avatar className="size-4">
      <AvatarImage src={icon} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
