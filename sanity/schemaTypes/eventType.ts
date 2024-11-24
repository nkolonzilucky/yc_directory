
import { defineType, defineField, defineArrayMember } from 'sanity'

export const eventtype = defineType({
    type: "document",
    name: "eventtype",
    title: "EventType",
    fields: [
      defineField({
        type: "string",
        name: "name",
        title: "name",
        validation: (e) => e.required(),
      }),
      defineField({ type: "text", name: "description", title: "Description" }),
      defineField({
        type: "array",
        name: "list1",
        title: "list1",
        of: [
          defineArrayMember({ type: "reference", to: [{ type: "alarmtype" }] }),
        ],
      }),
    ],
  });
  
  
  