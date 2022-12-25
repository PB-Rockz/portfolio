import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "heroImageL",
      title: "HeroImageL",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
    defineField({
      name: "heroImageD",
      title: "HeroImageD",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
    defineField({
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    }),
    defineField({
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
    defineField({
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }),
  ],
});
