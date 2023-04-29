
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/assets/icons";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex-wrap flex-col lg:flex justify-center items-center  gap-7 text-lg font-normal font-jost  text-gray-700 ">
      <div className="flex flex-col m-5 pt-12 gap-10 lg:flex-row justify-center items-start lg:items-center lg:mx-44  lg:gap-20">
        <div className="flex flex-col w-full lg:w-2/5 leading-normal gap-2">
          <div className="flex flex-col">
            <div className="h-14 w-40">LOGO
            </div>

            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <>
            <SocialIcons />
          </>
        </div>
        <div className="grid grid-cols-1 justify-start gap-3 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col">
            <div className="font-DmserifDisplay text-gray-800">Pages</div>
            <div className="flex flex-col leading-relaxed lg:leading-loose w-fit ">
              {Pages.map((page) => (
                <Link passHref href={page.link}>
                  <div>{page.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-DmserifDisplay text-gray-800">skills</div>
            <div className="flex flex-col leading-relaxed lg:leading-loose w-fit ">
              {Skills.map((skill) => (
                <Link passHref href={skill.link}>
                  <div>{skill.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-DmserifDisplay text-gray-800">Contact</div>
            <div className="flex flex-col gap-1 lg:gap-3">
              <div>Address</div>
              <div>Email</div>
              <div>Phone Number</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#E5E5E5] h-0.5 lg:h-[1px] mt-5"></div>
      <div className="flex items-center justify-center mx-2">
        Copyright &#169; Portfolio | Designed by Anjali Poudel
      </div>
      <div className="h-4"></div>
    </div>
  );
}

const Pages = [
  { title: "Home", link: "#" },
  { title: "CV ", link: "#" },
  { title: "Project", link: "#" },
  { title: "Writing", link: "#" },
  { title: "Contact", link: "#" },
];

const Skills = [
  { title: "skills", link: "#" },
  { title: "skills ", link: "#" },
  { title: "skills", link: "#" },
  { title: "skills ", link: "#" },
  { title: "skills", link: "#" },
];

const SocialIcons = () => {
  const socialMediaIcons = [
    { link: "#", icon: <FacebookIcon /> },
    { link: "#", icon: <TwitterIcon /> },
    { link: "#", icon: <InstagramIcon /> },
    { link: "#", icon: <LinkedinIcon /> },
  ];
  return (
    <div className="flex text-[#292F36] gap-5">
      {socialMediaIcons.map(({ link, icon }, index) => (
        <a className="h-8 w-8" href={link} key={index}>
          {icon}
        </a>
      ))}
    </div>
  );
};