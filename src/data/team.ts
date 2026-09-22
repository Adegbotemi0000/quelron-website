export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const groupTeam: TeamMember[] = [
  {
    name: "Taiwo Adeyeye",
    role: "Co-Founder & Chief Executive Officer",
    image: "/team/taiwo-adeyeye.jpg",
    bio: "Sets the vision for the Quelron Group and steers strategy across all six subsidiaries.",
  },
  {
    name: "Gbotemi Ayodeji Alao",
    role: "Co-Founder & Chief Operations Officer",
    image: "/team/gbotemi-alao.jpg",
    bio: "Oversees day-to-day operations and execution across every subsidiary in the group.",
  },
  {
    name: "Khaleed Usman",
    role: "Co-Founder & Head of Design",
    image: "/team/khaleed-usman-avatar.svg",
    bio: "Shapes the Quelron brand DNA and how it shows up across every subsidiary.",
  },
];
